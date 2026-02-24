import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  Briefcase,
  HeartHandshake,
  Code2,
  Bot,
  Sparkles,
  Rocket,
  CheckCircle2,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Menu,
  ArrowRight,
  Shield,
} from "lucide-react";

// --- Translations ---
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      login: "Log in",
      register: "Sign up",
    },
    hero: {
      badge: "World-Class Service Ecosystem",
      title: "Our Specialized",
      titleAccent: "Solutions",
      desc: "Tailored outsourcing and technology services designed to empower travel agencies, tour operators, and corporate enterprises globally.",
    },
    units: {
      title: "Core Business Units",
      desc: "Comprehensive expertise across travel management and digital transformation.",
      unit1: {
        title: "Air Ticketing (BKK AIR)",
        desc: "Advanced IATA-standard reservation systems for single or group bookings, ensuring speed and precision.",
        features: [
          "24/7 Ticketing Support",
          "Specialized Group Rates",
          "Visa Assistance Integrated",
        ],
      },
      unit2: {
        title: "LGBTQ+ Travel (GayBKK)",
        desc: "Curated travel experiences, tour packages, and lifestyle services for the LGBTQ+ community.",
        features: [
          "Personalized Itineraries",
          "Inclusive Safety Standards",
          "Lifestyle Concierge",
        ],
      },
      unit3: {
        title: "Digital Solutions",
        desc: "Custom software development and cloud infrastructure designed for the tourism industry.",
        features: [
          "SaaS Architecture",
          "Platform Development",
          "Legacy System Migration",
        ],
      },
      unit4: {
        title: "AI & Automation",
        desc: "Smart workflow automation and AI-driven analytics to scale your operational efficiency.",
        features: ["Smart Chatbots", "Workflow Automation", "Data Insights"],
      },
    },
    featured: {
      title: "Why Partner With Us?",
      point1: "20+ Years Expertise",
      point1d: "Deep-rooted knowledge in the travel and tourism sector.",
      point2: "BKK Center",
      point2d: "Strategic headquarters in the heart of Bangkok (Chamchuri Sq).",
      point3: "Security First",
      point3d: "Compliant and secure technology management systems.",
    },
    cta: {
      title: "Ready to scale your business?",
      desc: "Contact our professional team to discuss your customized solution.",
      btn: "Get Started Now",
    },
    footer: {
      tagline:
        "SIAM ON CLOUD CO., LTD. Elevating Your Journey, Amplify Success with modern technology and global expertise.",
      hq: "Headquarters",
      company: "Company",
      legal: "Legal",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      address:
        "14/89 Flat 2, 8th Fl., Soi Plookchit, Rama 4 Rd, Lumphini, Pathumwan, Bangkok 10330",
      links: {
        cloud: "Cloud Solution",
        airline: "Airline Partner",
        corporate: "Corporate Travel",
      },
    },
  },
  th: {
    nav: {
      home: "หน้าแรก",
      about: "เกี่ยวกับเรา",
      services: "บริการ",
      contact: "ติดต่อเรา",
      login: "เข้าสู่ระบบ",
      register: "สมัครสมาชิก",
    },
    hero: {
      badge: "ระบบนิเวศบริการระดับโลก",
      title: "โซลูชัน",
      titleAccent: "ระดับมืออาชีพ",
      desc: "บริการเอาท์ซอร์สและเทคโนโลยีที่ออกแบบมาเพื่อเพิ่มศักยภาพให้กับตัวแทนการท่องเที่ยว ผู้ประกอบการทัวร์ และองค์กรทั่วโลก",
    },
    units: {
      title: "กลุ่มธุรกิจหลัก",
      desc: "ความเชี่ยวชาญที่ครอบคลุมทั้งการจัดการการเดินทางและการเปลี่ยนผ่านสู่ดิจิทัล",
      unit1: {
        title: "บริการจองตั๋วเครื่องบิน (BKK AIR)",
        desc: "ระบบสำรองที่นั่งมาตรฐาน IATA ขั้นสูงสำหรับการจองแบบเดี่ยวหรือแบบกลุ่ม มั่นใจในความรวดเร็วและแม่นยำ",
        features: [
          "ซัพพอร์ตการจอง 24/7",
          "ตั๋วกลุ่มราคาพิเศษ",
          "บริการช่วยเหลือด้านวีซ่า",
        ],
      },
      unit2: {
        title: "ท่องเที่ยว LGBTQ+ (GayBKK)",
        desc: "ประสบการณ์การเดินทางที่คัดสรรมาอย่างดี แพ็กเกจทัวร์ และบริการไลฟ์สไตล์สำหรับชุมชน LGBTQ+",
        features: [
          "แผนการเดินทางเฉพาะบุคคล",
          "มาตรฐานความปลอดภัยที่ครอบคลุม",
          "ผู้ช่วยส่วนตัวด้านไลฟ์สไตล์",
        ],
      },
      unit3: {
        title: "โซลูชันดิจิทัล",
        desc: "การพัฒนาซอฟต์แวร์ที่กำหนดเองและโครงสร้างพื้นฐานคลาวด์ที่ออกแบบมาสำหรับอุตสาหกรรมการท่องเที่ยว",
        features: [
          "สถาปัตยกรรม SaaS",
          "การพัฒนาแพลตฟอร์ม",
          "การย้ายระบบเก่าสู่ระบบใหม่",
        ],
      },
      unit4: {
        title: "AI และระบบอัตโนมัติ",
        desc: "ระบบอัตโนมัติของเวิร์กโฟลว์อัจฉริยะและการวิเคราะห์ที่ขับเคลื่อนด้วย AI เพื่อขยายประสิทธิภาพการดำเนินงาน",
        features: [
          "แชทบอทอัจฉริยะ",
          "ระบบอัตโนมัติในงาน",
          "การวิเคราะห์ข้อมูลเชิงลึก",
        ],
      },
    },
    featured: {
      title: "ทำไมต้องเป็นพันธมิตรกับเรา?",
      point1: "ประสบการณ์ 20+ ปี",
      point1d: "ความรู้เชิงลึกในอุตสาหกรรมการเดินทางและการท่องเที่ยว",
      point2: "ศูนย์กลางกรุงเทพฯ",
      point2d: "สำนักงานใหญ่ยุทธศาสตร์ใจกลางกรุงเทพฯ (จามจุรีสแควร์)",
      point3: "ความปลอดภัยสูงสุด",
      point3d: "ระบบจัดการเทคโนโลยีที่ปลอดภัยและเป็นไปตามมาตรฐาน",
    },
    cta: {
      title: "พร้อมที่จะขยายธุรกิจของคุณแล้วหรือยัง?",
      desc: "ติดต่อทีมงานมืออาชีพของเราเพื่อปรึกษาเกี่ยวกับโซลูชันที่ปรับแต่งมาเพื่อคุณ",
      btn: "เริ่มปรึกษาตอนนี้",
    },
    footer: {
      tagline:
        "บริษัท สยามออนคลาวด์ จำกัด ยกระดับการเดินทางของคุณด้วยเทคโนโลยีที่ทันสมัยและความเชี่ยวชาญระดับสากล",
      hq: "สำนักงานใหญ่",
      company: "บริษัท",
      legal: "กฎหมาย",
      terms: "ข้อตกลงการใช้งาน",
      privacy: "นโยบายความเป็นส่วนตัว",
      address:
        "14/89 แฟลต 2 ชั้น 8 ซอยปลูกจิต ถนนพระราม 4 แขวงลุมพินี เขตปทุมวัน กรุงเทพฯ 10330",
      links: {
        cloud: "คลาวด์โซลูชัน",
        airline: "พันธมิตรสายการบิน",
        corporate: "การเดินทางองค์กร",
      },
    },
  },
};

