import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

const sectionClass = "py-16 md:py-20";
const containerClass = "mx-auto w-full max-w-7xl px-6";
const cardClass =
  "rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900";
const primaryButtonClass =
  "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950";

const services = [
  {
    id: "air-ticketing",
    title: "Air Ticketing & Complex Routing",
    short:
      "Handle complex itineraries with stronger fare precision, route logic, and execution consistency.",
    details:
      "Our ticketing services support high-complexity journeys, business-critical reservations, and operational precision at scale.",
    capabilities: [
      "complex routing expertise",
      "GDS precision",
      "fare optimization",
      "group and corporate handling",
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
    title: "AI & Workflow Automation",
    short:
      "Automate repetitive operations and increase team speed while keeping control and reliability.",
    details:
      "We design automation systems that remove repetitive load, improve service consistency, and support sustainable team growth.",
    capabilities: [
      "workflow automation",
      "operational efficiency",
      "error reduction",
      "scalable systems",
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
    title: "LGBTQ+ Travel Solutions",
    short:
      "Create inclusive, personalized travel experiences for modern travelers and evolving markets.",
    details:
      "We help teams deliver inclusive travel programs that balance personalization, safety, and quality at every touchpoint.",
    capabilities: [
      "inclusive travel design",
      "personalized journeys",
      "partner-friendly planning",
      "modern traveler focus",
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
    title: "Travel Technology Consulting",
    short:
      "Build practical technology foundations that support performance, governance, and long-term scale.",
    details:
      "Our consulting aligns people, process, and platform decisions to accelerate digital outcomes for travel organizations.",
    capabilities: [
      "system architecture",
      "process optimization",
      "digital transformation",
      "platform strategy",
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
    title: "Assess & Understand",
    description:
      "We review your workflows, pain points, and business goals to identify high-impact priorities.",
  },
  {
    number: "2",
    title: "Design & Implement",
    description:
      "We implement practical service and automation solutions aligned with your team structure.",
  },
  {
    number: "3",
    title: "Optimize & Scale",
    description:
      "We refine operations continuously to improve performance and support long-term growth.",
  },
];

const audience = [
  "Travel Agencies",
  "Tour Operators",
  "Online Travel Businesses",
  "Aviation Teams",
  "Travel Startups",
];

function Services() {
  const { lang } = useLanguage();

  usePageMeta({
    title: "Siam On Cloud Services | Travel Technology & Aviation Solutions",
    description:
      "Explore Siam On Cloud services including air ticketing, AI automation, LGBTQ+ travel solutions, and travel technology consulting.",
    scrollToTop: true,
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />

      <main>
        <section className={sectionClass}>
          <div className={`${containerClass} text-center`}>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Enterprise Travel &amp; Aviation Solutions
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Precision-driven services designed to help travel businesses
              operate smarter, faster, and with greater confidence.
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
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors hover:border-blue-600 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-300 dark:focus-visible:ring-offset-slate-950"
              >
                Contact Us
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
                  aria-label={`View details for ${service.title}`}
                  className={`${cardClass} group block p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950`}
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-900 dark:bg-blue-950/40 dark:text-cyan-300">
                    {service.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {service.short}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700 transition-transform group-hover:translate-x-0.5 dark:text-cyan-300">
                    Explore
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
              Deep Service Explanation
            </h2>

            <div className="mt-8 space-y-6">
              {services.map((service, index) => (
                <article
                  key={`detail-${service.id}`}
                  id={service.id}
                  className={`${cardClass} p-6 md:p-8 ${
                    index % 2 === 1
                      ? "bg-slate-50 dark:bg-slate-900"
                      : "bg-white dark:bg-slate-900"
                  }`}
                >
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-3xl leading-relaxed text-slate-600 dark:text-slate-300">
                    {service.details}
                  </p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {service.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-3">
                        <span
                          className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600 dark:bg-cyan-300"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-slate-700 dark:text-slate-200">
                          {capability}
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
              Process / How We Work
            </h2>

            <div className="relative mt-8 grid gap-6 md:grid-cols-3">
              <div className="pointer-events-none absolute left-1/2 top-8 hidden h-px w-2/3 -translate-x-1/2 bg-slate-300 dark:bg-slate-700 md:block" />
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className={`${cardClass} relative p-6`}
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-lg font-bold text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-cyan-300">
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {step.description}
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
                Built for Growth-Focused Travel Operators
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                Our services are designed for organizations that need reliable
                operations, faster execution, and scalable infrastructure.
              </p>
              <ul className="mt-6 space-y-3">
                {audience.map((item) => (
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

        <section className={`${sectionClass} pt-0`}>
          <div className={containerClass}>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center dark:border-slate-800 dark:bg-slate-900 md:p-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to modernize your travel operations?
              </h2>
              <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-600 dark:text-slate-300">
                Partner with Siam On Cloud to streamline workflows, reduce
                operational friction, and scale with confidence.
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
                  className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-700 dark:text-slate-200 dark:decoration-slate-600 dark:hover:text-cyan-300"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Services;
