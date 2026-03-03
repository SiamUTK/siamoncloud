import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

function Privacy() {
  const { lang } = useLanguage();

  usePageMeta({
    title: "Privacy Policy | Siam On Cloud",
    description:
      "Learn how Siam On Cloud collects, uses, and protects your information when you use our travel technology and aviation services.",
    scrollToTop: true,
  });

  return (
    <div className="dark relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.15),transparent_50%)]" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[50vh] bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_50%)]" />

      <div className="relative z-10">
        <Navbar />

        <main className="mx-auto w-full max-w-7xl px-6 pb-24 pt-8 sm:px-10">
          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6 text-center sm:px-10">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Privacy Policy
              </h1>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-300">
                This Privacy Policy explains how Siam On Cloud collects, uses,
                and safeguards your information.
              </p>
            </div>
          </section>

          <section className="pb-8">
            <div className="mx-auto w-full">
              <div className="mx-auto max-w-4xl rounded-lg border border-white/10 bg-slate-900/70 px-4 py-3 text-center text-sm text-slate-300">
                Last Updated: January 2026
              </div>
            </div>
          </section>

          <section
            className="pb-16 md:pb-20"
            aria-labelledby="privacy-content-heading"
          >
            <div className="mx-auto w-full">
              <article className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-sm md:p-10">
                <h2 id="privacy-content-heading" className="sr-only">
                  Privacy policy content
                </h2>

                <section aria-labelledby="info-collect">
                  <h2
                    id="info-collect"
                    className="mb-4 mt-0 text-xl font-semibold"
                  >
                    3.1 Information We Collect
                  </h2>
                  <p className="leading-relaxed text-slate-300">
                    We may collect several categories of information, including:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-300">
                    <li>Personal information (name, email, company)</li>
                    <li>Communication data</li>
                    <li>Technical data (IP, browser, device)</li>
                    <li>Usage data</li>
                  </ul>
                  <p className="mt-4 leading-relaxed text-slate-300">
                    We collect information through forms, cookies, and your
                    direct interactions with our website and services.
                  </p>
                </section>

                <section aria-labelledby="how-we-use">
                  <h2
                    id="how-we-use"
                    className="mb-4 mt-10 text-xl font-semibold"
                  >
                    3.2 How We Use Information
                  </h2>
                  <p className="leading-relaxed text-slate-300">
                    We use collected information to:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-300">
                    <li>provide and improve services</li>
                    <li>respond to inquiries</li>
                    <li>communicate updates</li>
                    <li>maintain security</li>
                    <li>comply with legal obligations</li>
                  </ul>
                </section>

                <section aria-labelledby="legal-basis">
                  <h2
                    id="legal-basis"
                    className="mb-4 mt-10 text-xl font-semibold"
                  >
                    3.3 Legal Basis (GDPR-style clarity)
                  </h2>
                  <p className="leading-relaxed text-slate-300">
                    Where applicable, we process personal data based on
                    legitimate interests, contract necessity, consent where
                    required, and legal obligations.
                  </p>
                </section>

                <section aria-labelledby="cookies-tracking">
                  <h2
                    id="cookies-tracking"
                    className="mb-4 mt-10 text-xl font-semibold"
                  >
                    3.4 Cookies and Tracking
                  </h2>
                  <p className="leading-relaxed text-slate-300">
                    We use cookies and similar technologies to support essential
                    website functions, improve user experience, and analyze
                    service performance. For more details, see our{" "}
                    <Link
                      to={`/${lang}/cookies`}
                      className="font-medium text-cyan-300 underline decoration-transparent underline-offset-4 transition-colors hover:decoration-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    >
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </section>

                <section aria-labelledby="information-sharing">
                  <h2
                    id="information-sharing"
                    className="mb-4 mt-10 text-xl font-semibold"
                  >
                    3.5 Information Sharing
                  </h2>
                  <p className="leading-relaxed text-slate-300">
                    Siam On Cloud does not sell personal data. We may share
                    information with service providers, legal authorities when
                    required by law, or in connection with a merger,
                    acquisition, or business transfer.
                  </p>
                </section>

                <section aria-labelledby="data-retention">
                  <h2
                    id="data-retention"
                    className="mb-4 mt-10 text-xl font-semibold"
                  >
                    3.6 Data Retention
                  </h2>
                  <p className="leading-relaxed text-slate-300">
                    We retain personal data only for as long as necessary to
                    fulfill business purposes, provide services, resolve
                    disputes, and comply with legal or regulatory requirements.
                  </p>
                </section>

                <section aria-labelledby="data-security">
                  <h2
                    id="data-security"
                    className="mb-4 mt-10 text-xl font-semibold"
                  >
                    3.7 Data Security
                  </h2>
                  <p className="leading-relaxed text-slate-300">
                    We apply reasonable technical and organizational safeguards
                    to protect personal information. However, no system can be
                    guaranteed to be 100% secure.
                  </p>
                </section>

                <section aria-labelledby="international-transfers">
                  <h2
                    id="international-transfers"
                    className="mb-4 mt-10 text-xl font-semibold"
                  >
                    3.8 International Transfers
                  </h2>
                  <p className="leading-relaxed text-slate-300">
                    Your information may be processed outside your country of
                    residence. Where this occurs, we apply appropriate
                    safeguards to protect personal data in line with applicable
                    standards.
                  </p>
                </section>

                <section aria-labelledby="your-rights">
                  <h2
                    id="your-rights"
                    className="mb-4 mt-10 text-xl font-semibold"
                  >
                    3.9 Your Rights
                  </h2>
                  <p className="leading-relaxed text-slate-300">
                    Depending on your jurisdiction, you may have the right to:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-300">
                    <li>access</li>
                    <li>correction</li>
                    <li>deletion</li>
                    <li>objection</li>
                    <li>withdraw consent</li>
                  </ul>
                  <p className="mt-4 leading-relaxed text-slate-300">
                    To exercise your rights, contact us at info@siamon.cloud.
                  </p>
                </section>

                <section aria-labelledby="childrens-privacy">
                  <h2
                    id="childrens-privacy"
                    className="mb-4 mt-10 text-xl font-semibold"
                  >
                    3.10 Children&apos;s Privacy
                  </h2>
                  <p className="leading-relaxed text-slate-300">
                    Our services are not directed to children under 13, and we
                    do not knowingly collect personal data from children under
                    this age threshold.
                  </p>
                </section>

                <section aria-labelledby="policy-updates">
                  <h2
                    id="policy-updates"
                    className="mb-4 mt-10 text-xl font-semibold"
                  >
                    3.11 Updates to This Policy
                  </h2>
                  <p className="leading-relaxed text-slate-300">
                    We may update this Privacy Policy from time to time.
                    Significant revisions will be reflected through an updated
                    “Last Updated” date. Continued use of our services after
                    updates constitutes acceptance of the revised policy.
                  </p>
                </section>
              </article>
            </div>
          </section>

          <section
            className="pb-16 md:pb-20"
            aria-labelledby="contact-privacy-heading"
          >
            <div className="mx-auto w-full">
              <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-sm md:p-8">
                <h2
                  id="contact-privacy-heading"
                  className="text-xl font-semibold"
                >
                  Contact Us
                </h2>
                <p className="mt-3 leading-relaxed text-slate-300">
                  If you have questions about this Privacy Policy, please
                  contact:
                </p>
                <div className="mt-4 space-y-1 text-slate-200">
                  <p>Siam On Cloud</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@siamon.cloud"
                      className="font-medium text-cyan-300 underline decoration-transparent underline-offset-4 transition-colors hover:decoration-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
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
    </div>
  );
}

export default Privacy;
