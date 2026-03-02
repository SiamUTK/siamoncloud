import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

const TRUST_ITEMS = [
  "home_trusted_airlines",
  "home_trusted_agencies",
  "home_trusted_operators",
  "home_trusted_otas",
];

const SERVICES = [
  {
    title: "home_services_travel_title",
    description: "home_services_travel_desc",
    to: "services",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M2 12h8l8-8 2 2-6 6h8v3h-8l6 6-2 2-8-8H2v-3Z"
          className="fill-current"
        />
      </svg>
    ),
  },
  {
    title: "home_services_automation_title",
    description: "home_services_automation_desc",
    to: "services",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M12 3 7 6v6l5 3 5-3V6l-5-3Zm0 15-5-3v3l5 3 5-3v-3l-5 3Z"
          className="fill-current"
        />
      </svg>
    ),
  },
  {
    title: "home_services_lgbtq_title",
    description: "home_services_lgbtq_desc",
    to: "services",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M12 21s-7-4.3-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 11c0 5.7-7 10-7 10Z"
          className="fill-current"
        />
      </svg>
    ),
  },
  {
    title: "home_services_digital_title",
    description: "home_services_digital_desc",
    to: "services",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M4 4h16v4H4V4Zm0 6h10v4H4v-4Zm0 6h16v4H4v-4Zm12-6h4v4h-4v-4Z"
          className="fill-current"
        />
      </svg>
    ),
  },
];

const WHY_ITEMS = [
  {
    title: "home_why_expertise_title",
    description: "home_why_expertise_desc",
  },
  {
    title: "home_why_security_title",
    description: "home_why_security_desc",
  },
  {
    title: "home_why_speed_title",
    description: "home_why_speed_desc",
  },
  {
    title: "home_services_automation_title",
    description: "home_services_automation_desc",
  },
];

const STEPS = [
  {
    number: "1",
    title: "home_how_step1_title",
    description: "home_how_step1_desc",
  },
  {
    number: "2",
    title: "home_how_step2_title",
    description: "home_how_step2_desc",
  },
  {
    number: "3",
    title: "home_how_step3_title",
    description: "home_how_step3_desc",
  },
];

const AUDIENCE = [
  "home_who_agencies",
  "home_who_operators",
  "home_who_otas",
  "home_who_corporate",
  "footer_link_operators",
];

const sectionClass = "py-16 md:py-20";
const containerClass = "mx-auto w-full max-w-7xl px-6";
const bodyTextClass = "text-slate-600 dark:text-slate-300";
const cardClass =
  "rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900";
const primaryButtonClass =
  "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950";
const secondaryLinkClass =
  "inline-flex items-center font-semibold text-slate-700 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-200 dark:hover:text-cyan-300 dark:focus-visible:ring-offset-slate-950";

