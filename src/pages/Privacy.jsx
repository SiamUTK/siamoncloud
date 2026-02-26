import { Link } from "react-router-dom";
import { Facebook, Linkedin, Menu, Sparkles, Twitter } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";

function Privacy() {
  usePageMeta({
    title: "Siam On Cloud | Privacy Policy",
    description:
      "Official Privacy Policy for Siam On Cloud travel and technology services.",
  });

  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth bg-white font-sans text-slate-800">
      <nav
        className="fixed z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md"
        aria-label="Main Navigation"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <Link
            to="/"
            className="flex cursor-pointer items-center gap-2 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            aria-label="Siam On Cloud Home"
          >
            <img
              src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/logos/logo-white-online.png"
              alt="Siam On Cloud Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-4 lg:gap-8">
            <div
              className="hidden gap-6 text-sm font-medium text-slate-600 md:flex"
              role="menubar"
            >
              <Link
                to="/"
                className="rounded px-1 transition-colors hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="rounded px-1 transition-colors hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
              >
                About
              </Link>
              <Link
                to="/services"
                className="rounded px-1 transition-colors hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="rounded px-1 transition-colors hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
              >
                Contact
              </Link>
              <Link
                to="/terms"
                className="rounded px-1 transition-colors hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
              >
                Terms of Use
              </Link>
              <Link
                to="/privacy"
                className="rounded px-1 font-bold text-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
                aria-current="page"
              >
                Privacy Policy
              </Link>
            </div>

            <button
              className="rounded p-1 text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 md:hidden"
              aria-label="Open mobile menu"
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section
          className="relative overflow-hidden bg-[#0A2540] pb-20 pt-32 lg:pb-28 lg:pt-44"
          aria-label="Privacy Policy Hero"
        >
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 to-white"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur-md">
              <Sparkles
                size={16}
                className="text-cyan-400"
                aria-hidden="true"
              />
              Legal Information
            </div>
            <h1 className="mb-6 text-5xl font-black leading-tight text-[#0A2540] lg:text-7xl">
              Privacy Policy
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">
              Your privacy and data protection are important to Siam On Cloud.
            </p>
          </div>
        </section>

        <section
          className="bg-white py-20"
          aria-labelledby="privacy-content-heading"
        >
          <div className="mx-auto max-w-4xl px-4">
            <h2 id="privacy-content-heading" className="sr-only">
              Privacy Policy Content
            </h2>

            <article className="space-y-12 text-slate-600">
              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Introduction
                </h2>
                <p className="leading-relaxed">
                  Siam On Cloud Co., Ltd. is committed to protecting your
                  personal information and maintaining transparency in how we
                  collect, use, and protect data across our travel and
                  technology services.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Information We Collect
                </h2>
                <p className="leading-relaxed">
                  We may collect information directly from you, automatically
                  through platform usage, and from trusted service partners to
                  provide our services effectively.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
                  <li>
                    Identity and contact details such as name, email, and phone
                    number.
                  </li>
                  <li>
                    Booking, transaction, and service interaction records.
                  </li>
                  <li>
                    Technical data such as IP address, browser type, and device
                    metadata.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  How We Use Information
                </h2>
                <p className="leading-relaxed">
                  We use collected information to deliver and improve services,
                  process transactions, support customer requests, maintain
                  security, and comply with legal obligations.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Cookies and Tracking Technologies
                </h2>
                <p className="leading-relaxed">
                  We use cookies and similar technologies to enhance user
                  experience, analyze platform performance, and support
                  essential service functionality.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Data Sharing and Disclosure
                </h2>
                <p className="leading-relaxed">
                  We only share data with authorized partners, suppliers, and
                  service providers when necessary for service delivery,
                  regulatory compliance, or protection of legal rights.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Data Security
                </h2>
                <p className="leading-relaxed">
                  We implement reasonable administrative, technical, and
                  organizational safeguards to protect your information against
                  unauthorized access, loss, misuse, or alteration.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Data Retention
                </h2>
                <p className="leading-relaxed">
                  Personal data is retained only as long as required for
                  operational, legal, contractual, and compliance purposes, then
                  securely deleted or anonymized.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Your Rights and Choices
                </h2>
                <p className="leading-relaxed">
                  Subject to applicable laws, you may request access,
                  correction, deletion, restriction, or objection to certain
                  processing of your personal data.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  International Transfers (if applicable)
                </h2>
                <p className="leading-relaxed">
                  Where cross-border data transfers are necessary, we apply
                  appropriate safeguards and contractual protections to maintain
                  data security and legal compliance.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Children&apos;s Privacy
                </h2>
                <p className="leading-relaxed">
                  Our services are not intended for children without lawful
                  authorization. We do not knowingly collect personal data from
                  children in violation of applicable law.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Changes to This Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy periodically to reflect
                  legal, operational, or technical changes. Updated versions
                  become effective when published on this page.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Contact Information
                </h2>
                <p className="leading-relaxed">
                  For privacy-related questions or data requests, please contact
                  Siam On Cloud through the details below.
                </p>
              </section>
            </article>

            <section className="mt-14" aria-label="Company Contact Card">
              <div className="flex flex-col gap-6 rounded-[2.5rem] border border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 p-8 shadow-xl md:flex-row md:items-center md:justify-between md:p-10">
                <div>
                  <h3 className="text-2xl font-bold text-[#0A2540]">
                    Siam On Cloud Co., Ltd.
                  </h3>
                  <p className="mt-3 text-slate-700">
                    Email: info@siamon.cloud
                  </p>
                  <p className="mt-1 text-slate-700">Phone: +66 99 000 9588</p>
                  <p className="mt-1 text-slate-700">Website: siamon.cloud</p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0A2540] to-[#06B6D4] px-7 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
                >
                  Contact Us
                </Link>
              </div>
            </section>
          </div>
        </section>
      </main>

      <footer
        className="bg-slate-900 pb-10 pt-20 text-slate-400"
        role="contentinfo"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 grid gap-20 lg:grid-cols-2">
            <div>
              <div className="mb-8 flex items-center gap-2">
                <img
                  src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/logos/logo-white-online2.png"
                  alt="Siam On Cloud Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="mb-8 max-w-md leading-relaxed">
                SIAM ON CLOUD CO., LTD. Elevating Your Journey, Amplify Success
                with modern technology and global expertise.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/siamoncloud"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Visit our LinkedIn"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Visit our Twitter"
                >
                  <Twitter size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://www.facebook.com/siamoncloud"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Visit our Facebook"
                >
                  <Facebook size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="col-span-1">
                <h4 className="mb-6 font-bold text-white">Company</h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      to="/"
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <h4 className="mb-6 font-bold text-white">Legal</h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      to="/terms"
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="text-cyan-400 focus:outline-none focus:underline"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="mb-6 font-bold text-white">Headquarters</h4>
                <address className="not-italic text-sm leading-relaxed">
                  319 Chamchuri Square Building, 24th Floor, Phayathai Road,
                  Pathumwan District, Bangkok 10330, Thailand
                </address>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 text-xs font-medium md:flex-row">
            <p>
              © {new Date().getFullYear()} SIAM ON CLOUD CO., LTD. All rights
              reserved.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="transition-colors hover:text-white focus:outline-none focus:underline"
              >
                Cloud Solution
              </a>
              <a
                href="#"
                className="transition-colors hover:text-white focus:outline-none focus:underline"
              >
                Airline Partner
              </a>
              <a
                href="#"
                className="transition-colors hover:text-white focus:outline-none focus:underline"
              >
                Corporate Travel
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Privacy;
