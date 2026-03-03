import { Link } from "react-router-dom";
import useLanguage from "@/i18n/useLanguage";
import { SITE_CONFIG } from "@/config/site";
import BrandLogo from "@/components/common/BrandLogo";
import Container from "./PageContainer";

const SOLUTION_LINKS = [
  {
    label: "footer_link_services",
    path: "/services",
    ariaLabel: "Navigate to all services",
  },
  {
    label: "footer_link_ticketing",
    path: "/services/air-ticketing",
    ariaLabel: "Navigate to Air Ticketing service",
  },
  {
    label: "footer_link_lgbtq",
    path: "/services/lgbtq-travel",
    ariaLabel: "Navigate to LGBTQ+ Travel service",
  },
  {
    label: "footer_link_ai",
    path: "/services/ai-automation",
    ariaLabel: "Navigate to AI and Automation service",
  },
];

const COMPANY_LINKS = [
  {
    label: "footer_link_about",
    path: "/about",
    ariaLabel: "Navigate to About page",
  },
  {
    label: "footer_link_contact",
    path: "/contact",
    ariaLabel: "Navigate to Contact page",
  },
  {
    label: "footer_link_privacy",
    path: "/privacy",
    ariaLabel: "Navigate to Privacy page",
  },
  {
    label: "footer_link_terms",
    path: "/terms",
    ariaLabel: "Navigate to Terms page",
  },
  {
    label: "footer_link_cookies",
    path: "/cookies",
    ariaLabel: "Navigate to Cookies page",
  },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/siamoncloud",
    iconPath:
      "M13.5 8H16V5h-2.5C11.6 5 10 6.6 10 8.5V11H8v3h2v7h3v-7h2.5l.5-3H13v-2.2c0-.5.4-.8.5-.8Z",
  },
  {
    label: "X",
    href: "https://x.com/siamoncloud",
    iconPath:
      "m5 5 5.8 7.8L5.4 19H7l4.5-5.4L15.6 19H19l-6-8 5-6H16.4l-3.8 4.6L9.4 5H5Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/siamoncloud",
    iconPath:
      "M6.4 8.2a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM4.8 9.8H8V19H4.8V9.8Zm5 0H13v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V19h-3.2v-4.2c0-1 0-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V19H9.8V9.8Z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@siamoncloud",
    iconPath:
      "M19.6 8.2a2.5 2.5 0 0 0-1.8-1.8C16.3 6 12 6 12 6s-4.3 0-5.8.4a2.5 2.5 0 0 0-1.8 1.8C4 9.7 4 12 4 12s0 2.3.4 3.8a2.5 2.5 0 0 0 1.8 1.8C7.7 18 12 18 12 18s4.3 0 5.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.5.4-3.8.4-3.8s0-2.3-.4-3.8ZM10.6 15V9l5 3-5 3Z",
  },
];

