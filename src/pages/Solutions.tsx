import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

const sectionClass = "py-16 md:py-20";
const containerClass = "mx-auto w-full";
const cardClass =
  "rounded-2xl border border-white/10 bg-slate-900/80 shadow-sm transition-all duration-300 hover:shadow-md";
const primaryButtonClass =
  "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

const industries = [
  {
    id: "airlines",
    title: "Airlines",
    desc: "Scale booking flow and ancillaries with resilient platform architecture.",
  },
  {
    id: "travel-agencies",
    title: "Travel Agencies",
    desc: "Improve lead conversion and quoting operations with automation-first workflows.",
  },
  {
    id: "otas",
    title: "OTAs",
    desc: "Optimize inventory sync, rate strategy, and campaign responsiveness across markets.",
  },
  {
    id: "enterprise-teams",
    title: "Enterprise Teams",
    desc: "Standardize governance, observability, and rollout strategy for multi-team environments.",
  },
];

const capabilities = [
  {
    id: "ai-automation",
    title: "AI Automation",
    points: [
      "Automated lead qualification and routing",
      "Customer-support assistance with multilingual context",
      "Insight workflows that surface priority opportunities",
    ],
  },
  {
    id: "booking-systems",
    title: "Booking Systems",
    points: [
      "Modern reservation UX and checkout architecture",
      "Stability-first integration patterns for suppliers",
      "Performance tuning for high-intent booking sessions",
    ],
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    points: [
      "Secure cloud foundations aligned to growth",
      "Release pipelines with rollback safety",
      "Runtime monitoring and alerting best practices",
    ],
  },
  {
    id: "custom-integrations",
    title: "Custom Integrations",
    points: [
      "CRM and internal system connectivity",
      "Payment and back-office synchronization",
      "Pragmatic modernization for legacy systems",
    ],
  },
];

function Solutions() {
  const { lang, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;

    const elementId = decodeURIComponent(hash.slice(1));
    if (!elementId) return;

    requestAnimationFrame(() => {
      const target = document.getElementById(elementId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [location.hash]);

  usePageMeta({
    title: t("nav_solutions", "Solutions"),
    description: t(
      "services_seo_desc",
      "Scalable travel technology solutions for modern teams.",
    ),
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
                {t("nav_solutions", "Solutions")}
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
                {t(
                  "services_desc",
                  "Build resilient travel platforms with practical, high-impact delivery.",
                )}
              </p>
            </div>
          </section>

          <section
            className={`${sectionClass} pt-0`}
            aria-labelledby="solutions-industries-title"
          >
            <div className={containerClass}>
              <h2
                id="solutions-industries-title"
                className="text-3xl font-bold tracking-tight md:text-4xl"
              >
                {t("nav_solutions_industries", "Industries")}
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {industries.map((item) => (
                  <article
                    key={item.id}
                    id={item.id}
                    className={`${cardClass} scroll-mt-24 p-6 md:p-8`}
                  >
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-100">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-300">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            className={sectionClass}
            aria-labelledby="solutions-capabilities-title"
          >
            <div className={containerClass}>
              <h2
                id="solutions-capabilities-title"
                className="text-3xl font-bold tracking-tight md:text-4xl"
              >
                {t("nav_solutions_capabilities", "Capabilities")}
              </h2>
              <div className="mt-8 space-y-6">
                {capabilities.map((item) => (
                  <article
                    key={item.id}
                    id={item.id}
                    className={`${cardClass} scroll-mt-24 p-6 md:p-8`}
                  >
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-100">
                      {item.title}
                    </h3>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span
                            className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600 dark:bg-cyan-300"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-slate-200">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
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
                    to={`/${lang}/services`}
                    className="text-sm font-semibold text-slate-200 underline decoration-slate-500 underline-offset-4 transition-colors hover:text-cyan-300"
                  >
                    {t("nav_services")}
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

export default Solutions;
