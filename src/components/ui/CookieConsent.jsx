import { useEffect, useMemo, useState } from "react";
import "./cookie-consent.css";

const CONSENT_KEY = "soc_cookie_consent";

function parseConsent(raw) {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw);
    if (!value || typeof value !== "object") return null;
    return {
      necessary: true,
      analytics: Boolean(value.analytics),
      marketing: Boolean(value.marketing),
      status:
        value.status === "accepted" || value.status === "rejected"
          ? value.status
          : "custom",
      timestamp:
        typeof value.timestamp === "string"
          ? value.timestamp
          : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

function readConsent() {
  return parseConsent(window.localStorage.getItem(CONSENT_KEY));
}

function writeConsent(consent) {
  window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
}

function activateCategoryScripts(category) {
  const nodes = document.querySelectorAll(
    `script[type="text/plain"][data-cookie-category="${category}"]`,
  );

  nodes.forEach((node) => {
    if (node.dataset.activated === "1") return;

    const script = document.createElement("script");
    script.type = "text/javascript";

    if (node.src) {
      script.src = node.src;
    }

    if (node.textContent) {
      script.text = node.textContent;
    }

    Array.from(node.attributes).forEach((attribute) => {
      if (
        attribute.name !== "type" &&
        attribute.name !== "data-cookie-category" &&
        attribute.name !== "data-activated"
      ) {
        script.setAttribute(attribute.name, attribute.value);
      }
    });

    node.dataset.activated = "1";
    node.parentNode?.insertBefore(script, node.nextSibling);
  });
}

let analyticsEnabled = false;
let marketingEnabled = false;

function enableAnalytics() {
  if (analyticsEnabled) return;
  analyticsEnabled = true;
  document.documentElement.setAttribute("data-soc-analytics", "granted");
  activateCategoryScripts("analytics");

  /*
   * GDPR/PDPA note:
   * Analytics runs only after explicit consent.
   * To plug Google Analytics, add a blocked script tag:
   * <script type="text/plain" data-cookie-category="analytics" ...></script>
   */
  window.dispatchEvent(new CustomEvent("soc:consent:analytics-enabled"));
}

function enableMarketing() {
  if (marketingEnabled) return;
  marketingEnabled = true;
  document.documentElement.setAttribute("data-soc-marketing", "granted");
  activateCategoryScripts("marketing");

  /*
   * GDPR/PDPA note:
   * Marketing runs only after explicit consent.
   * To plug Facebook Pixel, add a blocked script tag:
   * <script type="text/plain" data-cookie-category="marketing" ...></script>
   */
  window.dispatchEvent(new CustomEvent("soc:consent:marketing-enabled"));
}

function applyConsent(consent) {
  if (consent.analytics) {
    enableAnalytics();
  } else {
    document.documentElement.setAttribute("data-soc-analytics", "denied");
  }

  if (consent.marketing) {
    enableMarketing();
  } else {
    document.documentElement.setAttribute("data-soc-marketing", "denied");
  }
}

function CookieConsent() {
  const [isReady, setIsReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const consentPayload = useMemo(
    () => ({
      necessary: true,
      analytics,
      marketing,
      status: "custom",
      timestamp: new Date().toISOString(),
    }),
    [analytics, marketing],
  );

  useEffect(() => {
    const consent = readConsent();

    if (consent) {
      setAnalytics(consent.analytics);
      setMarketing(consent.marketing);
      setShowBanner(false);
      applyConsent(consent);
    } else {
      setShowBanner(true);
    }

    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!showModal) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = "";
    };
  }, [showModal]);

  useEffect(() => {
    window.enableAnalytics = enableAnalytics;
    window.enableMarketing = enableMarketing;
  }, []);

  const acceptAll = () => {
    const consent = {
      ...consentPayload,
      analytics: true,
      marketing: true,
      status: "accepted",
    };
    setAnalytics(true);
    setMarketing(true);
    writeConsent(consent);
    applyConsent(consent);
    setShowModal(false);
    setShowBanner(false);
  };

  const rejectAll = () => {
    const consent = {
      ...consentPayload,
      analytics: false,
      marketing: false,
      status: "rejected",
    };
    setAnalytics(false);
    setMarketing(false);
    writeConsent(consent);
    applyConsent(consent);
    setShowModal(false);
    setShowBanner(false);
  };

  const savePreferences = () => {
    writeConsent(consentPayload);
    applyConsent(consentPayload);
    setShowModal(false);
    setShowBanner(false);
  };

  if (!isReady) return null;

  return (
    <div id="soc-cookie-root" aria-live="polite">
      <section
        className={`soc-cookie-banner ${showBanner ? "is-visible" : ""}`}
        role="dialog"
        aria-label="Cookie consent banner"
        aria-modal="false"
      >
        <div className="soc-cookie-row">
          <div className="soc-cookie-text">
            <h3>🍪 Siam On Cloud uses cookies to enhance your journey.</h3>
            <p>
              We use essential cookies to keep the site secure and functional.
              Optional analytics and marketing cookies are used only with your
              consent. <a href="/privacy-policy">Privacy Policy</a>
            </p>
          </div>
          <div className="soc-cookie-actions">
            <button
              type="button"
              className="soc-btn soc-btn-primary"
              onClick={acceptAll}
            >
              Accept All
            </button>
            <button
              type="button"
              className="soc-btn soc-btn-ghost"
              onClick={rejectAll}
            >
              Reject
            </button>
            <button
              type="button"
              className="soc-btn soc-btn-link"
              onClick={() => setShowModal(true)}
            >
              Manage Preferences
            </button>
          </div>
        </div>
      </section>

      <div
        className={`soc-cookie-backdrop ${showModal ? "is-visible" : ""}`}
        hidden={!showModal}
        onClick={() => setShowModal(false)}
        aria-hidden="true"
      />

      <section
        className={`soc-cookie-modal ${showModal ? "is-visible" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="socCookieModalTitle"
        hidden={!showModal}
      >
        <header className="soc-modal-head">
          <h4 id="socCookieModalTitle">Cookie Preferences</h4>
          <button
            type="button"
            className="soc-close"
            aria-label="Close preferences"
            onClick={() => setShowModal(false)}
          >
            ×
          </button>
        </header>

        <div className="soc-modal-body">
          <p className="soc-modal-note">
            Necessary cookies are always enabled. You can choose optional
            categories below.
          </p>

          <article className="soc-cookie-group">
            <div>
              <h5>Necessary (always on)</h5>
              <p>
                Required for security, session integrity, and core features.
              </p>
            </div>
            <label
              className="soc-switch"
              aria-label="Necessary cookies always enabled"
            >
              <input type="checkbox" checked disabled />
              <span className="soc-slider" />
            </label>
          </article>

          <article className="soc-cookie-group">
            <div>
              <h5>Analytics</h5>
              <p>Helps improve performance and service quality.</p>
            </div>
            <label className="soc-switch" htmlFor="socAnalyticsToggle">
              <input
                id="socAnalyticsToggle"
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
              />
              <span className="soc-slider" />
            </label>
          </article>

          <article className="soc-cookie-group">
            <div>
              <h5>Marketing</h5>
              <p>Enables campaign measurement and personalized outreach.</p>
            </div>
            <label className="soc-switch" htmlFor="socMarketingToggle">
              <input
                id="socMarketingToggle"
                type="checkbox"
                checked={marketing}
                onChange={(event) => setMarketing(event.target.checked)}
              />
              <span className="soc-slider" />
            </label>
          </article>
        </div>

        <footer className="soc-modal-actions">
          <button
            type="button"
            className="soc-btn soc-btn-ghost"
            onClick={savePreferences}
          >
            Save Preferences
          </button>
          <button
            type="button"
            className="soc-btn soc-btn-primary"
            onClick={acceptAll}
          >
            Accept All
          </button>
        </footer>
      </section>
    </div>
  );
}

export default CookieConsent;
