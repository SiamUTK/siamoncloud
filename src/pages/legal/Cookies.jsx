import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

const cookieRows = [
  {
    name: "_ga",
    category: "Performance & Analytics",
    purpose:
      "Distinguishes users for aggregated analytics reporting and performance insights.",
    duration: "2 years",
    provider: "Google Analytics",
  },
  {
    name: "_gid",
    category: "Performance & Analytics",
    purpose:
      "Tracks session-level usage behavior to help us understand website engagement patterns.",
    duration: "24 hours",
    provider: "Google Analytics",
  },
  {
    name: "session_id",
    category: "Strictly Necessary",
    purpose:
      "Maintains essential session state required for secure navigation and core site functionality.",
    duration: "Session",
    provider: "Siam On Cloud",
  },
  {
    name: "cookie_consent",
    category: "Functional",
    purpose:
      "Stores your cookie preference choices so we can respect your consent settings.",
    duration: "12 months",
    provider: "Siam On Cloud",
  },
];

function Cookies() {
  const { lang } = useLanguage();

  usePageMeta({
    title: "Cookie Policy | Siam On Cloud",
    description:
      "Learn how Siam On Cloud uses cookies and similar technologies to improve your browsing experience and support our travel technology services.",
    scrollToTop: true,
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />

      <main>
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight">Cookie Policy</h1>
            <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-600 dark:text-slate-300">
              This Cookie Policy explains how Siam On Cloud uses cookies and
              similar technologies.
            </p>
          </div>
        </section>

        <section className="pb-8">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-5xl rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              Last Updated: January 2026
            </div>
          </div>
        </section>

        <section className="pb-10" aria-labelledby="cookie-content-heading">
          <div className="mx-auto max-w-7xl px-6">
            <article className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-10">
              <h2 id="cookie-content-heading" className="sr-only">
                Cookie policy content
              </h2>

              <section aria-labelledby="what-cookies-are">
                <h2
                  id="what-cookies-are"
                  className="mb-4 mt-0 text-xl font-semibold"
                >
                  3.1 What Are Cookies
                </h2>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  Cookies are small text files stored on your device when you
                  visit a website. They help websites remember user actions and
                  preferences, improve usability, and support secure and
                  reliable functionality.
                </p>
              </section>

              <section aria-labelledby="how-we-use-cookies">
                <h2
                  id="how-we-use-cookies"
                  className="mb-4 mt-10 text-xl font-semibold"
                >
                  3.2 How We Use Cookies
                </h2>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  We use cookies and similar technologies for:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-600 dark:text-slate-300">
                  <li>essential site functionality</li>
                  <li>performance and analytics</li>
                  <li>user preferences</li>
                  <li>security</li>
                </ul>
              </section>

              <section aria-labelledby="types-of-cookies">
                <h2
                  id="types-of-cookies"
                  className="mb-4 mt-10 text-xl font-semibold"
                >
                  3.3 Types of Cookies We Use
                </h2>
                <ul className="list-disc space-y-2 pl-6 leading-relaxed text-slate-600 dark:text-slate-300">
                  <li>
                    <span className="font-medium text-slate-800 dark:text-slate-100">
                      Strictly Necessary:
                    </span>{" "}
                    Required for core website operations and secure access.
                  </li>
                  <li>
                    <span className="font-medium text-slate-800 dark:text-slate-100">
                      Performance &amp; Analytics:
                    </span>{" "}
                    Helps us understand usage patterns and improve service
                    quality.
                  </li>
                  <li>
                    <span className="font-medium text-slate-800 dark:text-slate-100">
                      Functional:
                    </span>{" "}
                    Stores user preferences and interface settings.
                  </li>
                  <li>
                    <span className="font-medium text-slate-800 dark:text-slate-100">
                      Marketing:
                    </span>{" "}
                    Currently limited and may not be active in all regions.
                  </li>
                </ul>
              </section>
            </article>
          </div>
        </section>

        <section className="pb-10" aria-labelledby="cookie-table-heading">
          <div className="mx-auto max-w-7xl px-6">
            <article className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-10">
              <h2 id="cookie-table-heading" className="text-xl font-semibold">
                Cookie Table
              </h2>

              <div className="mt-6 overflow-x-auto rounded-xl">
                <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                  <thead className="bg-slate-100 dark:bg-slate-800">
                    <tr>
                      <th
                        scope="col"
                        className="border border-slate-200 px-4 py-3 font-semibold text-slate-800 dark:border-slate-700 dark:text-slate-100"
                      >
                        Cookie Name
                      </th>
                      <th
                        scope="col"
                        className="border border-slate-200 px-4 py-3 font-semibold text-slate-800 dark:border-slate-700 dark:text-slate-100"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="border border-slate-200 px-4 py-3 font-semibold text-slate-800 dark:border-slate-700 dark:text-slate-100"
                      >
                        Purpose
                      </th>
                      <th
                        scope="col"
                        className="border border-slate-200 px-4 py-3 font-semibold text-slate-800 dark:border-slate-700 dark:text-slate-100"
                      >
                        Duration
                      </th>
                      <th
                        scope="col"
                        className="border border-slate-200 px-4 py-3 font-semibold text-slate-800 dark:border-slate-700 dark:text-slate-100"
                      >
                        Provider
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieRows.map((row) => (
                      <tr key={row.name}>
                        <td className="align-top border border-slate-200 px-4 py-3 text-slate-700 dark:border-slate-800 dark:text-slate-200">
                          {row.name}
                        </td>
                        <td className="align-top border border-slate-200 px-4 py-3 text-slate-600 dark:border-slate-800 dark:text-slate-300">
                          {row.category}
                        </td>
                        <td className="align-top border border-slate-200 px-4 py-3 text-slate-600 dark:border-slate-800 dark:text-slate-300">
                          {row.purpose}
                        </td>
                        <td className="align-top border border-slate-200 px-4 py-3 text-slate-600 dark:border-slate-800 dark:text-slate-300">
                          {row.duration}
                        </td>
                        <td className="align-top border border-slate-200 px-4 py-3 text-slate-600 dark:border-slate-800 dark:text-slate-300">
                          {row.provider}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </section>

        <section className="pb-10" aria-labelledby="manage-cookies-heading">
          <div className="mx-auto max-w-7xl px-6">
            <article className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-10">
              <h2 id="manage-cookies-heading" className="text-xl font-semibold">
                Managing Your Cookie Preferences
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                You can manage cookie usage by adjusting your browser settings,
                using cookie banner controls, and blocking or deleting cookies
                at any time. Please note that disabling certain cookies may
                affect website functionality.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                For broader details about how we handle personal data, review
                our{" "}
                <Link
                  to={`/${lang}/privacy`}
                  className="font-medium text-blue-700 underline decoration-transparent underline-offset-4 transition-colors hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-cyan-300 dark:hover:decoration-cyan-300 dark:focus-visible:ring-offset-slate-900"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </article>
          </div>
        </section>

        <section
          className="pb-16 md:pb-20"
          aria-labelledby="contact-cookies-heading"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
              <h2
                id="contact-cookies-heading"
                className="text-xl font-semibold"
              >
                Contact Us
              </h2>
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
                If you have questions about our use of cookies, please contact:
              </p>
              <div className="mt-4 space-y-1 text-slate-700 dark:text-slate-200">
                <p>Siam On Cloud</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@siamon.cloud"
                    className="font-medium text-blue-700 underline decoration-transparent underline-offset-4 transition-colors hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:text-cyan-300 dark:hover:decoration-cyan-300 dark:focus-visible:ring-offset-slate-900"
                  >
                    info@siamon.cloud
                  </a>
                </p>
                <p>Location: Bangkok, Thailand</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Cookies;
