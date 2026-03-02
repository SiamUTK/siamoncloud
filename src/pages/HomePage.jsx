import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

const TRUST_ITEMS = [
  "Aviation Expertise",
  "GDS Specialists",
  "Bangkok-Based",
  "AI Automation Ready",
];

const SERVICES = [
  {
    title: "Air Ticketing & Complex Routing",
    description:
      "Design and manage multi-sector itineraries with fare precision, risk controls, and operational speed.",
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
    title: "AI & Workflow Automation",
    description:
      "Automate repetitive tasks, reduce response times, and create reliable workflows for growing teams.",
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
    title: "LGBTQ+ Travel Solutions",
    description:
      "Build inclusive travel experiences with trusted recommendations, respectful service design, and confidence.",
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
    title: "Travel Technology Consulting",
    description:
      "Align systems, data, and execution with practical architecture that supports measurable business outcomes.",
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
    title: "Built by Aviation Experts",
    description:
      "Our solutions are shaped by real-world airline, ticketing, and operations experience.",
  },
  {
    title: "Precision-First Operations",
    description:
      "We prioritize accuracy at every step to reduce leakage, rework, and customer friction.",
  },
  {
    title: "AI That Solves Real Problems",
    description:
      "Automation is applied where it matters most: speed, consistency, and service quality.",
  },
  {
    title: "Enterprise-Ready Systems",
    description:
      "Scalable architecture and dependable processes support teams from startup to enterprise.",
  },
];

const STEPS = [
  {
    number: "1",
    title: "Assess Your Workflow",
    description:
      "We audit your ticketing flow, data handoffs, and pain points to define clear priorities.",
  },
  {
    number: "2",
    title: "Implement Smart Automation",
    description:
      "We deploy practical automation and process improvements with minimal operational disruption.",
  },
  {
    number: "3",
    title: "Scale with Confidence",
    description:
      "You gain repeatable systems, stronger performance visibility, and room to grow securely.",
  },
];

const AUDIENCE = [
  "Travel Agencies",
  "Tour Operators",
  "Online Travel Businesses",
  "Aviation Service Teams",
  "Travel Startups",
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
  const { lang } = useLanguage();

  usePageMeta({
    title: "Siam On Cloud | AI-Powered Travel & Aviation Solutions",
    description:
      "Siam On Cloud helps travel businesses streamline ticketing, automate workflows, and scale with precision-driven travel technology.",
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
                AI-Powered Travel &amp; Aviation Solutions for Modern Operators
              </h1>
              <p className={`mt-6 text-lg leading-relaxed ${bodyTextClass}`}>
                We help travel businesses streamline ticketing, automate
                operations, and scale with confidence through precision-driven
                technology and real aviation expertise.
              </p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  to={`/${lang}/contact`}
                  aria-label="Book a Strategy Call"
                  className={primaryButtonClass}
                >
                  Book a Strategy Call
                </Link>
                <Link
                  to={`/${lang}/services`}
                  className={`${secondaryLinkClass} rounded-lg px-2 py-1`}
                >
                  Explore Services
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
                      Ticketing Precision
                    </p>
                    <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                      99.9% Accuracy
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-800 dark:bg-slate-900/80">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Workflow Speed
                    </p>
                    <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                      Faster Operations
                    </p>
                  </div>
                  <div className="sm:col-span-2 rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-800 dark:bg-slate-900/80">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Built for Growth
                    </p>
                    <p className="mt-2 text-base font-medium text-slate-700 dark:text-slate-200">
                      Modular travel technology that scales from daily
                      operations to enterprise transformation.
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
                aria-label="Trust indicators"
              >
                {TRUST_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 dark:text-slate-300"
                  >
                    {item}
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
                Core Services for High-Performance Travel Teams
              </h2>
              <p className={`mt-4 ${bodyTextClass}`}>
                Practical solutions designed to improve margins, reduce manual
                work, and strengthen service quality across your operation.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service) => (
                <article key={service.title} className={`${cardClass} p-6`}>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-900 dark:bg-blue-950/40 dark:text-cyan-300">
                    {service.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${bodyTextClass}`}
                  >
                    {service.description}
                  </p>
                  <Link
                    to={`/${lang}/${service.to}`}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-cyan-300 dark:hover:text-cyan-200 dark:focus-visible:ring-offset-slate-950"
                  >
                    Learn more
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
                Why Siam On Cloud
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {WHY_ITEMS.map((item) => (
                <article key={item.title} className={`${cardClass} p-6`}>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className={`mt-3 ${bodyTextClass}`}>{item.description}</p>
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
                How It Works
              </h2>
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
                    {step.title}
                  </h3>
                  <p className={`mt-3 ${bodyTextClass}`}>{step.description}</p>
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
                Who We Serve
              </h2>
              <p className={`mt-4 ${bodyTextClass}`}>
                We partner with ambitious travel and aviation-focused teams that
                need scalable systems and dependable execution.
              </p>
              <ul className="mt-6 space-y-3">
                {AUDIENCE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600 dark:bg-cyan-300"
                      aria-hidden="true"
                    />
                    <span className="text-base text-slate-700 dark:text-slate-200">
                      {item}
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
                Ready to optimize your travel operations?
              </h2>
              <div className="mt-6">
                <Link
                  to={`/${lang}/contact`}
                  aria-label="Book a Strategy Call"
                  className={primaryButtonClass}
                >
                  Book a Strategy Call
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
                  Let&apos;s Build Smarter Travel Operations
                </h2>
                <p className={`mt-4 ${bodyTextClass}`}>
                  Siam On Cloud is ready to help you modernize, automate, and
                  scale with confidence.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    to={`/${lang}/contact`}
                    aria-label="Book a Strategy Call"
                    className={primaryButtonClass}
                  >
                    Book a Strategy Call
                  </Link>
                  <Link
                    to={`/${lang}/contact`}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 dark:focus-visible:ring-offset-slate-950"
                  >
                    Contact Us
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
