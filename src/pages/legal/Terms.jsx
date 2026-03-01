import { useEffect } from "react";
import usePageMeta from "../../hooks/usePageMeta";

const LAST_UPDATED = "March 1, 2026";

const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "services", title: "Description of Services" },
  { id: "eligibility", title: "Eligibility" },
  { id: "responsibilities", title: "User Responsibilities" },
  { id: "thirdparty", title: "Booking and Third-Party Services" },
  { id: "payments", title: "Payments and Pricing" },
  { id: "cancellations", title: "Cancellations and Refunds" },
  { id: "ip", title: "Intellectual Property" },
  { id: "ai", title: "AI and Automated Tools Disclaimer" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "privacy", title: "Privacy Reference" },
  { id: "availability", title: "Service Availability" },
  { id: "modifications", title: "Modifications to Services" },
  { id: "termination", title: "Termination" },
  { id: "law", title: "Governing Law" },
  { id: "contact", title: "Contact Information" },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Terms() {
  usePageMeta({
    title: "Terms of Use | Siam On Cloud",
    description:
      "Read the official Terms of Use for Siam On Cloud Company Limited. Learn about your rights, responsibilities, and our policies for travel, booking, and digital services.",
    og: {
      title: "Terms of Use | Siam On Cloud",
      description:
        "Official Terms of Use for Siam On Cloud Company Limited. Trusted travel-tech solutions for global users and corporate clients.",
      url: "https://siamon.cloud/terms",
      image: "https://siamon.cloud/assets/logos/logo-white-online.png",
    },
    twitter: {
      card: "summary_large_image",
      title: "Terms of Use | Siam On Cloud",
      description:
        "Official Terms of Use for Siam On Cloud Company Limited. Trusted travel-tech solutions for global users and corporate clients.",
      image: "https://siamon.cloud/assets/logos/logo-white-online.png",
    },
  });

  useEffect(() => {
    document.body.style.scrollBehavior = "smooth";
    return () => {
      document.body.style.scrollBehavior = "";
    };
  }, []);

  return (
    <main
      className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
      aria-label="Terms of Use"
    >
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        {/* Hero / Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-cyan-700 dark:text-cyan-400 mb-2">
            Terms of Use
          </h1>
          <p className="text-lg sm:text-xl font-medium text-neutral-700 dark:text-neutral-200 mb-2">
            Please review these Terms of Use carefully before using Siam On
            Cloud’s travel and technology services. By accessing our website or
            services, you agree to these terms.
          </p>
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            Last updated: {LAST_UPDATED}
          </div>
        </header>

        {/* Table of Contents */}
        <nav
          className="mb-10 border rounded-lg bg-white/70 dark:bg-neutral-800/70 p-4 shadow-sm"
          aria-label="Table of Contents"
        >
          <h2 className="text-base font-semibold text-cyan-700 dark:text-cyan-300 mb-2">
            Table of Contents
          </h2>
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  type="button"
                  className="text-cyan-700 dark:text-cyan-300 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded transition"
                  onClick={() => scrollToSection(section.id)}
                  aria-label={`Jump to ${section.title}`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal Sections */}
        <section id="acceptance" className="mb-8">
          <h2 className="text-xl font-bold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the services provided by Siam On Cloud Company
            Limited (“Siam On Cloud”, “we”, “us”, or “our”), including our
            website at{" "}
            <a
              href="https://siamon.cloud"
              className="text-cyan-700 dark:text-cyan-300 underline focus:outline-none focus:ring-2 focus:ring-cyan-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              siamon.cloud
            </a>
            , you agree to be bound by these Terms of Use and all applicable
            laws and regulations. If you do not agree, you may not use our
            services.
          </p>
        </section>

        <section id="services" className="mb-8">
          <h2 className="text-xl font-bold mb-2">2. Description of Services</h2>
          <p>
            Siam On Cloud provides travel and technology services, including
            flight bookings, travel planning, visa assistance, global tours,
            corporate travel management, and AI-powered travel assistant tools.
            Our services are designed for both individual and corporate clients
            worldwide.
          </p>
        </section>

        <section id="eligibility" className="mb-8">
          <h2 className="text-xl font-bold mb-2">3. Eligibility</h2>
          <p>
            You must be at least 18 years old and have the legal capacity to
            enter into contracts to use our services. By using our platform, you
            represent and warrant that you meet these requirements.
          </p>
        </section>

        <section id="responsibilities" className="mb-8">
          <h2 className="text-xl font-bold mb-2">4. User Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account. You agree to provide accurate information and to comply
            with all applicable laws and regulations.
          </p>
        </section>

        <section id="thirdparty" className="mb-8">
          <h2 className="text-xl font-bold mb-2">
            5. Booking and Third-Party Services
          </h2>
          <p>
            Our platform may facilitate bookings and services provided by
            third-party airlines, hotels, tour operators, and other partners.
            Siam On Cloud is not responsible for the content, policies, or
            practices of third-party providers. All bookings are subject to the
            terms and conditions of the respective third parties.
          </p>
        </section>

        <section id="payments" className="mb-8">
          <h2 className="text-xl font-bold mb-2">6. Payments and Pricing</h2>
          <p>
            Prices for services are displayed in Thai Baht or other currencies
            as indicated. All payments must be made using approved payment
            methods. Prices and availability are subject to change without
            notice. Siam On Cloud does not guarantee the accuracy of third-party
            pricing or availability.
          </p>
        </section>

        <section id="cancellations" className="mb-8">
          <h2 className="text-xl font-bold mb-2">
            7. Cancellations and Refunds
          </h2>
          <p>
            Cancellation and refund policies vary depending on the service and
            third-party provider. Please review the specific terms for each
            booking. Siam On Cloud will assist with cancellations and refunds
            where possible, but cannot guarantee outcomes for third-party
            services.
          </p>
        </section>

        <section id="ip" className="mb-8">
          <h2 className="text-xl font-bold mb-2">8. Intellectual Property</h2>
          <p>
            All content, trademarks, logos, and intellectual property on the
            Siam On Cloud platform are owned by Siam On Cloud Company Limited or
            its licensors. You may not copy, reproduce, or use any content
            without prior written permission.
          </p>
        </section>

        <section id="ai" className="mb-8">
          <h2 className="text-xl font-bold mb-2">
            9. AI and Automated Tools Disclaimer
          </h2>
          <p>
            Siam On Cloud’s AI travel assistant tools provide information and
            support for your convenience. Responses are generated by artificial
            intelligence and may not always be accurate, complete, or
            up-to-date. Do not rely solely on AI for critical decisions. Human
            review is recommended for important matters.
          </p>
        </section>

        <section id="liability" className="mb-8">
          <h2 className="text-xl font-bold mb-2">
            10. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Siam On Cloud Company
            Limited is not liable for any indirect, incidental, special, or
            consequential damages arising from your use of our platform or
            services. Our total liability for any claim shall not exceed the
            amount paid by you for the relevant service.
          </p>
        </section>

        <section id="indemnification" className="mb-8">
          <h2 className="text-xl font-bold mb-2">11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Siam On Cloud Company
            Limited, its affiliates, officers, employees, and agents from any
            claims, damages, or expenses arising from your use of the platform
            or violation of these Terms of Use.
          </p>
        </section>

        <section id="privacy" className="mb-8">
          <h2 className="text-xl font-bold mb-2">12. Privacy Reference</h2>
          <p>
            Your privacy is important to us. Please review our{" "}
            <a
              href="/en/privacy"
              className="text-cyan-700 dark:text-cyan-300 underline focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              Privacy Policy
            </a>{" "}
            for details on how we collect, use, and protect your personal
            information.
          </p>
        </section>

        <section id="availability" className="mb-8">
          <h2 className="text-xl font-bold mb-2">13. Service Availability</h2>
          <p>
            Siam On Cloud strives to provide reliable and uninterrupted
            services. However, we do not guarantee continuous availability and
            may suspend or limit access for maintenance, upgrades, or unforeseen
            circumstances.
          </p>
        </section>

        <section id="modifications" className="mb-8">
          <h2 className="text-xl font-bold mb-2">
            14. Modifications to Services
          </h2>
          <p>
            We reserve the right to modify, update, or discontinue any part of
            our services or these Terms of Use at any time. Changes will be
            posted on our website and are effective immediately upon posting.
          </p>
        </section>

        <section id="termination" className="mb-8">
          <h2 className="text-xl font-bold mb-2">15. Termination</h2>
          <p>
            Siam On Cloud may suspend or terminate your access to the platform
            at our discretion, without notice, for any violation of these terms
            or applicable laws.
          </p>
        </section>

        <section id="law" className="mb-8">
          <h2 className="text-xl font-bold mb-2">16. Governing Law</h2>
          <p>
            These Terms of Use are governed by the laws of the Kingdom of
            Thailand. Any disputes shall be resolved in the courts of Thailand.
          </p>
        </section>

        <section id="contact" className="mb-8">
          <h2 className="text-xl font-bold mb-2">17. Contact Information</h2>
          <p>
            For questions or concerns about these Terms of Use, please contact
            us:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:info@siamon.cloud"
                className="text-cyan-700 dark:text-cyan-300 underline focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                info@siamon.cloud
              </a>
            </li>
            <li>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+66871125025"
                className="text-cyan-700 dark:text-cyan-300 underline focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                +66 87 112 5025
              </a>
            </li>
            <li>
              <span className="font-semibold">Address:</span> Bangkok, Thailand
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
