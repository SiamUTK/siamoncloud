import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

const sectionClass = "py-16 md:py-20";
const containerClass = "mx-auto w-full max-w-7xl px-6";
const bodyClass = "leading-relaxed text-slate-600 dark:text-slate-300";
const headlineClass = "text-4xl font-bold tracking-tight md:text-5xl";
const cardClass =
  "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900";
const primaryButtonClass =
  "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950";

const visionItems = [
  "travel workflows run intelligently",
  "ticketing errors are dramatically reduced",
  "automation handles repetitive work",
  "customer journeys feel truly personalized",
  "travel businesses scale without operational chaos",
];

const whyItems = [
  {
    title: "Built by Real Aviation Experts",
    description:
      "Our foundation comes from practical aviation and ticketing experience, not generic software assumptions.",
  },
  {
    title: "AI That Solves Real Problems",
    description:
      "We apply AI where it creates measurable impact across speed, consistency, and operational quality.",
  },
  {
    title: "Precision-First Culture",
    description:
      "From itinerary accuracy to process control, we design systems that protect trust and margin.",
  },
  {
    title: "Inclusive Travel Innovation",
    description:
      "We build inclusive travel solutions that respect diverse travelers while supporting strong business outcomes.",
  },
];

const solutionItems = [
  "Air Ticketing & Complex Routing",
  "Travel Technology Consulting",
  "AI & Workflow Automation",
  "LGBTQ+ Travel Experience Design",
  "Digital Infrastructure for Travel Businesses",
];

const audienceItems = [
  "Travel Agencies",
  "Tour Operators",
  "Online Travel Businesses",
  "Aviation Service Teams",
  "Travel Startups",
];

function About() {
  const { lang } = useLanguage();

  usePageMeta({
    title:
      "About Siam On Cloud | AI-Powered Travel Technology & Aviation Solutions",
    description:
      "Learn how Siam On Cloud helps travel businesses streamline ticketing, automate workflows, and scale with precision-driven travel technology.",
    scrollToTop: true,
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />

      <main>
        <section className={sectionClass}>
          <div className={`${containerClass} text-center`}>
            <h1 className={headlineClass}>
              AI-Powered Travel &amp; Aviation Solutions for Modern Operators
            </h1>
            <p className={`mx-auto mt-6 max-w-3xl text-lg ${bodyClass}`}>
              We help travel businesses streamline ticketing, automate
              operations, and scale with confidence through precision-driven
              technology and real aviation expertise.
            </p>
            <div className="mt-8">
              <Link
                to={`/${lang}/contact`}
                aria-label="Book a Strategy Call"
                className={primaryButtonClass}
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="who-we-are-title">
          <div className={containerClass}>
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="who-we-are-title" className={headlineClass}>
                Who We Are
              </h2>
              <div
                className={`mt-6 space-y-5 text-left text-base ${bodyClass}`}
              >
                <p>
                  Siam On Cloud combines premium travel expertise with modern
                  technology to deliver global business impact.
                </p>
                <p>
                  We partner with travel operators that need reliable systems,
                  clear execution, and scalable infrastructure to compete in a
                  fast-moving market.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="mission-title">
          <div className={containerClass}>
            <div className="mx-auto max-w-4xl rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 text-center dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
              <h2
                id="mission-title"
                className="text-3xl font-bold tracking-tight md:text-4xl"
              >
                Mission
              </h2>
              <p className="mt-4 text-xl font-semibold text-slate-800 dark:text-slate-100 md:text-2xl">
                To elevate travel operations through intelligent systems,
                precision service, and human-centered innovation.
              </p>
              <p className={`mx-auto mt-5 max-w-3xl ${bodyClass}`}>
                We translate strategy into practical systems that reduce
                operational friction, improve service quality, and support
                sustainable long-term growth.
              </p>
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="vision-title">
          <div className={containerClass}>
            <div className="mx-auto max-w-4xl">
              <h2 id="vision-title" className={`${headlineClass} text-center`}>
                Vision
              </h2>
              <ul
                className="mx-auto mt-8 max-w-3xl space-y-4"
                aria-label="Vision goals"
              >
                {visionItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-cyan-300"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className={`text-base ${bodyClass}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="why-title">
          <div className={containerClass}>
            <h2 id="why-title" className={`${headlineClass} text-center`}>
              Why Siam On Cloud
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {whyItems.map((item) => (
                <article key={item.title} className={cardClass}>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-900 dark:bg-blue-950/40 dark:text-cyan-300">
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
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className={`mt-3 text-sm ${bodyClass}`}>
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="solutions-title">
          <div className={containerClass}>
            <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2
                id="solutions-title"
                className={`${headlineClass} text-center`}
              >
                Core Solutions
              </h2>
              <ul className="mt-8 grid gap-4 md:grid-cols-2">
                {solutionItems.map((item) => (
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
              <p className={`mt-8 text-center ${bodyClass}`}>
                Every solution is engineered to improve operational control,
                service consistency, and growth readiness for modern travel
                businesses.
              </p>
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="serve-title">
          <div className={containerClass}>
            <div className="mx-auto max-w-4xl">
              <h2 id="serve-title" className={`${headlineClass} text-center`}>
                Who We Serve
              </h2>
              <ul className="mx-auto mt-8 max-w-2xl space-y-3">
                {audienceItems.map((item) => (
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

        <section className={sectionClass} aria-labelledby="location-title">
          <div className={containerClass}>
            <div className="mx-auto max-w-4xl text-center">
              <h2 id="location-title" className={headlineClass}>
                Based in Bangkok. Built for Global Travel.
              </h2>
              <p className={`mx-auto mt-5 max-w-3xl ${bodyClass}`}>
                From Bangkok, we support travel organizations across markets
                with precision-driven systems, responsive execution, and a
                global perspective on aviation and travel operations.
              </p>
            </div>
          </div>
        </section>

        <section className={`${sectionClass} pt-0`}>
          <div className={containerClass}>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center dark:border-slate-800 dark:bg-slate-900 md:p-12">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Let&apos;s Build Smarter Travel Operations
              </h2>
              <p className={`mx-auto mt-4 max-w-3xl ${bodyClass}`}>
                Siam On Cloud is ready to help you modernize, automate, and
                scale with confidence.
              </p>
              <div className="mt-8">
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
      </main>

      <Footer />
    </div>
  );
}

export default About;
