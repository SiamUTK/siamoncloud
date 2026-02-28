// Siam On Cloud Attribution Utility
// Lightweight UTM/referrer capture, localStorage only

const ATTR_KEY = "siam_attribution";

function safeGetLS(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null");
  } catch {
    return null;
  }
}
function safeSetLS(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch {}
}

export function captureAttribution() {
  const params = new URLSearchParams(window.location.search);
  const utm_source = params.get("utm_source") || "";
  const utm_medium = params.get("utm_medium") || "";
  const utm_campaign = params.get("utm_campaign") || "";
  const referrer = document.referrer || "";
  const first_visit =
    safeGetLS(ATTR_KEY)?.first_visit || new Date().toISOString();
  const attribution = {
    utm_source,
    utm_medium,
    utm_campaign,
    referrer,
    first_visit,
  };
  safeSetLS(ATTR_KEY, attribution);
  return attribution;
}

export function getAttribution() {
  return safeGetLS(ATTR_KEY) || {};
}
