// Siam On Cloud Analytics Utility (GA4, privacy-first)
// Loads gtag.js lazily, respects consent, safe for static/SSR

let initialized = false;
let measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || "";
let debug = import.meta.env.DEV === true;

function loadGtag() {
  if (!measurementId || window.gtag) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", measurementId, { anonymize_ip: true });
    if (debug) console.log("[Analytics] gtag loaded");
  };
  document.body.appendChild(script);
}

export function initAnalytics() {
  if (initialized || !measurementId) {
    if (debug) console.log("[Analytics] Already initialized or missing ID");
    return;
  }
  // Respect cookie consent if present
  if (window.CookieConsent && !window.CookieConsent.hasConsented()) {
    if (debug) console.log("[Analytics] Consent not given");
    return;
  }
  if ("requestIdleCallback" in window) {
    requestIdleCallback(loadGtag);
  } else {
    setTimeout(loadGtag, 2000);
  }
  initialized = true;
  if (debug) console.log("[Analytics] Initialized");
}

export function trackEvent(name, params = {}) {
  if (window.gtag) {
    window.gtag("event", name, params);
    if (debug) console.log("[Analytics] Event:", name, params);
  } else if (debug) {
    console.log("[Analytics] Event (not sent):", name, params);
  }
}

export function trackPageView(path) {
  if (window.gtag) {
    window.gtag("event", "page_view", { page_path: path });
    if (debug) console.log("[Analytics] PageView:", path);
  } else if (debug) {
    console.log("[Analytics] PageView (not sent):", path);
  }
}
