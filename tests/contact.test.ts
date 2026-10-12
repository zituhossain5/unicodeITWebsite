import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "../app/api/contact/route";
import { buildContactMessage, sendContactEnquiry } from "../lib/server/uni-mail-hub";

const valid = {
  name: "Ada Lovelace",
  company: "Analytical Engines",
  email: "ada@example.com",
  whatsappCountry: "US",
  whatsappDialCode: "+1",
  whatsappNumber: "2015550123",
  service: "Software Development",
  budget: "$2K - $5K",
  message: "We need a new identity and website.",
  website: "",
};

const request = (body: unknown, headers: Record<string, string> = {}) =>
  new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", origin: "http://localhost:3000", ...headers },
    body: JSON.stringify(body),
  });

const accepted = () => new Response(JSON.stringify({ id: "mail-test-1", status: "QUEUED" }), { status: 202 });

beforeEach(() => {
  process.env.UNI_MAIL_HUB_URL = "https://mailhub.unicodeit.com";
  process.env.UNI_MAIL_HUB_API_KEY = "test-only-key";
  process.env.UNI_MAIL_HUB_MAILBOX_ID = "test-only-mailbox";
  vi.spyOn(console, "info").mockImplementation(() => {});
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  delete process.env.UNI_MAIL_HUB_URL;
  delete process.env.UNI_MAIL_HUB_API_KEY;
  delete process.env.UNI_MAIL_HUB_MAILBOX_ID;
  delete process.env.CONTACT_FORM_ALLOWED_ORIGIN;
});

describe("POST /api/contact", () => {
  it.each([
    { name: "" },
    { name: "Ada\nBcc: someone@example.com" },
    { email: "not-an-email" },
    { message: "" },
    { message: "x".repeat(4001) },
  ])("rejects invalid contact data", async (change) => {
    const response = await POST(request({ ...valid, ...change }));
    expect(response.status).toBe(422);
    expect(await response.json()).toEqual({ ok: false, errorCode: "VALIDATION_FAILED" });
  });

  it("rejects malformed JSON and foreign origins", async () => {
    const malformed = new Request("http://localhost:3000/api/contact", { method: "POST", body: "{" });
    expect((await POST(malformed)).status).toBe(400);
    expect((await POST(request(valid, { origin: "https://attacker.example" }))).status).toBe(403);
  });

  it("silently accepts honeypot submissions without sending mail", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const response = await POST(request({ ...valid, website: "spam.example" }));
    expect(response.status).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("reports missing configuration without calling Mail Hub", async () => {
    delete process.env.UNI_MAIL_HUB_API_KEY;
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const response = await POST(request(valid));
    expect(response.status).toBe(503);
    expect((await response.json()).errorCode).toBe("DELIVERY_NOT_CONFIGURED");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("sends one 202-accepted message with managed sender, visitor Reply-To, and an idempotency key", async () => {
    const fetchMock = vi.fn().mockResolvedValue(accepted());
    vi.stubGlobal("fetch", fetchMock);
    const response = await POST(request(valid));
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, options] = fetchMock.mock.calls[0] as [URL, RequestInit];
    expect(url.toString()).toBe("https://mailhub.unicodeit.com/api/v1/messages");
    const headers = options.headers as Record<string, string>;
    expect(headers.Authorization).toBe("Bearer test-only-key");
    expect(headers["Idempotency-Key"]).toMatch(/^unicodeit-contact-[0-9a-f-]{36}$/);
    const payload = JSON.parse(options.body as string);
    expect(payload.fromMailboxId).toBe("test-only-mailbox");
    expect(payload.to).toEqual([{ email: "contact@unicodeit.com", name: "Unicode IT" }]);
    expect(payload.replyTo).toEqual({ email: "ada@example.com", name: "Ada Lovelace" });
    expect(payload.from).toBeUndefined();
    expect(payload.text).toContain("WhatsApp: +1 2015550123");
    expect(payload.text).toContain(valid.message);
  });

  it("uses a distinct key for a new submission and preserves an explicit key for the same logical request", async () => {
    const fetchMock = vi.fn().mockImplementation(async () => accepted());
    vi.stubGlobal("fetch", fetchMock);
    await POST(request(valid));
    await POST(request(valid));
    const first = (fetchMock.mock.calls[0][1].headers as Record<string, string>)["Idempotency-Key"];
    const second = (fetchMock.mock.calls[1][1].headers as Record<string, string>)["Idempotency-Key"];
    expect(first).not.toBe(second);
    await sendContactEnquiry(valid, first);
    expect((fetchMock.mock.calls[2][1].headers as Record<string, string>)["Idempotency-Key"]).toBe(first);
  });

  it("escapes visitor content in HTML without losing it from text", () => {
    const message = buildContactMessage(
      { ...valid, name: "Ada <Admin>", message: "Hi <script>alert('x')</script>\nThanks" },
      "mailbox-1",
    );
    expect(message.html).not.toContain("<script>");
    expect(message.html).toContain("&lt;script&gt;");
    expect(message.html).toContain("Ada &lt;Admin&gt;");
    expect(message.text).toContain("Hi <script>");
  });

  it("returns a safe failure when Mail Hub rejects the message", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("API_KEY_INVALID", { status: 401 })));
    const response = await POST(request(valid));
    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({ ok: false, errorCode: "DELIVERY_FAILED" });
  });

  it("maps a timeout without exposing Mail Hub internals", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new DOMException("timed out", "TimeoutError")));
    const response = await POST(request(valid));
    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({ ok: false, errorCode: "DELIVERY_TIMEOUT" });
  });
});
