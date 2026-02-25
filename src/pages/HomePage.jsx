import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

function HomePage() {
  const [showAiMessage, setShowAiMessage] = useState(false);

  usePageMeta({
    title: "Siam On Cloud | Seamless Business and Travel Solutions",
    description:
      "Siam On Cloud offers seamless business and travel solutions. Meet N' Bindee, your AI-powered travel assistant.",
  });

  useEffect(() => {
    if (!showAiMessage) {
      return undefined;
    }

    const timerId = window.setTimeout(() => {
      setShowAiMessage(false);
    }, 5000);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [showAiMessage]);

  const startAiChat = () => {
    setShowAiMessage(true);
  };

  const closeAiChat = () => {
    setShowAiMessage(false);
  };

  return (
    <div className="bg-stars relative min-h-screen antialiased bg-white selection:bg-blue-500 selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-blue-50 via-transparent to-transparent opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-22 pt-8 sm:px-11">
        <nav className="mb-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex cursor-pointer items-center gap-3 transition-opacity hover:opacity-80"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              <i className="fa-solid fa-cloud text-xl text-white" />
            </div>
            <div className="text-xl font-bold tracking-wide text-gray-900">
              Siam<span className="text-gradient">On</span>Cloud
            </div>
          </Link>

          <div className="hidden gap-8 text-sm font-medium text-gray-600 md:flex">
            <a href="#" className="transition-colors hover:text-blue-600">
              Home
            </a>
            <a
              href="#services"
              className="transition-colors hover:text-blue-600"
            >
              Services
            </a>
            <a href="#" className="transition-colors hover:text-blue-600">
              Corporate
            </a>
            <Link
              to="/contact"
              className="transition-colors hover:text-blue-600"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="glass-panel cursor-pointer px-3 py-1.5 text-xs font-semibold">
              EN | TH
            </div>
          </div>
        </nav>

        <div className="mb-22 flex flex-col-reverse items-center justify-between gap-11 lg:flex-row">
          <div className="z-20 w-full text-center lg:w-3/5 lg:text-left">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Welcome to <span className="text-gradient">Smarter Travel</span>
              <br />
              with Siam On Cloud
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-lg text-gray-600 lg:mx-0">
              N&apos; Bindee, your AI-powered travel assistant, here to make
              your trips easier, seamless, and more enjoyable for your business
              or personal journey.
            </p>

            <div className="mb-8 flex max-w-xl flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <div className="relative flex-grow">
                <i className="fa-regular fa-envelope absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="glass-input w-full rounded-full py-4 pl-11 pr-6 text-sm transition-all"
                />
              </div>
              <button
                onClick={startAiChat}
                className="btn-glow flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-8 py-4 font-semibold text-white"
              >
                Plan Your Trip{" "}
                <i className="fa-solid fa-chevron-right text-xs" />
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-700 lg:justify-start">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-paper-plane text-blue-600" /> Visa
                Assistance
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-earth-asia text-blue-600" /> Global
                Tours
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-suitcase-rolling text-blue-600" />
                Booking &amp; Management
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[400px] w-full justify-center lg:w-2/5">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-400/10 blur-[80px]" />

            <div className="float-anim relative z-10 mt-11 flex flex-col items-center justify-center">
              <img
                src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/mascot/binnai-phone.png"
                alt="N' Bindee - AI Travel Assistant"
                className="relative z-10 h-[350px] w-auto object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              />

              <div className="absolute -bottom-4 z-20 rounded-full border border-blue-500 bg-white px-4 py-1.5 text-xs font-bold text-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                N&apos; Bindee Online
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel mb-22 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 px-8 py-6 transition-all duration-500 hover:opacity-100">
          <div className="flex items-center gap-2 text-lg font-bold text-gray-700">
            <i className="fa-solid fa-database text-green-600" /> supabase
          </div>
          <div className="flex items-center gap-2 text-lg font-bold text-gray-700">
            <i className="fa-solid fa-robot text-teal-600" /> ChatGPT
          </div>
          <div className="flex items-center gap-2 text-lg font-bold text-gray-700">
            <i className="fa-brands fa-stripe text-2xl text-indigo-600" />
          </div>
          <div className="flex items-center gap-2 text-lg font-bold text-gray-700">
            <i className="fa-solid fa-brands fa-airbnb text-red-600" />
            airasia
          </div>
          <div className="flex items-center gap-2 text-lg font-bold text-gray-700">
            <i className="fa-solid fa-bed text-blue-600" /> agoda
          </div>
          <div className="flex items-center gap-2 text-lg font-bold text-gray-700">
            <i className="fa-solid fa-plane-departure text-amber-600" />
            Expedia
          </div>
        </div>

        <div id="services" className="mb-16 scroll-mt-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Services to Make Your{" "}
            <span className="text-gradient">Journey Seamless</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Siam On Cloud provides comprehensive corporate travel management.
            Let our AI and expert team handle the details so you can focus on
            your business.
          </p>
        </div>

        <div className="mb-22 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="glass-panel group relative overflow-hidden p-8">
            <div className="absolute right-0 top-0 -mr-10 -mt-10 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl transition-all group-hover:bg-blue-500/10" />
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 shadow-lg">
              <i className="fa-solid fa-passport text-xl text-blue-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Visa Assistance
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              Expert guidance for all your visa applications. Fast, reliable,
              and stress-free document preparation for global travel.
            </p>
            <div className="mt-auto flex items-center justify-between">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                <i className="fa-solid fa-fire mr-1" /> Popular
              </span>
              <button className="text-gray-300 transition-colors hover:text-white">
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>

          <div className="glass-panel group relative overflow-hidden p-8">
            <div className="absolute right-0 top-0 -mr-10 -mt-10 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl transition-all group-hover:bg-blue-500/10" />
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 shadow-lg">
              <i className="fa-solid fa-map-location-dot text-xl text-blue-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Tour Packages
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              Curated experiences for individuals and groups. Tailored
              itineraries designed to meet your specific preferences and budget.
            </p>
            <div className="mt-auto flex items-center justify-between">
              <span className="rounded-full bg-gray-800 px-3 py-1 text-xs font-semibold text-gray-300">
                50+ Dests
              </span>
              <button className="text-gray-300 transition-colors hover:text-white">
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>

          <div className="glass-panel group relative overflow-hidden p-8">
            <div className="absolute right-0 top-0 -mr-10 -mt-10 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl transition-all group-hover:bg-blue-500/10" />
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 shadow-lg">
              <i className="fa-solid fa-plane-up text-xl text-blue-600" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Flight Booking
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              Advanced seat reservation systems for smooth and accurate
              bookings. BKK AIR handles single to complex multi-city routes.
            </p>
            <div className="mt-auto flex items-center justify-between">
              <span className="rounded-full bg-gray-800 px-3 py-1 text-xs font-semibold text-gray-300">
                24/7 Support
              </span>
              <button className="text-gray-300 transition-colors hover:text-white">
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>

        <div className="glass-panel relative mb-22 flex flex-col items-center gap-11 overflow-hidden p-8 md:flex-row md:p-11">
          <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-200/5 blur-[100px]" />

          <div className="z-10 w-full md:w-1/2">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Why Choose <span className="text-gradient">Siam On Cloud?</span>
            </h3>

            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check mt-1 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Real-time flight search &amp; booking
                  </h4>
                  <p className="text-sm text-gray-600">
                    Get exactly what you need with syntax like YY001 BKK-JFK.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check mt-1 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Over 20 Years Experience
                  </h4>
                  <p className="text-sm text-gray-600">
                    Trusted outsourcing provider in the heart of Bangkok.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check mt-1 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Personalized AI Assistance
                  </h4>
                  <p className="text-sm text-gray-600">
                    N&apos; Bindee handles your queries 24/7 with a friendly
                    touch.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-r-xl rounded-l-none border-l-4 border-l-blue-500 bg-blue-50/30 p-4">
              <p className="mb-2 text-sm italic text-gray-700">
                &quot;Our business travel experience with N&apos; Bindee was
                seamless. The flight options were spot on, and visa stress was
                zero. Highly recommended!&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-300">
                  <i className="fa-solid fa-user text-gray-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">
                    Siam Uttrakun
                  </p>
                  <p className="text-[10px] text-blue-600">Corporate Client</p>
                </div>
              </div>
            </div>
          </div>

          <div className="z-10 flex w-full justify-center md:w-1/2">
            <div className="relative h-[580px] w-[280px] rounded-[40px] border-8 border-gray-300 bg-white p-4 shadow-2xl">
              <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 transform rounded-b-2xl bg-gray-300" />

              <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[24px] bg-[#f8fafc]">
                <div className="flex items-center gap-3 border-b bg-white p-4 pt-8 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <i className="fa-solid fa-robot text-xs text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold leading-none text-gray-800">
                      N&apos; Bindee
                    </h4>
                    <span className="text-[10px] font-semibold text-green-500">
                      • Online
                    </span>
                  </div>
                </div>

                <div className="flex-grow space-y-4 overflow-y-auto bg-gray-50 p-4 pb-20">
                  <div className="flex gap-2">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <i className="fa-solid fa-robot text-[10px] text-blue-600" />
                    </div>
                    <div className="rounded-2xl rounded-tl-none border bg-white p-3 text-xs text-gray-700 shadow-sm">
                      Sawasdee khrab! I&apos;m N&apos; Bindee. Where are we
                      flying to today?
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <div className="rounded-2xl rounded-tr-none bg-blue-500 p-3 text-xs font-medium text-white shadow-sm">
                      I need a flight to NYC next month.
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <i className="fa-solid fa-robot text-[10px] text-blue-600" />
                    </div>
                    <div className="w-full rounded-2xl rounded-tl-none border bg-white p-3 text-xs text-gray-700 shadow-sm">
                      Got it! Here is the best option via Korean Air:
                      <br />
                      <br />
                      <span className="mt-1 block rounded bg-gray-100 p-1 font-mono text-[10px] text-gray-500">
                        1 KE081 18MAY ICN-JFK 10:00
                      </span>
                      <button className="mt-2 w-full rounded-lg bg-gray-900 py-1.5 font-semibold text-white transition-colors hover:bg-gray-700">
                        Book Now 53,110 THB
                      </button>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full border-t bg-white p-3">
                  <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-grow bg-transparent text-xs text-gray-800 outline-none"
                    />
                    <i className="fa-solid fa-paper-plane cursor-pointer text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pb-11 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Ready to <span className="text-gradient">Transform</span> Your
            Travel Experience?
          </h2>
          <button className="btn-glow inline-flex items-center gap-3 rounded-full px-10 py-4 text-lg font-bold text-white">
            Book with N&apos; Bindee <i className="fa-solid fa-rocket" />
          </button>
        </div>
      </div>

      <footer className="relative z-10 w-full border-t border-gray-200 bg-gray-900 pb-8 pt-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-11">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-11 lg:gap-11">
            <div className="flex flex-col items-start lg:col-span-4">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-400 to-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  <i className="fa-solid fa-cloud text-xl text-white" />
                </div>
                <div className="text-xl font-bold tracking-wide text-white">
                  Siam<span className="text-gradient">On</span>Cloud
                </div>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-gray-300">
                Business Meets Travel | Elevate Your Journey, Amplify Success.
                We are a trusted outsourcing provider with over 20 years of
                expertise in travel management and tourism.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="glass-panel group flex h-10 w-10 items-center justify-center rounded-full text-gray-300 transition-colors hover:text-blue-400"
                >
                  <i className="fa-brands fa-facebook-f transition-transform group-hover:scale-110" />
                </a>
                <a
                  href="#"
                  className="glass-panel group flex h-10 w-10 items-center justify-center rounded-full text-gray-300 transition-colors hover:text-blue-400"
                >
                  <i className="fa-brands fa-linkedin-in transition-transform group-hover:scale-110" />
                </a>
                <a
                  href="#"
                  className="glass-panel group flex h-10 w-10 items-center justify-center rounded-full text-gray-300 transition-colors hover:text-blue-400"
                >
                  <i className="fa-brands fa-x-twitter transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="relative mb-6 inline-block text-lg font-bold text-white">
                Services
                <span className="absolute -bottom-2 left-0 h-0.5 w-1/2 rounded-full bg-blue-400" />
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 transition-colors hover:text-blue-400"
                  >
                    <i className="fa-solid fa-angle-right text-xs" /> Airline
                    Booking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 transition-colors hover:text-blue-400"
                  >
                    <i className="fa-solid fa-angle-right text-xs" /> Tour
                    Operator Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 transition-colors hover:text-blue-400"
                  >
                    <i className="fa-solid fa-angle-right text-xs" /> Visa
                    Assistance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 transition-colors hover:text-blue-400"
                  >
                    <i className="fa-solid fa-angle-right text-xs" />
                    Technology Solutions
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="relative mb-6 inline-block text-lg font-bold text-white">
                Quick Links
                <span className="absolute -bottom-2 left-0 h-0.5 w-1/2 rounded-full bg-blue-400" />
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <Link
                    to="/about"
                    className="flex items-center gap-2 transition-colors hover:text-blue-400"
                  >
                    <i className="fa-solid fa-angle-right text-xs" /> About Us
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 transition-colors hover:text-blue-400"
                  >
                    <i className="fa-solid fa-angle-right text-xs" />
                    Corporate Management
                  </a>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="flex items-center gap-2 transition-colors hover:text-blue-400"
                  >
                    <i className="fa-solid fa-angle-right text-xs" /> Privacy
                    Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="flex items-center gap-2 transition-colors hover:text-blue-400"
                  >
                    <i className="fa-solid fa-angle-right text-xs" /> Terms
                    &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="relative mb-6 inline-block text-lg font-bold text-white">
                Contact Us
                <span className="absolute -bottom-2 left-0 h-0.5 w-1/2 rounded-full bg-blue-400" />
              </h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-location-dot mt-1 w-4 text-center text-blue-400" />
                  <span className="leading-relaxed">
                    Siam On Cloud Co., Ltd.
                    <br />
                    319 Chamchuri Square, 24th Fl.,
                    <br />
                    Phayathai Rd., Pathumwan,
                    <br />
                    Bangkok 10330, Thailand
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-phone w-4 text-center text-blue-400" />
                  <div>
                    <a
                      href="tel:+66990009588"
                      className="block transition-colors hover:text-white"
                    >
                      +66 (0)99-000-9588
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-envelope w-4 text-center text-blue-400" />
                  <a
                    href="mailto:info@siamon.cloud"
                    className="transition-colors hover:text-white"
                  >
                    info@siamon.cloud
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 md:flex-row">
            <p className="text-center text-xs text-gray-400 md:text-left">
              © 2026 Siam On Cloud Co., Ltd. (Reg. No. 0625561000033). All
              rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>
                Designed with{" "}
                <i className="fa-solid fa-heart mx-1 text-red-500" /> by
              </span>
              <span className="font-semibold tracking-wider text-blue-400">
                AI
              </span>
            </div>
          </div>
        </div>
      </footer>

      <div
        className={`fixed right-4 top-4 z-50 transform transition-transform duration-300 ${
          showAiMessage ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="glass-panel flex items-center gap-4 border-l-4 border-l-blue-500 bg-white p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <i className="fa-solid fa-robot text-blue-600" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900">
              N&apos; Bindee Says:
            </h4>
            <p className="text-xs text-gray-600">
              Sawasdee khrab Mister Siam! Our AI is warming up its engines. 🚀
            </p>
          </div>
          <button
            onClick={closeAiChat}
            className="ml-2 text-gray-400 hover:text-gray-700"
            aria-label="Close AI message"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