const serviceImages = {
  hero: "https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-03.webp",
  ticketing:
    "https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-01.webp",
  lgbtq:
    "https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-04.webp",
  tech: "https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-02.webp",
};

function Services() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 scroll-smooth overflow-x-hidden">
      {/* Navigation (Matches Homepage perfectly) */}
      <nav
        className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded-lg p-1"
            aria-label="Siam On Cloud Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#0A2540] to-[#06B6D4] flex items-center justify-center text-white shadow-lg">
              <Plane size={24} aria-hidden="true" />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">
              <span className="text-[#0A2540]">SIAM ON </span>
              <span className="text-cyan-500">CLOUD</span>
            </span>
          </Link>

          <div className="flex items-center gap-4 lg:gap-8">
            <div
              className="hidden md:flex gap-6 text-sm font-medium text-slate-600"
              role="menubar"
            >
              <Link
                to="/"
                className="hover:text-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded px-1"
                role="menuitem"
              >
                {t.nav.home}
              </Link>
              <Link
                to="/about"
                className="hover:text-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded px-1"
                role="menuitem"
              >
                {t.nav.about}
              </Link>
              <Link
                to="/services"
                className="text-cyan-600 font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded px-1"
                role="menuitem"
                aria-current="page"
              >
                {t.nav.services}
              </Link>
              <Link
                to="/contact"
                className="hover:text-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded px-1"
                role="menuitem"
              >
                {t.nav.contact}
              </Link>
            </div>

            <div
              className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200"
              aria-label="Language Selector"
            >
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 text-xs font-bold rounded-md transition-all ${
                  lang === "en"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("th")}
                className={`px-2 py-1 text-xs font-bold rounded-md transition-all ${
                  lang === "th"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                TH
              </button>
            </div>

            <div className="hidden sm:flex gap-3">
              <button className="text-sm font-semibold text-[#0A2540] hover:text-cyan-600 px-2 py-1">
                {t.nav.login}
              </button>
              <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#0A2540] to-[#06B6D4] text-white text-sm font-semibold shadow-md hover:opacity-90 transition-opacity">
                {t.nav.register}
              </button>
            </div>
            <button
              className="md:hidden text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded p-1"
              aria-label="Open mobile menu"
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative pt-40 pb-20 lg:pt-56 lg:pb-36 bg-[#0A2540] overflow-hidden"
        aria-label="Services Introduction"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={serviceImages.hero}
            alt="Business Connectivity"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            loading="eager"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#0A2540] via-[#0A2540]/80 to-white"
            aria-hidden="true"
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-100 text-sm font-medium mb-8 border border-cyan-400/30 backdrop-blur-md animate-fade-in">
            <Sparkles size={16} className="text-cyan-400" aria-hidden="true" />
            {t.hero.badge}
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-[#0A2540] leading-tight mb-6">
            {t.hero.title} <br />
            <span className="text-cyan-600">{t.hero.titleAccent}</span>
          </h1>
          <p className="text-lg text-slate-700 mb-10 leading-relaxed max-w-2xl mx-auto">
            {t.hero.desc}
          </p>
        </div>
      </section>

      {/* Main Units Section */}
      <section className="py-24 bg-white" aria-labelledby="units-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              id="units-heading"
              className="text-4xl font-bold text-[#0A2540] mb-4"
            >
              {t.units.title}
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              {t.units.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Unit 1 - Ticketing */}
            <article className="group relative bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 transition-all hover:shadow-2xl">
              <div className="h-64 overflow-hidden">
                <img
                  src={serviceImages.ticketing}
                  alt="Ticketing Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-10">
                <div className="w-14 h-14 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <Plane size={30} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                  {t.units.unit1.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t.units.unit1.desc}
                </p>
                <ul className="space-y-3">
                  {t.units.unit1.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-slate-500 font-medium"
                    >
                      <CheckCircle2 size={18} className="text-cyan-500" />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Unit 2 - LGBTQ+ */}
            <article className="group relative bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 transition-all hover:shadow-2xl">
              <div className="h-64 overflow-hidden">
                <img
                  src={serviceImages.lgbtq}
                  alt="LGBTQ Travel Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-10">
                <div className="w-14 h-14 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                  <HeartHandshake size={30} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                  {t.units.unit2.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t.units.unit2.desc}
                </p>
                <ul className="space-y-3">
                  {t.units.unit2.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-slate-500 font-medium"
                    >
                      <CheckCircle2 size={18} className="text-cyan-500" />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Unit 3 - Digital */}
            <article className="group relative bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 transition-all hover:shadow-2xl">
              <div className="h-64 overflow-hidden">
                <img
                  src={serviceImages.tech}
                  alt="Digital Technology Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-10">
                <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Code2 size={30} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                  {t.units.unit3.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t.units.unit3.desc}
                </p>
                <ul className="space-y-3">
                  {t.units.unit3.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-slate-500 font-medium"
                    >
                      <CheckCircle2 size={18} className="text-cyan-500" />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Unit 4 - AI */}
            <article className="group relative bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 transition-all hover:shadow-2xl">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-03.webp"
                  alt="AI Automation Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-10">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Bot size={30} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                  {t.units.unit4.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t.units.unit4.desc}
                </p>
                <ul className="space-y-3">
                  {t.units.unit4.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-slate-500 font-medium"
                    >
                      <CheckCircle2 size={18} className="text-cyan-500" />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Featured Highlight Section */}
      <section
        className="py-24 bg-[#0A2540] text-white relative overflow-hidden"
        aria-labelledby="featured-heading"
      >
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-cyan-600/10 skew-x-12 transform translate-x-20"
          aria-hidden="true"
        ></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 id="featured-heading" className="text-4xl font-bold mb-12">
                {t.featured.title}
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-16 h-16 shrink-0 bg-white/10 rounded-2xl flex items-center justify-center text-cyan-400 border border-white/10">
                    <Briefcase size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {t.featured.point1}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {t.featured.point1d}
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-16 h-16 shrink-0 bg-white/10 rounded-2xl flex items-center justify-center text-cyan-400 border border-white/10">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {t.featured.point2}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {t.featured.point2d}
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-16 h-16 shrink-0 bg-white/10 rounded-2xl flex items-center justify-center text-cyan-400 border border-white/10">
                    <Shield size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {t.featured.point3}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {t.featured.point3d}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/5 aspect-video md:aspect-square">
                <img
                  src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-02.webp"
                  alt="Bangkok Office Center"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-cyan-600 p-8 rounded-[2rem] shadow-xl hidden sm:block">
                <Sparkles className="w-10 h-10 text-white animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50" aria-label="Call to Action">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-white p-12 lg:p-20 rounded-[4rem] shadow-xl border border-slate-100 flex flex-col items-center">
            <div className="w-20 h-20 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mb-8">
              <Rocket size={40} className="animate-bounce" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0A2540] mb-6">
              {t.cta.title}
            </h2>
            <p className="text-slate-500 text-lg mb-12 max-w-xl">
              {t.cta.desc}
            </p>
            <Link
              to="/contact"
              className="px-10 py-5 rounded-full bg-gradient-to-r from-[#0A2540] to-[#06B6D4] text-white font-bold text-lg shadow-xl hover:scale-105 transition-transform flex items-center gap-3"
            >
              {t.cta.btn} <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer (Consistent with Homepage) */}
      <footer
        className="bg-slate-900 pt-20 pb-10 text-slate-400"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center text-white">
                  <Plane size={24} aria-hidden="true" />
                </div>
                <span className="text-2xl font-bold text-white">
                  SIAM ON CLOUD
                </span>
              </div>
              <p className="max-w-md mb-8 leading-relaxed">
                {t.footer.tagline}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/siamoncloud"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Visit our LinkedIn"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Visit our Twitter"
                >
                  <Twitter size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://www.facebook.com/siamoncloud"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Visit our Facebook"
                >
                  <Facebook size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h4 className="text-white font-bold mb-6">
                  {t.footer.company}
                </h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      to="/"
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      {t.nav.home}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      {t.nav.about}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      {t.nav.services}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <h4 className="text-white font-bold mb-6">{t.footer.legal}</h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      {t.footer.terms}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      {t.footer.privacy}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-white font-bold mb-6">{t.footer.hq}</h4>
                <address className="text-sm leading-relaxed not-italic">
                  <span
                    dangerouslySetInnerHTML={{ __html: t.footer.address }}
                  />
                </address>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium">
            <p>
              © {new Date().getFullYear()} SIAM ON CLOUD CO., LTD. All rights
              reserved.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="hover:text-white transition-colors focus:outline-none focus:underline"
              >
                {t.footer.links.cloud}
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors focus:outline-none focus:underline"
              >
                {t.footer.links.airline}
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors focus:outline-none focus:underline"
              >
                {t.footer.links.corporate}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Services;
