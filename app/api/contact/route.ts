import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { contactServiceOptions } from "../../../lib/contact-form-options";
import { MailHubError, sendContactEnquiry } from "../../../lib/server/uni-mail-hub";
import { sendContactToUniCRM, UniCrmError } from "../../../lib/server/unicrm-web-to-lead";

export const runtime = "nodejs";
const budgets = new Set(["Under $2K", "$2K - $5K", "$5K - $10K", "$10K - $25K", "$25K+"]);
const services = new Set<string>(contactServiceOptions);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fail = (errorCode: string, status: number) => NextResponse.json({ ok: false, errorCode }, { status });
const safeAttributionText = (value: unknown, maxLength: number) =>
  typeof value === "string" && value.length <= maxLength && !/[\x00-\x1f\x7f]/.test(value)
    ? value.trim()
    : "";

function contactSourceUrl(value: unknown, request: Request, origin: string | null) {
  const fallback = new URL("/contact", origin || request.url);
  if (typeof value !== "string" || value.length > 2048) return fallback;
  try {
    const url = new URL(value);
    if (url.origin === fallback.origin && url.pathname === "/contact" && !url.username && !url.password) {
      url.hash = "";
      return url;
    }
  } catch { /* Ignore an invalid browser URL. */ }
  return fallback;
}

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") || 0) > 16_384) return fail("PAYLOAD_TOO_LARGE", 413);
  const origin = request.headers.get("origin");
  const allowedOrigins = process.env.CONTACT_FORM_ALLOWED_ORIGIN
    ? process.env.CONTACT_FORM_ALLOWED_ORIGIN.split(",").map((value) => value.trim())
    : [new URL(request.url).origin];
  if (origin && !allowedOrigins.includes(origin)) return fail("ORIGIN_REJECTED", 403);

  let input: Record<string, unknown>;
  try { input = await request.json(); } catch { return fail("INVALID_JSON", 400); }
  if (!input || typeof input !== "object" || Array.isArray(input)) return fail("VALIDATION_FAILED", 422);

  const name = typeof input.name === "string" ? input.name.trim() : "";
  const company = typeof input.company === "string" ? input.company.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim().toLowerCase() : "";
  const budget = typeof input.budget === "string" ? input.budget : "";
  const service = typeof input.service === "string" ? input.service : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";
  const website = typeof input.website === "string" ? input.website.trim() : "";
  const whatsappCountry = typeof input.whatsappCountry === "string" ? input.whatsappCountry.trim() : "";
  const whatsappDialCode = typeof input.whatsappDialCode === "string" ? input.whatsappDialCode.trim() : "";
  const whatsappNumber = typeof input.whatsappNumber === "string" ? input.whatsappNumber.trim() : "";

  if (website) return NextResponse.json({ ok: true });
  if (
    name.length < 1 || name.length > 100 || /[\r\n]/.test(name) ||
    company.length > 100 || !emailPattern.test(email) || email.length > 254 ||
    !budgets.has(budget) || !services.has(service) ||
    message.length < 1 || message.length > 4000 ||
    whatsappCountry.length > 8 || whatsappDialCode.length > 10 || whatsappNumber.length > 40
  ) return fail("VALIDATION_FAILED", 422);

  const enquiry = { name, company, email, whatsappCountry, whatsappDialCode, whatsappNumber, budget, service, message };
  const submissionId = `unicodeit-contact-${randomUUID()}`;
  const submittedAt = new Date().toISOString();
  const sourceUrl = contactSourceUrl(input.sourceUrl, request, origin);
  const attribution = {
    sourceUrl: sourceUrl.toString(),
    referrer: safeAttributionText(input.referrer, 2048),
    utmSource: safeAttributionText(input.utmSource, 200) || safeAttributionText(sourceUrl.searchParams.get("utm_source"), 200),
    utmMedium: safeAttributionText(input.utmMedium, 200) || safeAttributionText(sourceUrl.searchParams.get("utm_medium"), 200),
    utmCampaign: safeAttributionText(input.utmCampaign, 200) || safeAttributionText(sourceUrl.searchParams.get("utm_campaign"), 200),
  };
  if (attribution.referrer) {
    try {
      const referrer = new URL(attribution.referrer);
      if (!(["http:", "https:"].includes(referrer.protocol)) || referrer.username || referrer.password) attribution.referrer = "";
    } catch { attribution.referrer = ""; }
  }

  const [mailHub, uniCrm] = await Promise.allSettled([
    sendContactEnquiry(enquiry, submissionId),
    sendContactToUniCRM({ enquiry, submissionId, submittedAt, attribution }),
  ]);

  if (uniCrm.status === "rejected") {
    const error = uniCrm.reason;
    console.error("UniCRM Web-to-Lead delivery failed", {
      contactSubmissionId: submissionId,
      httpStatus: error instanceof UniCrmError ? error.httpStatus : undefined,
      errorType: error instanceof UniCrmError ? error.kind : "unknown",
      timestamp: submittedAt,
    });
  }

  if (mailHub.status === "rejected") {
    const error = mailHub.reason;
    if (error instanceof MailHubError && error.kind === "configuration") return fail("DELIVERY_NOT_CONFIGURED", 503);
    if (error instanceof MailHubError && error.kind === "timeout") return fail("DELIVERY_TIMEOUT", 502);
    return fail("DELIVERY_FAILED", 502);
  }
  return NextResponse.json({ ok: true });
}
