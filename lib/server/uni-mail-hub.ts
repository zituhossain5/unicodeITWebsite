export type ContactEnquiry = {
  name: string;
  company: string;
  email: string;
  whatsappCountry: string;
  whatsappDialCode: string;
  whatsappNumber: string;
  service: string;
  budget: string;
  message: string;
};

type MailHubMessage = {
  fromMailboxId: string;
  to: { email: string; name: string }[];
  replyTo: { email: string; name: string };
  subject: string;
  text: string;
  html: string;
};

export class MailHubError extends Error {
  constructor(public readonly kind: "configuration" | "timeout" | "delivery") {
    super(`Uni Mail Hub ${kind} error`);
  }
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    };
    return entities[character];
  });

export function buildContactMessage(enquiry: ContactEnquiry, mailboxId: string): MailHubMessage {
  const whatsapp = enquiry.whatsappNumber
    ? `${enquiry.whatsappDialCode} ${enquiry.whatsappNumber}`.trim()
    : "";
  const fields = [
    ["Name", enquiry.name],
    ["Email", enquiry.email],
    ["Company", enquiry.company],
    ["WhatsApp", whatsapp],
    ["WhatsApp country", enquiry.whatsappNumber ? enquiry.whatsappCountry : ""],
    ["Service", enquiry.service],
    ["Budget", enquiry.budget],
  ].filter(([, value]) => value);

  return {
    fromMailboxId: mailboxId,
    to: [{ email: "contact@unicodeit.com", name: "Unicode IT" }],
    replyTo: { email: enquiry.email, name: enquiry.name },
    subject: `New website enquiry from ${enquiry.name.replace(/[\r\n]+/g, " ")}`,
    text: [
      "New enquiry from Unicode IT website",
      "",
      ...fields.map(([label, value]) => `${label}: ${value}`),
      "",
      "Message:",
      enquiry.message,
    ].join("\n"),
    html: [
      "<h1>New enquiry from Unicode IT website</h1>",
      "<dl>",
      ...fields.map(([label, value]) =>
        `<dt><strong>${escapeHtml(label)}</strong></dt><dd>${escapeHtml(value)}</dd>`),
      "</dl>",
      "<h2>Message</h2>",
      `<p>${escapeHtml(enquiry.message).replace(/\n/g, "<br>")}</p>`,
    ].join(""),
  };
}

export async function sendContactEnquiry(enquiry: ContactEnquiry, idempotencyKey: string) {
  const baseUrl = process.env.UNI_MAIL_HUB_URL?.trim();
  const apiKey = process.env.UNI_MAIL_HUB_API_KEY?.trim();
  const mailboxId = process.env.UNI_MAIL_HUB_MAILBOX_ID?.trim();
  if (!baseUrl || !apiKey || !mailboxId) throw new MailHubError("configuration");

  let endpoint: URL;
  try {
    const base = new URL(baseUrl);
    if (base.protocol !== "https:") throw new Error("HTTPS required");
    endpoint = new URL("/api/v1/messages", base);
  } catch {
    throw new MailHubError("configuration");
  }

  let response: Response;
  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": idempotencyKey,
      },
      body: JSON.stringify(buildContactMessage(enquiry, mailboxId)),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
  } catch (error) {
    const name = error instanceof Error ? error.name : "";
    throw new MailHubError(name === "TimeoutError" || name === "AbortError" ? "timeout" : "delivery");
  }

  if (!response.ok) {
    console.error("Uni Mail Hub rejected contact message", { status: response.status });
    throw new MailHubError("delivery");
  }

  const result: unknown = await response.json().catch(() => null);
  if (result && typeof result === "object" && "id" in result && typeof result.id === "string") {
    console.info("Uni Mail Hub accepted contact message", { messageId: result.id });
  }
}
