import { Link } from "react-router-dom";
import { Facebook, Linkedin, Menu, Sparkles, Twitter } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";

function Terms() {
  usePageMeta({
    title: "Siam On Cloud | Terms of Use",
    description:
      "Official Terms of Use for Siam On Cloud travel and technology services.",
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
            <div className="flex h-8 items-center sm:h-9 lg:h-11">
              <img
                src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/logos/logo-web.png"
                alt="Siam On Cloud Logo"
                width="320"
                height="80"
                className="block h-auto max-h-full w-auto max-w-full object-contain"
                loading="eager"
              />
            </div>
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
                className="rounded px-1 font-bold text-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
                aria-current="page"
              >
                Terms of Use
              </Link>
              <Link
                to="/privacy"
                className="rounded px-1 transition-colors hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
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
          aria-label="Terms of Use Hero"
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
              Terms of Use
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">
              Please read these terms carefully before using Siam On Cloud
              services.
            </p>
          </div>
        </section>

        <section
          className="bg-white py-20"
          aria-labelledby="terms-content-heading"
        >
          <div className="mx-auto max-w-4xl px-4">
            <h2 id="terms-content-heading" className="sr-only">
              Terms of Use Content
            </h2>

            <article className="space-y-12 text-slate-600">
              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Introduction
                </h2>
                <p className="leading-relaxed">
                  These Terms of Use govern your access to and use of Siam On
                  Cloud Co., Ltd. websites, services, platforms, and related
                  technology solutions. By accessing our services, you agree to
                  comply with these terms and all applicable laws and
                  regulations.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Acceptance of Terms
                </h2>
                <p className="leading-relaxed">
                  By using Siam On Cloud services, you confirm that you have
                  read, understood, and agreed to these Terms of Use. If you do
                  not agree, you must discontinue use of our services.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Use of Services
                </h2>
                <p className="leading-relaxed">
                  Our services are provided for lawful business and personal
                  travel-related purposes. You agree not to misuse, interfere
                  with, or attempt unauthorized access to any part of our
                  systems, data, or infrastructure.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
                  <li>
                    Use accurate and up-to-date information for all bookings and
                    account details.
                  </li>
                  <li>
                    Comply with all service-specific instructions and booking
                    policies.
                  </li>
                  <li>
                    Respect security, integrity, and availability of all Siam On
                    Cloud platforms.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  User Responsibilities
                </h2>
                <p className="leading-relaxed">
                  You are responsible for your account credentials, submitted
                  information, and all activities conducted through your access.
                  You agree to notify us promptly of any unauthorized use or
                  suspected security incident.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Intellectual Property
                </h2>
                <p className="leading-relaxed">
                  All content, trademarks, software, designs, and service
                  elements on Siam On Cloud platforms are owned by or licensed
                  to Siam On Cloud Co., Ltd. You may not reproduce, distribute,
                  modify, or create derivative works without prior written
                  permission.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Limitation of Liability
                </h2>
                <p className="leading-relaxed">
                  Siam On Cloud provides services on an as-available basis and
                  makes reasonable efforts to maintain accuracy and uptime. To
                  the maximum extent permitted by law, we are not liable for
                  indirect, incidental, special, or consequential damages
                  arising from use of our services.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Privacy Reference
                </h2>
                <p className="leading-relaxed">
                  Your use of our services is also subject to our Privacy
                  Policy, which explains how we collect, process, store, and
                  protect your personal information.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Modifications to Terms
                </h2>
                <p className="leading-relaxed">
                  We may revise these Terms of Use from time to time to reflect
                  business, legal, or technical updates. Updated terms become
                  effective when published on this page.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Governing Law
                </h2>
                <p className="leading-relaxed">
                  These terms are governed by and construed in accordance with
                  the laws of Thailand, without regard to conflict of law
                  principles.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  Contact Information
                </h2>
                <p className="leading-relaxed">
                  For legal inquiries regarding these terms, please contact Siam
                  On Cloud using the details below.
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
                <div className="flex h-8 items-center sm:h-9 lg:h-10">
                  <img
                    src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/logos/logo-white-web.png"
                    alt="Siam On Cloud Logo"
                    width="320"
                    height="80"
                    className="block h-auto max-h-full w-auto max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
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
                      className="text-cyan-400 focus:outline-none focus:underline"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
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

export default Terms;
