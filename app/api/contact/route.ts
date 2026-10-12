import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { contactServiceOptions } from "../../../lib/contact-form-options";
import { MailHubError, sendContactEnquiry } from "../../../lib/server/uni-mail-hub";

export const runtime = "nodejs";
const budgets = new Set(["Under $2K", "$2K - $5K", "$5K - $10K", "$10K - $25K", "$25K+"]);
const services = new Set<string>(contactServiceOptions);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fail = (errorCode: string, status: number) => NextResponse.json({ ok: false, errorCode }, { status });

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

  try {
    await sendContactEnquiry(
      { name, company, email, whatsappCountry, whatsappDialCode, whatsappNumber, budget, service, message },
      `unicodeit-contact-${randomUUID()}`,
    );
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof MailHubError && error.kind === "configuration") return fail("DELIVERY_NOT_CONFIGURED", 503);
    if (error instanceof MailHubError && error.kind === "timeout") return fail("DELIVERY_TIMEOUT", 502);
    return fail("DELIVERY_FAILED", 502);
  }
}