function Footer() {
  const { lang, t } = useLanguage();
  const localize = (path) => `/${lang}${path}`;
  const logoAlt = t("brand_logo_alt");

  return (
    <footer className="dark mt-20 border-t border-slate-200 bg-slate-50 text-slate-800 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
      <Container className="py-14 sm:py-16 lg:py-20">
        <section
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:gap-12"
          aria-label="Footer primary content"
        >
          <div className="space-y-5 text-center md:text-left">
            <Link
              to={localize("")}
              aria-label="Go to Siam On Cloud homepage"
              className="inline-flex items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950 md:justify-start"
            >
              <BrandLogo
                alt={logoAlt}
                size="footer"
                loading="eager"
                decoding="async"
              />
            </Link>

            <p className="mx-auto max-w-xs text-sm leading-relaxed text-slate-600 md:mx-0 dark:text-slate-300">
              {t("footer_tagline")}
            </p>

            <div className="flex items-center justify-center gap-2 md:justify-start">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-300 dark:focus-visible:ring-offset-slate-950"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d={social.iconPath} />
                  </svg>
                </a>
              ))}
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300">
              {t("footer_location")}
            </p>
            <a
              href="mailto:info@siamon.cloud"
              aria-label="Email info@siamon.cloud"
              className="inline-flex text-sm text-blue-600 underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-blue-700 hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:text-blue-300 dark:hover:text-blue-200 dark:hover:decoration-blue-300 dark:focus-visible:ring-offset-slate-950"
            >
              info@siamon.cloud
            </a>
            <a
              href={SITE_CONFIG.lineUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open LINE Official ${SITE_CONFIG.lineId}`}
              className="inline-flex text-sm text-slate-600 transition-colors duration-200 hover:text-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:text-slate-300 dark:hover:text-green-400 dark:focus-visible:ring-offset-slate-950"
            >
              LINE Official: {SITE_CONFIG.lineId}
            </a>
          </div>

          <section aria-labelledby="footer-solutions-title">
            <h2
              id="footer-solutions-title"
              className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-900 dark:text-slate-100"
            >
              {t("footer_solutions")}
            </h2>
            <nav
              className="mt-4 flex flex-col gap-1.5 text-sm text-slate-600 dark:text-slate-300"
              aria-label="Solutions links"
            >
              {SOLUTION_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={localize(link.path)}
                  aria-label={link.ariaLabel}
                  className="inline-flex min-h-11 items-center py-2 underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-blue-600 hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:hover:text-blue-300 dark:hover:decoration-blue-300 dark:focus-visible:ring-offset-slate-950"
                >
                  {t(link.label)}
                </Link>
              ))}
            </nav>
          </section>

          <section aria-labelledby="footer-company-title">
            <h2
              id="footer-company-title"
              className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-900 dark:text-slate-100"
            >
              {t("footer_company")}
            </h2>
            <nav
              className="mt-4 flex flex-col gap-1.5 text-sm text-slate-600 dark:text-slate-300"
              aria-label="Company links"
            >
              {COMPANY_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={localize(link.path)}
                  aria-label={link.ariaLabel}
                  className="inline-flex min-h-11 items-center py-2 underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-blue-600 hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:hover:text-blue-300 dark:hover:decoration-blue-300 dark:focus-visible:ring-offset-slate-950"
                >
                  {t(link.label)}
                </Link>
              ))}
            </nav>
          </section>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift dark:border-slate-800 dark:bg-slate-900 dark:shadow-none dark:hover:shadow-none">
            <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-900 dark:text-slate-100">
              {t("footer_support_email_label")}
            </h2>

            <div className="mt-4 space-y-4 text-sm">
              <div className="border-b border-slate-200 pb-4 dark:border-slate-700">
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400">
                  {t("contact_card_phone_title")}
                </p>
                <a
                  href={`tel:${SITE_CONFIG.phoneTel}`}
                  aria-label={`Call ${SITE_CONFIG.phoneDisplay}`}
                  className="mt-1 inline-flex text-slate-900 underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-blue-600 hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-100 dark:hover:text-blue-300 dark:hover:decoration-blue-300 dark:focus-visible:ring-offset-slate-900"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {t("footer_location")}
                </p>
              </div>

              <div className="border-b border-slate-200 pb-4 dark:border-slate-700">
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400">
                  {t("contact_card_email_title")}
                </p>
                <a
                  href="mailto:info@siamon.cloud"
                  aria-label="Email support at info@siamon.cloud"
                  className="mt-1 inline-flex text-slate-900 underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-blue-600 hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-100 dark:hover:text-blue-300 dark:hover:decoration-blue-300 dark:focus-visible:ring-offset-slate-900"
                >
                  info@siamon.cloud
                </a>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {t("footer_cta_desc")}
                </p>
              </div>

              <div className="pb-1">
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400">
                  {t("footer_link_contact")}
                </p>
                <Link
                  to={localize("/contact")}
                  aria-label="Go to contact page"
                  className="mt-1 inline-flex text-slate-900 underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-blue-600 hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-100 dark:hover:text-blue-300 dark:hover:decoration-blue-300 dark:focus-visible:ring-offset-slate-900"
                >
                  {t("footer_link_contact")}
                </Link>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {t("footer_newsletter_reassurance")}
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section
          className="mt-10 border-t border-slate-200 pt-4 dark:border-slate-800"
          aria-label="Footer trust strip"
        >
          <div className="flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:text-slate-400">
            <nav
              className="flex flex-wrap items-center justify-center gap-2 sm:justify-start"
              aria-label="Quick links"
            >
              <Link
                to={localize("")}
                className="underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-blue-600 hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:hover:text-blue-300 dark:hover:decoration-blue-300 dark:focus-visible:ring-offset-slate-950"
              >
                {t("nav_home")}
              </Link>
              <span
                className="text-slate-300 dark:text-slate-700"
                aria-hidden="true"
              >
                ·
              </span>
              <Link
                to={localize("/about")}
                className="underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-blue-600 hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:hover:text-blue-300 dark:hover:decoration-blue-300 dark:focus-visible:ring-offset-slate-950"
              >
                {t("nav_about")}
              </Link>
              <span
                className="text-slate-300 dark:text-slate-700"
                aria-hidden="true"
              >
                ·
              </span>
              <Link
                to={localize("/contact")}
                className="underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-blue-600 hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:hover:text-blue-300 dark:hover:decoration-blue-300 dark:focus-visible:ring-offset-slate-950"
              >
                {t("nav_contact")}
              </Link>
              <span
                className="text-slate-300 dark:text-slate-700"
                aria-hidden="true"
              >
                ·
              </span>
              <Link
                to={localize("/contact")}
                className="underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-blue-600 hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:hover:text-blue-300 dark:hover:decoration-blue-300 dark:focus-visible:ring-offset-slate-950"
              >
                {t("footer_cta_button")}
              </Link>
            </nav>

            <p className="text-center sm:text-right">
              {t("footer_brand_tagline")}
            </p>
          </div>
        </section>

        <section
          className="mt-4 border-t border-slate-200 pt-5 dark:border-slate-800"
          aria-label="Footer legal bar"
        >
          <div className="flex flex-col gap-3 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left dark:text-slate-400">
            <p>{t("footer_copyright")}</p>

            <nav
              className="flex items-center justify-center gap-3 sm:justify-end"
              aria-label="Legal links"
            >
              <Link
                to={localize("/privacy")}
                className="underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-blue-600 hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:hover:text-blue-300 dark:hover:decoration-blue-300 dark:focus-visible:ring-offset-slate-950"
              >
                {t("legal_privacy_short")}
              </Link>
              <span
                className="text-slate-300 dark:text-slate-700"
                aria-hidden="true"
              >
                ·
              </span>
              <Link
                to={localize("/terms")}
                className="underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-blue-600 hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:hover:text-blue-300 dark:hover:decoration-blue-300 dark:focus-visible:ring-offset-slate-950"
              >
                {t("legal_terms_short")}
              </Link>
              <span
                className="text-slate-300 dark:text-slate-700"
                aria-hidden="true"
              >
                ·
              </span>
              <Link
                to={localize("/cookies")}
                className="underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-blue-600 hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:hover:text-blue-300 dark:hover:decoration-blue-300 dark:focus-visible:ring-offset-slate-950"
              >
                {t("legal_cookies_short")}
              </Link>
            </nav>
          </div>
        </section>
      </Container>
    </footer>
  );
}

export default Footer;
