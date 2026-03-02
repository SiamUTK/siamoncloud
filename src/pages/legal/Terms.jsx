import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import usePageMeta from "@/hooks/usePageMeta";

function Terms() {
  usePageMeta({
    title: "Terms of Use | Siam On Cloud",
    description:
      "Read the Terms of Use governing access to Siam On Cloud services, including travel technology, ticketing, and automation solutions.",
    scrollToTop: true,
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />

      <main>
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight">Terms of Use</h1>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">
              Please read these terms carefully before using Siam On Cloud
              services.
            </p>
          </div>
        </section>

        <section className="pb-8">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              Last Updated: January 2026
            </div>
          </div>
        </section>

        <section
          className="pb-16 md:pb-20"
          aria-labelledby="terms-content-heading"
        >
          <div className="mx-auto max-w-7xl px-6">
            <article className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-10">
              <h2 id="terms-content-heading" className="sr-only">
                Terms content
              </h2>

              <section aria-labelledby="acceptance-of-terms">
                <h2
                  id="acceptance-of-terms"
                  className="mb-4 mt-0 text-xl font-semibold"
                >
                  3.1 Acceptance of Terms
                </h2>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  By accessing or using Siam On Cloud services, you agree to be
                  bound by these Terms of Use. If you do not agree with these
                  Terms, you should not access or use our services.
                </p>
              </section>

              <section aria-labelledby="services-overview">
                <h2
                  id="services-overview"
                  className="mb-4 mt-10 text-xl font-semibold"
                >
                  3.2 Services Overview
                </h2>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  Siam On Cloud provides professional services that support
                  modern travel and aviation operations, including:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-600 dark:text-slate-300">
                  <li>travel technology solutions</li>
                  <li>air ticketing support</li>
                  <li>automation services</li>
                  <li>consulting services</li>
                </ul>
                <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                  Our services may evolve, be expanded, or be updated over time
                  to meet operational, technical, and regulatory requirements.
                </p>
              </section>

              <section aria-labelledby="eligibility">
                <h2
                  id="eligibility"
                  className="mb-4 mt-10 text-xl font-semibold"
                >
                  3.3 Eligibility
                </h2>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  To use our services, you must:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-600 dark:text-slate-300">
                  <li>be legally capable</li>
                  <li>provide accurate information</li>
                  <li>use services lawfully</li>
                </ul>
              </section>

              <section aria-labelledby="user-responsibilities">
                <h2
                  id="user-responsibilities"
                  className="mb-4 mt-10 text-xl font-semibold"
                >
                  3.4 User Responsibilities
                </h2>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  You agree not to:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-slate-600 dark:text-slate-300">
                  <li>misuse the platform</li>
                  <li>attempt unauthorized access</li>
                  <li>interfere with service operations</li>
                  <li>submit false or misleading information</li>
                </ul>
              </section>

              <section aria-labelledby="intellectual-property">
                <h2
                  id="intellectual-property"
                  className="mb-4 mt-10 text-xl font-semibold"
                >
                  3.5 Intellectual Property
                </h2>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  All website content, branding, design elements, text,
                  documentation, and related materials are the property of Siam
                  On Cloud or its licensors and may not be copied, distributed,
                  modified, or reused without prior written permission.
                </p>
              </section>

              <section aria-labelledby="service-availability">
                <h2
                  id="service-availability"
                  className="mb-4 mt-10 text-xl font-semibold"
                >
                  3.6 Service Availability
                </h2>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  Services are provided on an “as available” basis. We do not
                  guarantee uninterrupted or error-free access at all times.
                  Scheduled or emergency maintenance may be required to preserve
                  platform stability, security, and performance.
                </p>
              </section>

              <section aria-labelledby="limitation-of-liability">
                <h2
                  id="limitation-of-liability"
                  className="mb-4 mt-10 text-xl font-semibold"
                >
                  3.7 Limitation of Liability
                </h2>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  To the maximum extent permitted by applicable law, Siam On
                  Cloud is not liable for indirect, incidental, consequential,
                  special, or punitive damages arising from or related to your
                  use of our services.
                </p>
              </section>

              <section aria-labelledby="third-party-services">
                <h2
                  id="third-party-services"
                  className="mb-4 mt-10 text-xl font-semibold"
                >
                  3.8 Third-Party Services
                </h2>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  Some features may rely on third-party tools, integrations, or
                  service providers. Siam On Cloud does not control and is not
                  responsible for the availability, security, or performance of
                  third-party services.
                </p>
              </section>

              <section aria-labelledby="modifications-to-terms">
                <h2
                  id="modifications-to-terms"
                  className="mb-4 mt-10 text-xl font-semibold"
                >
                  3.9 Modifications to Terms
                </h2>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  Siam On Cloud may revise these Terms from time to time.
                  Updated Terms become effective upon publication. Continued use
                  of the services after changes are posted constitutes
                  acceptance of the revised Terms.
                </p>
              </section>

              <section aria-labelledby="governing-law">
                <h2
                  id="governing-law"
                  className="mb-4 mt-10 text-xl font-semibold"
                >
                  3.10 Governing Law
                </h2>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  These Terms are governed by and interpreted under the laws of
                  Thailand.
                </p>
              </section>
            </article>
          </div>
        </section>

        <section
          className="pb-16 md:pb-20"
          aria-labelledby="contact-legal-heading"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
              <h2 id="contact-legal-heading" className="text-xl font-semibold">
                Contact Us
              </h2>
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
                If you have questions about these Terms, please contact:
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

export default Terms;
