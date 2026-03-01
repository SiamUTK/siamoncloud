import { Link } from "react-router-dom";
import useLanguage from "@/i18n/useLanguage";
import Container from "./PageContainer";

function Footer() {
  const { t, lang } = useLanguage();

  const servicesPath = `/${lang}/services`;
  const aboutPath = `/${lang}/about`;
  const contactPath = `/${lang}/contact`;
  const privacyPath = `/${lang}/privacy`;
  const termsPath = `/${lang}/terms`;
  const cookiesPath = `/${lang}/cookies`;

  return (
    <footer className="relative mt-20 bg-slate-950/90 backdrop-blur-xl border-t border-white/10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/45 to-transparent" />

      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-4">
            <Link to={`/${lang}`} className="inline-flex items-center">
              <img
                src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/logos/logo-white-online.png"
                alt={t("brand_logo_alt")}
                className="h-12 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              {t("footer_tagline")}
            </p>
            <p className="text-sm text-slate-400">{t("footer_location")}</p>
            <p className="text-sm text-slate-400">
              <span className="mr-2 text-slate-300">
                {t("footer_email_label")}
              </span>
              <a
                href={`mailto:${t("contact_card_email_value")}`}
                className="transition-colors hover:text-cyan-300"
              >
                {t("contact_card_email_value")}
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-200">
              {t("footer_solutions")}
            </h3>
            <nav className="mt-4 flex flex-col gap-2.5 text-sm text-slate-400">
              <Link
                to={servicesPath}
                className="min-h-11 py-2 transition-colors hover:text-cyan-300"
              >
                {t("footer_link_services")}
              </Link>
              <Link
                to={`${servicesPath}#ticketing`}
                className="min-h-11 py-2 transition-colors hover:text-cyan-300"
              >
                {t("footer_link_ticketing")}
              </Link>
              <Link
                to={`${servicesPath}#lgbtq`}
                className="min-h-11 py-2 transition-colors hover:text-cyan-300"
              >
                {t("footer_link_lgbtq")}
              </Link>
              <Link
                to={`${servicesPath}#ai`}
                className="min-h-11 py-2 transition-colors hover:text-cyan-300"
              >
                {t("footer_link_ai")}
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-200">
              {t("footer_company")}
            </h3>
            <nav className="mt-4 flex flex-col gap-2.5 text-sm text-slate-400">
              <Link
                to={aboutPath}
                className="min-h-11 py-2 transition-colors hover:text-cyan-300"
              >
                {t("footer_link_about")}
              </Link>
              <Link
                to={contactPath}
                className="min-h-11 py-2 transition-colors hover:text-cyan-300"
              >
                {t("footer_link_contact")}
              </Link>
              <Link
                to={privacyPath}
                className="min-h-11 py-2 transition-colors hover:text-cyan-300"
              >
                {t("footer_link_privacy")}
              </Link>
              <Link
                to={termsPath}
                className="min-h-11 py-2 transition-colors hover:text-cyan-300"
              >
                {t("footer_link_terms")}
              </Link>
              <Link
                to={cookiesPath}
                className="min-h-11 py-2 transition-colors hover:text-cyan-300"
              >
                {t("footer_link_cookies")}
              </Link>
            </nav>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-transparent p-6">
            <h3 className="text-lg font-semibold text-slate-50">
              {t("footer_cta_title")}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {t("footer_cta_desc")}
            </p>
            <Link
              to={contactPath}
              className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-[0_10px_32px_rgba(34,211,238,0.34)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(34,211,238,0.44)]"
            >
              {t("footer_cta_button")}
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>{t("footer_copyright")}</p>
            <nav className="flex flex-wrap items-center gap-4 text-xs">
              <Link
                to={privacyPath}
                className="min-h-11 py-2 transition-colors hover:text-cyan-300"
              >
                {t("footer_link_privacy")}
              </Link>
              <Link
                to={termsPath}
                className="min-h-11 py-2 transition-colors hover:text-cyan-300"
              >
                {t("footer_link_terms")}
              </Link>
              <Link
                to={cookiesPath}
                className="min-h-11 py-2 transition-colors hover:text-cyan-300"
              >
                {t("footer_link_cookies")}
              </Link>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
