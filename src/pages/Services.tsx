import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

const sectionClass = "py-16 md:py-20";
const containerClass = "mx-auto w-full";
const cardClass =
  "rounded-2xl border border-white/10 bg-slate-900/80 shadow-sm transition-all duration-300 hover:shadow-md";
const primaryButtonClass =
  "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

const services = [
  {
    id: "air-ticketing",
    aliases: ["airlines", "travel-agencies", "booking-systems"],
    title: "services_ticketing_title",
    short: "services_ticketing_desc",
    details: "services_ticketing_desc",
    capabilities: [
      "services_ticketing_point_1",
      "services_ticketing_point_2",
      "services_ticketing_point_3",
      "home_who_corporate",
    ],
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
    id: "ai-automation",
    aliases: ["enterprise-teams"],
    title: "services_ai_title",
    short: "services_ai_desc",
    details: "services_ai_desc",
    capabilities: [
      "services_ai_point_1",
      "services_ai_point_2",
      "services_ai_point_3",
      "home_why_speed_title",
    ],
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
    id: "lgbtq-travel",
    aliases: [],
    title: "services_lgbtq_title",
    short: "services_lgbtq_desc",
    details: "services_lgbtq_desc",
    capabilities: [
      "services_lgbtq_point_1",
      "services_lgbtq_point_2",
      "services_lgbtq_point_3",
      "home_who_operators",
    ],
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
    id: "travel-tech-consulting",
    aliases: ["otas", "cloud-infrastructure", "custom-integrations"],
    title: "services_digital_title",
    short: "services_digital_desc",
    details: "services_digital_desc",
    capabilities: [
      "services_digital_point_1",
      "services_digital_point_2",
      "services_digital_point_3",
      "home_why_expertise_title",
    ],
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

const processSteps = [
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

const audience = [
  "home_who_agencies",
  "home_who_operators",
  "home_who_otas",
  "home_who_corporate",
  "footer_link_operators",
];

function Services() {
  const { lang, t } = useLanguage();

  usePageMeta({
    title: t("services_seo_title"),
    description: t("services_seo_desc"),
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
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                {t("services_title")}
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
                {t("services_desc")}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to={`/${lang}/contact`}
                  aria-label={t("footer_cta_button")}
                  className={primaryButtonClass}
                >
                  {t("footer_cta_button")}
                </Link>
                <Link
                  to={`/${lang}/contact`}
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-slate-200 transition-colors hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  {t("nav_contact")}
                </Link>
              </div>
            </div>
          </section>

          <section
            className={`${sectionClass} pt-0`}
            aria-labelledby="services-grid-title"
          >
            <div className={containerClass}>
              <h2 id="services-grid-title" className="sr-only">
                Core services
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    aria-label={`${t("btn_explore")} ${t(service.title)}`}
                    className={`${cardClass} group block p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950`}
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                      {service.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-100">
                      {t(service.title)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {t(service.short)}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700 transition-transform group-hover:translate-x-0.5 dark:text-cyan-300">
                      {t("btn_explore")}
                      <span className="ml-1" aria-hidden="true">
                        →
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section
            className={sectionClass}
            aria-labelledby="deep-explanation-title"
          >
            <div className={containerClass}>
              <h2
                id="deep-explanation-title"
                className="text-3xl font-bold tracking-tight md:text-4xl"
              >
                {t("services_title")}
              </h2>

              <div className="mt-8 space-y-6">
                {services.map((service, index) => (
                  <article
                    key={`detail-${service.id}`}
                    id={service.id}
                    className={`${cardClass} relative scroll-mt-24 p-6 md:p-8 ${
                      index % 2 === 1 ? "bg-slate-900/80" : "bg-slate-900/80"
                    }`}
                  >
                    {service.aliases.map((alias) => (
                      <span
                        key={alias}
                        id={alias}
                        className="absolute -top-24 scroll-mt-24"
                        aria-hidden="true"
                      />
                    ))}
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-100">
                      {t(service.title)}
                    </h3>
                    <p className="mt-3 max-w-3xl leading-relaxed text-slate-300">
                      {t(service.details)}
                    </p>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {service.capabilities.map((capability) => (
                        <li key={capability} className="flex items-start gap-3">
                          <span
                            className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600 dark:bg-cyan-300"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-slate-200">
                            {t(capability)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="process-title">
            <div className={containerClass}>
              <h2
                id="process-title"
                className="text-3xl font-bold tracking-tight md:text-4xl"
              >
                {t("home_how_title")}
              </h2>

              <div className="relative mt-8 grid gap-6 md:grid-cols-3">
                <div className="pointer-events-none absolute left-1/2 top-8 hidden h-px w-2/3 -translate-x-1/2 bg-white/15 md:block" />
                {processSteps.map((step) => (
                  <article
                    key={step.number}
                    className={`${cardClass} relative p-6`}
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-lg font-bold text-cyan-300">
                      {step.number}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-slate-100">
                      {t(step.title)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {t(step.description)}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className={sectionClass} aria-labelledby="audience-title">
            <div className={containerClass}>
              <div className="max-w-4xl">
                <h2
                  id="audience-title"
                  className="text-3xl font-bold tracking-tight md:text-4xl"
                >
                  {t("home_who_title")}
                </h2>
                <p className="mt-4 leading-relaxed text-slate-300">
                  {t("home_who_desc")}
                </p>
                <ul className="mt-6 space-y-3">
                  {audience.map((item) => (
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

          <section className={`${sectionClass} pt-0`}>
            <div className={containerClass}>
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 text-center md:p-12">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  {t("footer_cta_title")}
                </h2>
                <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-300">
                  {t("footer_cta_desc")}
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    to={`/${lang}/contact`}
                    aria-label={t("footer_cta_button")}
                    className={primaryButtonClass}
                  >
                    {t("footer_cta_button")}
                  </Link>
                  <Link
                    to={`/${lang}/contact`}
                    className="text-sm font-semibold text-slate-200 underline decoration-slate-500 underline-offset-4 transition-colors hover:text-cyan-300"
                  >
                    {t("nav_contact")}
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

export default Services;
