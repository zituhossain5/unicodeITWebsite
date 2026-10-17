import { createHmac } from "node:crypto";
import type { ContactEnquiry } from "./uni-mail-hub";

export type UniCrmAttribution = {
  sourceUrl: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

export type UniCrmLeadInput = {
  enquiry: ContactEnquiry;
  submissionId: string;
  submittedAt: string;
  attribution: UniCrmAttribution;
};

export type UniCrmDeliveryResult =
  | { status: "accepted"; submissionId: string }
  | { status: "not-configured"; submissionId: string };

export class UniCrmError extends Error {
  constructor(
    public readonly kind: "configuration" | "timeout" | "delivery",
    public readonly httpStatus?: number,
  ) {
    super(`UniCRM ${kind} error`);
  }
}

export function buildUniCrmLeadPayload({ enquiry, submissionId, submittedAt, attribution }: UniCrmLeadInput) {
  const nationalNumber = enquiry.whatsappNumber.replace(/[\s().-]/g, "");
  const phone = nationalNumber.startsWith("+")
    ? nationalNumber
    : nationalNumber ? `${enquiry.whatsappDialCode}${nationalNumber}` : "";
  const subjectName = (enquiry.company || enquiry.name).replace(/[\r\n]+/g, " ");

  return {
    submissionId,
    fullName: enquiry.name,
    company: enquiry.company,
    email: enquiry.email,
    phone,
    service: enquiry.service,
    budget: enquiry.budget,
    subject: `${subjectName} – ${enquiry.service}`,
    message: enquiry.message,
    sourceUrl: attribution.sourceUrl,
    ...(attribution.referrer ? { referrer: attribution.referrer } : {}),
    ...(attribution.utmSource ? { utmSource: attribution.utmSource } : {}),
    ...(attribution.utmMedium ? { utmMedium: attribution.utmMedium } : {}),
    ...(attribution.utmCampaign ? { utmCampaign: attribution.utmCampaign } : {}),
    submittedAt,
  };
}

export async function sendContactToUniCRM(input: UniCrmLeadInput): Promise<UniCrmDeliveryResult> {
  const rawUrl = process.env.UNICRM_WEB_TO_LEAD_URL?.trim();
  const secret = process.env.UNICRM_WEB_TO_LEAD_SECRET?.trim();

  if (!rawUrl && !secret && process.env.NODE_ENV !== "production") {
    console.info("UniCRM Web-to-Lead integration is not configured");
    return { status: "not-configured", submissionId: input.submissionId };
  }
  if (!rawUrl || !secret) throw new UniCrmError("configuration");

  let endpoint: URL;
  try {
    endpoint = new URL(rawUrl);
    if (
      endpoint.protocol !== "https:" ||
      endpoint.username || endpoint.password || endpoint.search || endpoint.hash ||
      !/^\/api\/v1\/inbound\/web-to-lead\/[^/]+\/?$/.test(endpoint.pathname)
    ) throw new Error("Invalid Web-to-Lead endpoint");
  } catch {
    throw new UniCrmError("configuration");
  }

  const body = JSON.stringify(buildUniCrmLeadPayload(input));
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const signature = createHmac("sha256", secret)
    .update(`${timestamp}.${body}`)
    .digest("hex");

  let response: Response;
  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-UniCRM-Timestamp": timestamp,
        "X-UniCRM-Idempotency-Key": input.submissionId,
        "X-UniCRM-Signature": signature,
      },
      body,
      signal: AbortSignal.timeout(9_000),
      cache: "no-store",
    });
  } catch (error) {
    const name = error instanceof Error ? error.name : "";
    throw new UniCrmError(name === "TimeoutError" || name === "AbortError" ? "timeout" : "delivery");
  }

  if (response.status !== 202) throw new UniCrmError("delivery", response.status);
  return { status: "accepted", submissionId: input.submissionId };
}
