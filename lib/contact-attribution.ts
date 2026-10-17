type ContactAttribution = {
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

const storageKey = "unicodeit-contact-attribution";
const queryKeys = [
  ["utm_source", "utmSource"],
  ["utm_medium", "utmMedium"],
  ["utm_campaign", "utmCampaign"],
] as const;

export function getContactAttribution(): ContactAttribution {
  try {
    const stored = sessionStorage.getItem(storageKey);
    const parsed: unknown = stored ? JSON.parse(stored) : null;
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? parsed as ContactAttribution
      : {};
  } catch {
    return {};
  }
}

export function captureContactAttribution() {
  const attribution = getContactAttribution();
  const params = new URLSearchParams(window.location.search);
  for (const [queryKey, field] of queryKeys) {
    const value = params.get(queryKey);
    if (value) attribution[field] = value;
  }
  if (!attribution.referrer && document.referrer) attribution.referrer = document.referrer;
  try {
    sessionStorage.setItem(storageKey, JSON.stringify(attribution));
  } catch { /* Storage may be unavailable in private browsing. */ }
}
