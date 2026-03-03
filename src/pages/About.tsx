import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

const sectionClass = "py-16 md:py-20";
const containerClass = "mx-auto w-full";
const bodyClass = "leading-relaxed text-slate-300";
const headlineClass = "text-4xl font-bold tracking-tight md:text-5xl";
const cardClass =
  "rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-sm transition-all duration-300 hover:shadow-md";
const primaryButtonClass =
  "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

const visionItems = [
  "home_how_step1_desc",
  "home_how_step2_desc",
  "home_how_step3_desc",
  "home_why_speed_desc",
  "home_why_expertise_desc",
];

const whyItems = [
  {
    title: "home_why_expertise_title",
    description: "home_why_expertise_desc",
  },
  {
    title: "services_ai_title",
    description: "services_ai_desc",
  },
  {
    title: "home_why_security_title",
    description: "home_why_security_desc",
  },
  {
    title: "services_lgbtq_title",
    description: "services_lgbtq_desc",
  },
];

const solutionItems = [
  "services_ticketing_title",
  "services_digital_title",
  "services_ai_title",
  "services_lgbtq_title",
  "home_services_digital_title",
];

const audienceItems = [
  "home_who_agencies",
  "home_who_operators",
  "home_who_otas",
  "home_who_corporate",
  "footer_link_operators",
];

function About() {
  const { lang, t } = useLanguage();

  usePageMeta({
    title: t("about_seo_title"),
    description: t("about_seo_desc"),
    scrollToTop: true,
  });

  return (
    <div className="dark relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.15),transparent_50%)]" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[50vh] bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_50%)]" />

      <div className="relative z-10">
        <main className="mx-auto w-full max-w-7xl px-6 pb-24 pt-8 sm:px-10">
          <section className={sectionClass}>
            <div className={`${containerClass} text-center`}>
              <h1 className={headlineClass}>{t("about_title")}</h1>
              <p className={`mx-auto mt-6 max-w-3xl text-lg ${bodyClass}`}>
                {t("about_desc")}
              </p>
              <div className="mt-8">
                <Link
                  to={`/${lang}/contact`}
                  aria-label={t("footer_cta_button")}
                  className={primaryButtonClass}
                >
                  {t("footer_cta_button")}
                </Link>
              </div>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="who-we-are-title">
            <div className={containerClass}>
              <div className="mx-auto max-w-3xl text-center">
                <h2 id="who-we-are-title" className={headlineClass}>
                  {t("about_badge")}
                </h2>
                <div
                  className={`mt-6 space-y-5 text-left text-base ${bodyClass}`}
                >
                  <p>{t("about_desc")}</p>
                  <p>{t("home_who_desc")}</p>
                </div>
              </div>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="mission-title">
            <div className={containerClass}>
              <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 text-center">
                <h2
                  id="mission-title"
                  className="text-3xl font-bold tracking-tight md:text-4xl"
                >
                  Mission
                </h2>
                <p className="mt-4 text-xl font-semibold text-slate-100 md:text-2xl">
                  {t("about_mission_title")}
                </p>
                <p className={`mx-auto mt-5 max-w-3xl ${bodyClass}`}>
                  {t("about_mission_desc")}
                </p>
              </div>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="vision-title">
            <div className={containerClass}>
              <div className="mx-auto max-w-4xl">
                <h2
                  id="vision-title"
                  className={`${headlineClass} text-center`}
                >
                  {t("about_vision_title")}
                </h2>
                <ul
                  className="mx-auto mt-8 max-w-3xl space-y-4"
                  aria-label="Vision goals"
                >
                  {visionItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span className={`text-base ${bodyClass}`}>
                        {t(item)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="why-title">
            <div className={containerClass}>
              <h2 id="why-title" className={`${headlineClass} text-center`}>
                {t("home_why_title")}
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {whyItems.map((item) => (
                  <article key={item.title} className={cardClass}>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 3 4 7v5c0 5.2 3.4 8.8 8 10 4.6-1.2 8-4.8 8-10V7l-8-4Zm0 4.2 4 2v2.8c0 3.5-2 5.9-4 6.8-2-.9-4-3.3-4-6.8V9.2l4-2Z"
                          className="fill-current"
                        />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-100">
                      {t(item.title)}
                    </h3>
                    <p className={`mt-3 text-sm ${bodyClass}`}>
                      {t(item.description)}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="solutions-title">
            <div className={containerClass}>
              <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-sm">
                <h2
                  id="solutions-title"
                  className={`${headlineClass} text-center`}
                >
                  {t("home_services_title")}
                </h2>
                <ul className="mt-8 grid gap-4 md:grid-cols-2">
                  {solutionItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600 dark:bg-cyan-300"
                        aria-hidden="true"
                      />
                      <span className="text-base text-slate-200">
                        {t(item)}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className={`mt-8 text-center ${bodyClass}`}>
                  {t("home_why_desc")}
                </p>
              </div>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="serve-title">
            <div className={containerClass}>
              <div className="mx-auto max-w-4xl">
                <h2 id="serve-title" className={`${headlineClass} text-center`}>
                  {t("home_who_title")}
                </h2>
                <ul className="mx-auto mt-8 max-w-2xl space-y-3">
                  {audienceItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600 dark:bg-cyan-300"
                        aria-hidden="true"
                      />
                      <span className="text-base text-slate-200">
                        {t(item)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="location-title">
            <div className={containerClass}>
              <div className="mx-auto max-w-4xl text-center">
                <h2 id="location-title" className={headlineClass}>
                  {t("footer_location")}
                </h2>
                <p className={`mx-auto mt-5 max-w-3xl ${bodyClass}`}>
                  {t("footer_global_presence")}
                </p>
              </div>
            </div>
          </section>

          <section className={`${sectionClass} pt-0`}>
            <div className={containerClass}>
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 text-center md:p-12">
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                  {t("home_cta_title")}
                </h2>
                <p className={`mx-auto mt-4 max-w-3xl ${bodyClass}`}>
                  {t("home_cta_desc")}
                </p>
                <div className="mt-8">
                  <Link
                    to={`/${lang}/contact`}
                    aria-label={t("footer_cta_button")}
                    className={primaryButtonClass}
                  >
                    {t("footer_cta_button")}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default About;
