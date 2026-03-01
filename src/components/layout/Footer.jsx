import { Link } from "react-router-dom";
import useLanguage from "@/i18n/useLanguage";
import Container from "./PageContainer";

const TRUST_BADGE_KEYS = ["iata", "security", "partner", "traveltech"];
const INDUSTRY_KEYS = ["agencies", "operators", "otas", "corporate"];

function Footer() {
  const { t, lang } = useLanguage();

  const homePath = `/${lang}`;
  const servicesPath = `/${lang}/services`;
  const digitalPath = `/${lang}/services#digital`;
  const aiPath = `/${lang}/services#ai`;
  const ticketingPath = `/${lang}/services#ticketing`;
  const lgbtqPath = `/${lang}/services#lgbtq`;
  const agenciesPath = `/${lang}/services#agencies`;
  const operatorsPath = `/${lang}/services#operators`;
  const otasPath = `/${lang}/services#otas`;
  const corporatePath = `/${lang}/services#corporate`;
  const aboutPath = `/${lang}/about`;
  const contactPath = `/${lang}/contact`;
  const privacyPath = `/${lang}/privacy`;
  const termsPath = `/${lang}/terms`;
  const cookiesPath = `/${lang}/cookies`;

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
  };

  const languageDisplayKey = lang === "th" ? "switcher_th" : "switcher_en";

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/45 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-500/10 to-transparent" />

      <Container className="relative py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-5 xl:gap-8">
          <div className="space-y-4">
            <Link to={homePath} className="inline-flex items-center">
              <img
                src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/logos/logo-white-online.png"
                alt={t("brand_logo_alt")}
                className="h-12 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400/95">
              {t("footer_brand_tagline")}
            </p>
            <p className="text-sm text-slate-400/95">
              {t("footer_global_presence")}
            </p>
            <p className="text-sm text-slate-400/95">
              <span className="mr-2 text-slate-300">
                {t("footer_support_email_label")}
              </span>
              <a
                href={`mailto:${t("contact_card_email_value")}`}
                className="transition-colors duration-200 hover:text-cyan-300"
              >
                {t("contact_card_email_value")}
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-200">
              {t("footer_solutions")}
            </h3>
            <nav className="mt-4 flex flex-col gap-1.5 text-sm text-slate-400">
              <Link
                to={ticketingPath}
                className="min-h-11 rounded-lg py-2 transition-colors duration-200 hover:text-cyan-300"
              >
                {t("footer_link_ticketing")}
              </Link>
              <Link
                to={lgbtqPath}
                className="min-h-11 rounded-lg py-2 transition-colors duration-200 hover:text-cyan-300"
              >
                {t("footer_link_lgbtq")}
              </Link>
              <Link
                to={digitalPath}
                className="min-h-11 rounded-lg py-2 transition-colors duration-200 hover:text-cyan-300"
              >
                {t("footer_link_digital")}
              </Link>
              <Link
                to={aiPath}
                className="min-h-11 rounded-lg py-2 transition-colors duration-200 hover:text-cyan-300"
              >
                {t("footer_link_ai")}
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-200">
              {t("footer_industries")}
            </h3>
            <nav className="mt-4 flex flex-col gap-1.5 text-sm text-slate-400">
              {INDUSTRY_KEYS.map((key) => {
                const industryPath =
                  key === "agencies"
                    ? agenciesPath
                    : key === "operators"
                      ? operatorsPath
                      : key === "otas"
                        ? otasPath
                        : corporatePath;

                return (
                  <Link
                    key={`industry-link-${key}`}
                    to={industryPath}
                    className="min-h-11 rounded-lg py-2 transition-colors duration-200 hover:text-cyan-300"
                  >
                    {t(`footer_link_${key}`)}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-200">
              {t("footer_resources")}
            </h3>
            <nav className="mt-4 flex flex-col gap-1.5 text-sm text-slate-400">
              <Link
                to={aboutPath}
                className="min-h-11 rounded-lg py-2 transition-colors duration-200 hover:text-cyan-300"
              >
                {t("footer_link_about")}
              </Link>
              <Link
                to={contactPath}
                className="min-h-11 rounded-lg py-2 transition-colors duration-200 hover:text-cyan-300"
              >
                {t("footer_link_contact")}
              </Link>
              <Link
                to={privacyPath}
                className="min-h-11 rounded-lg py-2 transition-colors duration-200 hover:text-cyan-300"
              >
                {t("footer_link_privacy")}
              </Link>
              <Link
                to={termsPath}
                className="min-h-11 rounded-lg py-2 transition-colors duration-200 hover:text-cyan-300"
              >
                {t("footer_link_terms")}
              </Link>
              <Link
                to={cookiesPath}
                className="min-h-11 rounded-lg py-2 transition-colors duration-200 hover:text-cyan-300"
              >
                {t("footer_link_cookies")}
              </Link>
            </nav>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-transparent p-6 shadow-[0_12px_40px_rgba(8,47,73,0.28)]">
            <h3 className="text-lg font-semibold text-slate-50">
              {t("footer_newsletter_title")}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {t("footer_newsletter_desc")}
            </p>

            <form className="mt-5 space-y-3" onSubmit={handleNewsletterSubmit}>
              <label htmlFor="footer-newsletter-email" className="sr-only">
                {t("footer_newsletter_input_label")}
              </label>
              <input
                id="footer-newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={t("footer_newsletter_placeholder")}
                className="min-h-11 w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              />
              <button
                type="submit"
                className="min-h-11 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-[0_10px_32px_rgba(34,211,238,0.34)] transition-all duration-200 hover:shadow-[0_18px_45px_rgba(34,211,238,0.44)]"
              >
                {t("footer_newsletter_button")}
              </button>
            </form>

            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              {t("footer_newsletter_privacy")}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              {t("footer_newsletter_reassurance")}
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800/80 bg-slate-900/45 p-4 sm:p-5">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.08em] text-slate-400 sm:text-left">
            {t("footer_trusted_global")}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            {TRUST_BADGE_KEYS.map((key) => (
              <div
                key={`trust-badge-${key}`}
                className="flex h-12 min-w-[120px] items-center justify-center rounded-xl border border-slate-700/80 bg-slate-800/50 px-3 text-center text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500 opacity-75 grayscale transition-all duration-200 hover:border-cyan-500/40 hover:text-slate-200 hover:opacity-100 hover:grayscale-0"
              >
                {t(`footer_trust_${key}`)}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              {t("footer_copyright")} · {t("footer_company_name")}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              <label className="inline-flex min-h-11 items-center gap-2 rounded-lg py-2">
                <span className="text-slate-400">
                  {t("footer_region_label")}
                </span>
                <select
                  defaultValue="apac"
                  className="min-h-11 rounded-lg border border-slate-700/80 bg-slate-900/75 px-3 py-2 text-slate-200 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                >
                  <option value="apac">{t("footer_region_apac")}</option>
                  <option value="emea">{t("footer_region_emea")}</option>
                  <option value="americas">
                    {t("footer_region_americas")}
                  </option>
                </select>
              </label>

              <div className="inline-flex min-h-11 items-center gap-2 rounded-lg py-2">
                <span className="text-slate-400">
                  {t("footer_language_label")}
                </span>
                <span className="font-semibold text-slate-200">
                  {t(languageDisplayKey)}
                </span>
              </div>

              <nav className="flex flex-wrap items-center gap-4 text-xs">
                <Link
                  to={privacyPath}
                  className="min-h-11 rounded-lg py-2 transition-colors duration-200 hover:text-cyan-300"
                >
                  {t("footer_link_privacy")}
                </Link>
                <Link
                  to={termsPath}
                  className="min-h-11 rounded-lg py-2 transition-colors duration-200 hover:text-cyan-300"
                >
                  {t("footer_link_terms")}
                </Link>
                <Link
                  to={cookiesPath}
                  className="min-h-11 rounded-lg py-2 transition-colors duration-200 hover:text-cyan-300"
                >
                  {t("footer_link_cookies")}
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