function HomePage() {
  const { lang, t } = useLanguage();

  usePageMeta({
    title: t("seo.title"),
    description: t("seo.description"),
    scrollToTop: true,
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main>
        <section className={sectionClass}>
          <div
            className={`${containerClass} grid gap-12 lg:grid-cols-2 lg:items-center`}
          >
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
                {t("hero_title_1")} <br className="hidden md:block" />
                {t("hero_title_2")}
              </h1>
              <p className={`mt-6 text-lg leading-relaxed ${bodyTextClass}`}>
                {t("hero_desc")}
              </p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  to={`/${lang}/contact`}
                  aria-label={t("btn_expert")}
                  className={primaryButtonClass}
                >
                  {t("btn_expert")}
                </Link>
                <Link
                  to={`/${lang}/services`}
                  className={`${secondaryLinkClass} rounded-lg px-2 py-1`}
                >
                  {t("btn_explore")}
                  <span className="ml-1" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-blue-100 via-cyan-100 to-white blur-2xl dark:from-blue-950/40 dark:via-cyan-900/30 dark:to-slate-950" />
              <div className="min-h-[320px] rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-8 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-800 dark:bg-slate-900/80">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {t("hero_trust_experience")}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                      {t("stats_years")}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-800 dark:bg-slate-900/80">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {t("hero_trust_clients")}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                      {t("stats_clients")}
                    </p>
                  </div>
                  <div className="sm:col-span-2 rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-800 dark:bg-slate-900/80">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {t("hero_trust_support")}
                    </p>
                    <p className="mt-2 text-base font-medium text-slate-700 dark:text-slate-200">
                      {t("hero_micro_proof")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className={containerClass}>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 dark:border-slate-800 dark:bg-slate-900">
              <ul
                className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
                aria-label={t("home_trusted_title")}
              >
                {TRUST_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 dark:text-slate-300"
                  >
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="core-services-title">
          <div className={containerClass}>
            <div className="max-w-3xl">
              <h2
                id="core-services-title"
                className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white"
              >
                {t("home_services_title")}
              </h2>
              <p className={`mt-4 ${bodyTextClass}`}>
                {t("home_services_desc")}
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service) => (
                <article key={service.title} className={`${cardClass} p-6`}>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-900 dark:bg-blue-950/40 dark:text-cyan-300">
                    {service.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {t(service.title)}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${bodyTextClass}`}
                  >
                    {t(service.description)}
                  </p>
                  <Link
                    to={`/${lang}/${service.to}`}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-cyan-300 dark:hover:text-cyan-200 dark:focus-visible:ring-offset-slate-950"
                  >
                    {t("home_cta_primary", "Learn more")}
                    <span className="ml-1" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="why-title">
          <div className={containerClass}>
            <div className="mx-auto max-w-3xl text-center">
              <h2
                id="why-title"
                className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white"
              >
                {t("home_why_title")}
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {WHY_ITEMS.map((item) => (
                <article key={item.title} className={`${cardClass} p-6`}>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {t(item.title)}
                  </h3>
                  <p className={`mt-3 ${bodyTextClass}`}>
                    {t(item.description)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="how-title">
          <div className={containerClass}>
            <div className="max-w-3xl">
              <h2
                id="how-title"
                className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white"
              >
                {t("home_how_title")}
              </h2>
              <p className={`mt-4 ${bodyTextClass}`}>{t("home_how_desc")}</p>
            </div>

            <div className="relative mt-10 grid gap-6 md:grid-cols-3">
              <div className="pointer-events-none absolute left-1/2 top-7 hidden h-px w-2/3 -translate-x-1/2 bg-slate-300 dark:bg-slate-700 md:block" />
              {STEPS.map((step) => (
                <article
                  key={step.number}
                  className={`${cardClass} relative p-6`}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-lg font-bold text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-cyan-300">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {t(step.title)}
                  </h3>
                  <p className={`mt-3 ${bodyTextClass}`}>
                    {t(step.description)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="serve-title">
          <div className={containerClass}>
            <div className="max-w-3xl">
              <h2
                id="serve-title"
                className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white"
              >
                {t("home_who_title")}
              </h2>
              <p className={`mt-4 ${bodyTextClass}`}>{t("home_who_desc")}</p>
              <ul className="mt-6 space-y-3">
                {AUDIENCE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600 dark:bg-cyan-300"
                      aria-hidden="true"
                    />
                    <span className="text-base text-slate-700 dark:text-slate-200">
                      {t(item)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={containerClass}>
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 text-center shadow-sm dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                {t("home_mid_cta_title")}
              </h2>
              <p className={`mt-4 ${bodyTextClass}`}>
                {t("home_mid_cta_desc")}
              </p>
              <div className="mt-6">
                <Link
                  to={`/${lang}/contact`}
                  aria-label={t("home_mid_cta_primary")}
                  className={primaryButtonClass}
                >
                  {t("home_mid_cta_primary")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={containerClass}>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 p-8 md:p-12 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
                  {t("home_cta_title")}
                </h2>
                <p className={`mt-4 ${bodyTextClass}`}>{t("home_cta_desc")}</p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    to={`/${lang}/contact`}
                    aria-label={t("home_cta_secondary")}
                    className={primaryButtonClass}
                  >
                    {t("home_cta_secondary")}
                  </Link>
                  <Link
                    to={`/${lang}/contact`}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 dark:focus-visible:ring-offset-slate-950"
                  >
                    {t("nav_contact")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
