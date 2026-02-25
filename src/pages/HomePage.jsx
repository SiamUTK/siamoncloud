import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  HeartHandshake,
  Code2,
  Bot,
  Shield,
  Globe,
  Zap,
  Clock,
  Users,
  Star,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  Headphones,
  TrendingUp,
  Award,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  usePageMeta({
    title: "Siam On Cloud | AI-Powered Travel & Technology Solutions",
    description:
      "Transform your travel business with our comprehensive solutions: Airline ticketing, LGBTQ+ travel experiences, digital transformation, and AI automation. 20+ years of expertise.",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                <Plane size={24} />
              </div>
              <span className="font-bold text-xl">
                <span className="text-cyan-400">SIAM ON </span>
                <span className="text-cyan-500">CLOUD</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 text-slate-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-3">
            <Link
              to="/"
              className="block py-2 text-slate-300 hover:text-cyan-400 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-slate-300 hover:text-cyan-400 font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block py-2 text-slate-300 hover:text-cyan-400 font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-slate-300 hover:text-cyan-400 font-medium"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block text-center px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium"
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950 text-cyan-300 text-sm font-semibold mb-6">
              <Sparkles size={16} />
              AI-Powered Travel Technology
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 leading-tight">
              Transform Your Travel Business with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Smart Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed">
              From AI-powered booking systems to LGBTQ+ travel experiences. We
              provide comprehensive solutions for modern travel businesses with
              20+ years of expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-xl transform hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:border-cyan-500 hover:text-cyan-600 transition-all inline-flex items-center justify-center gap-2"
              >
                <Headphones size={20} />
                Talk to Expert
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            <div className="text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl font-bold text-cyan-600 mb-2">20+</div>
              <div className="text-slate-600 text-sm font-medium">
                Years Experience
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl font-bold text-cyan-600 mb-2">10K+</div>
              <div className="text-slate-600 text-sm font-medium">
                Happy Clients
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl font-bold text-cyan-600 mb-2">50K+</div>
              <div className="text-slate-600 text-sm font-medium">
                Bookings Processed
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl font-bold text-cyan-600 mb-2">24/7</div>
              <div className="text-slate-600 text-sm font-medium">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to power your travel business
              growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1: Air Ticketing */}
            <div className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform">
                <Plane size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">
                Air Ticketing
              </h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                IATA-certified booking platform (BKK AIR) for domestic and
                international flights with real-time inventory.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-cyan-400 mt-0.5 flex-shrink-0"
                  />
                  24/7 Ticketing Support
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-cyan-400 mt-0.5 flex-shrink-0"
                  />
                  Group Booking Discounts
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-cyan-400 mt-0.5 flex-shrink-0"
                  />
                  Visa Assistance
                </li>
              </ul>
            </div>

            {/* Service 2: LGBTQ+ Travel */}
            <div className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-pink-500 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform">
                <HeartHandshake size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">
                LGBTQ+ Travel
              </h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                Curated experiences, tour packages, and lifestyle services
                (GayBKK) for the LGBTQ+ community worldwide.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-pink-400 mt-0.5 flex-shrink-0"
                  />
                  Personalized Itineraries
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-pink-400 mt-0.5 flex-shrink-0"
                  />
                  Safe & Inclusive Tours
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-pink-400 mt-0.5 flex-shrink-0"
                  />
                  Lifestyle Concierge
                </li>
              </ul>
            </div>

            {/* Service 3: Digital Solutions */}
            <div className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-violet-500 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform">
                <Code2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">
                Digital Solutions
              </h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                Custom software development and cloud infrastructure tailored
                for tourism and travel industry.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-violet-400 mt-0.5 flex-shrink-0"
                  />
                  SaaS Platform Development
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-violet-400 mt-0.5 flex-shrink-0"
                  />
                  System Integration
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-violet-400 mt-0.5 flex-shrink-0"
                  />
                  Cloud Migration
                </li>
              </ul>
            </div>

            {/* Service 4: AI & Automation */}
            <div className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform">
                <Bot size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-50 mb-3">
                AI & Automation
              </h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                Intelligent chatbots, workflow automation, and AI-driven
                analytics to scale operational efficiency.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-400 mt-0.5 flex-shrink-0"
                  />
                  Smart Customer Support
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-600 mt-0.5 flex-shrink-0"
                  />
                  Process Automation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-600 mt-0.5 flex-shrink-0"
                  />
                  Predictive Analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">
              Why Choose Siam On Cloud?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We combine deep industry expertise with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all bg-white">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                20+ Years Expertise
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Deep-rooted knowledge in travel, tourism, and technology
                management since 2003.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all bg-white">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Security First
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Enterprise-grade security protocols, GDPR compliant, and
                ISO-ready infrastructure.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all bg-white">
              <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Global Network
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Bangkok headquarters with international partnerships across
                Asia, Europe, and beyond.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all bg-white">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                24/7 Support
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Round-the-clock customer support with multilingual assistance
                and dedicated account managers.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all bg-white">
              <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Fast Implementation
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Quick onboarding and deployment. Get your systems up and running
                in days, not months.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all bg-white">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Scalable Growth
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Solutions that grow with your business. From startup to
                enterprise scale seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. All plans include
              24/7 support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="p-8 rounded-3xl border-2 border-slate-800 bg-slate-900 hover:border-cyan-500 hover:shadow-xl transition-all">
              <div className="text-sm font-bold text-cyan-400 uppercase tracking-wide mb-4">
                Starter
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-slate-50 mb-2">
                  $299
                  <span className="text-lg font-normal text-slate-400">
                    /month
                  </span>
                </div>
                <p className="text-slate-400 text-sm">
                  Perfect for small agencies
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2
                    size={20}
                    className="text-cyan-400 flex-shrink-0 mt-0.5"
                  />
                  <span>Up to 100 bookings/month</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2
                    size={20}
                    className="text-cyan-400 flex-shrink-0 mt-0.5"
                  />
                  <span>Basic AI chatbot integration</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2
                    size={20}
                    className="text-cyan-400 flex-shrink-0 mt-0.5"
                  />
                  <span>Email support (24h response)</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2
                    size={20}
                    className="text-cyan-400 flex-shrink-0 mt-0.5"
                  />
                  <span>Standard reporting dashboard</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2
                    size={20}
                    className="text-cyan-400 flex-shrink-0 mt-0.5"
                  />
                  <span>2 user accounts</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full text-center px-6 py-3 rounded-xl border-2 border-slate-700 text-slate-300 font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Plan (Most Popular) */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white relative hover:shadow-2xl hover:scale-105 transition-all">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-yellow-400 text-yellow-900 text-xs font-bold uppercase">
                Most Popular
              </div>
              <div className="text-sm font-bold uppercase tracking-wide mb-4 text-cyan-100">
                Professional
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  $799
                  <span className="text-lg font-normal text-cyan-100">
                    /month
                  </span>
                </div>
                <p className="text-cyan-100 text-sm">For growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Up to 500 bookings/month</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Advanced AI chatbot + voice support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Priority support (2h response)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Advanced analytics & insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>10 user accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>API access & webhooks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Custom branding</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full text-center px-6 py-3 rounded-xl bg-white text-cyan-600 font-semibold hover:bg-cyan-50 transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="p-8 rounded-3xl border-2 border-slate-200 bg-white hover:border-cyan-300 hover:shadow-xl transition-all">
              <div className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">
                Enterprise
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  Custom
                </div>
                <p className="text-slate-400 text-sm">
                  For large organizations
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2
                    size={20}
                    className="text-cyan-400 flex-shrink-0 mt-0.5"
                  />
                  <span>Unlimited bookings</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2
                    size={20}
                    className="text-cyan-600 flex-shrink-0 mt-0.5"
                  />
                  <span>White-label solution</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2
                    size={20}
                    className="text-cyan-600 flex-shrink-0 mt-0.5"
                  />
                  <span>Dedicated support team</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2
                    size={20}
                    className="text-cyan-600 flex-shrink-0 mt-0.5"
                  />
                  <span>Custom development included</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2
                    size={20}
                    className="text-cyan-600 flex-shrink-0 mt-0.5"
                  />
                  <span>Unlimited users</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2
                    size={20}
                    className="text-cyan-600 flex-shrink-0 mt-0.5"
                  />
                  <span>SLA guarantee 99.9%</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2
                    size={20}
                    className="text-cyan-600 flex-shrink-0 mt-0.5"
                  />
                  <span>On-premise deployment option</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="block w-full text-center px-6 py-3 rounded-xl border-2 border-slate-700 text-slate-300 font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Trusted by travel agencies and enterprises worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                &quot;Siam On Cloud transformed our booking process completely.
                The AI chatbot handles 80% of customer inquiries automatically.
                Our efficiency increased by 300%.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">
                  TL
                </div>
                <div>
                  <div className="font-bold text-slate-900">Thanida Lee</div>
                  <div className="text-sm text-slate-500">
                    CEO, Wanderlust Travel
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                &quot;The GayBKK platform is incredible! Finally, a travel
                service that understands our community&apos;s needs.
                Professional, safe, and beautifully designed.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold">
                  MC
                </div>
                <div>
                  <div className="font-bold text-slate-900">Michael Chen</div>
                  <div className="text-sm text-slate-500">Travel Blogger</div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                &quot;Outstanding technical support and custom development. They
                built our entire booking infrastructure in record time. Highly
                recommended!&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                  SK
                </div>
                <div>
                  <div className="font-bold text-slate-900">Sarah Kim</div>
                  <div className="text-sm text-slate-500">
                    CTO, TravelTech Inc.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services You Can Sell */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-violet-700 text-sm font-semibold mb-4">
              <Sparkles size={16} />
              Expand Your Revenue
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Additional Services & Products
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Diversify your offerings with these high-demand travel services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Hotel Booking Engine */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Hotel Booking Engine
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect to 800K+ hotels worldwide. Offer accommodations
                alongside flight bookings.
              </p>
            </div>

            {/* Travel Insurance */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Travel Insurance
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Partner with insurance providers. Earn commission on every
                policy sold through your platform.
              </p>
            </div>

            {/* Visa Services */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Visa Processing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Full-service visa application assistance for all destinations.
                Streamline the documentation process.
              </p>
            </div>

            {/* Airport Transfers */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <Plane size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Airport Transfers
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Private car, limousine, and VIP transfer services. Premium
                airport meet & greet options.
              </p>
            </div>

            {/* Tours & Activities */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Tours & Activities
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Curated local experiences, day tours, cooking classes, and
                cultural activities in Thailand.
              </p>
            </div>

            {/* Corporate Travel Management */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Corporate Travel
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                B2B solutions for corporate clients. Expense management, policy
                compliance, traveler tracking.
              </p>
            </div>

            {/* Destination Weddings */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                <HeartHandshake size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Destination Weddings
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Plan dream weddings in Thailand. Venue booking, guest
                coordination, and full event management.
              </p>
            </div>

            {/* Cruise Packages */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Cruise Packages
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Premium cruise bookings to Asia, Europe, and beyond. Exclusive
                deals with major cruise lines.
              </p>
            </div>

            {/* Travel SIM Cards & eSIM */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Travel SIM & eSIM
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Global connectivity solutions. Sell travel SIM cards and eSIM
                packages for international travelers.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition-all"
            >
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about our services
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What makes Siam On Cloud different from other travel platforms?",
                a: "We combine 20+ years of travel industry expertise with modern AI technology. Our solutions are built specifically for travel businesses, not generic SaaS tools. Plus, we offer 24/7 multilingual support and custom development capabilities.",
              },
              {
                q: "Can I integrate your booking system with my existing website?",
                a: "Yes! Our API-first architecture allows seamless integration with any website or mobile app. We provide comprehensive documentation, SDKs, and dedicated technical support for integration.",
              },
              {
                q: "What commission do you charge on bookings?",
                a: "We offer flexible pricing models. You can choose between a flat monthly subscription (no commission) or a pay-per-booking model starting at 2-5% depending on volume. Enterprise clients get custom pricing.",
              },
              {
                q: "Do you provide training for my team?",
                a: "Absolutely! All plans include comprehensive onboarding and training. Professional and Enterprise plans include on-site training options and ongoing education programs.",
              },
              {
                q: "Is there a contract commitment?",
                a: "Starter and Professional plans are month-to-month with no long-term commitment. Enterprise plans typically have annual agreements with flexible terms. You can cancel anytime with 30 days notice.",
              },
              {
                q: "Can you build custom features for my specific needs?",
                a: "Yes! Our Digital Solutions team specializes in custom development. From white-label booking portals to complex integrations, we can build exactly what your business needs.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-cyan-600 flex-shrink-0 transition-transform ${
                      activeFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Transform Your Travel Business?
              </h2>
              <p className="text-xl text-cyan-50 mb-8 max-w-2xl mx-auto">
                Join thousands of travel professionals who trust Siam On Cloud
                for their technology needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl bg-white text-cyan-600 font-semibold hover:bg-cyan-50 transition-all inline-flex items-center justify-center gap-2 shadow-xl"
                >
                  Schedule a Demo
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center text-white">
                  <Plane size={24} />
                </div>
                <span className="text-xl font-bold text-white">
                  SIAM ON CLOUD
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Elevating your journey with modern technology and global
                expertise.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-cyan-600 transition-colors"
                >
                  <Globe size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-cyan-600 transition-colors"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    BKK AIR Ticketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    GayBKK Travel
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Digital Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    AI Automation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>Bangkok, Thailand</li>
                <li>info@siamon.cloud</li>
                <li>+66-99-000-9588</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              © {new Date().getFullYear()} SIAM ON CLOUD CO., LTD. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-cyan-400 transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
