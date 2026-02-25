import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  Target,
  Compass,
  Heart,
  Award,
  Users,
  Sparkles,
  ArrowRight,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Menu,
} from "lucide-react";

// --- About Page Translations ---
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
    header: {
      badge: "Our Story",
      title1: "Discover",
      title2: "SIAM ON CLOUD",
      desc: "Blending over 20 years of travel expertise with cutting-edge digital innovation. We are your trusted partner in navigating the future of global connectivity.",
    },
    story: {
      title: "Trusted Excellence Since 2018",
      subtitle:
        "Founded by Mr. Siam Uttrakun on January 15, 2018, SIAM ON CLOUD CO., LTD. was born from a vision to revolutionize the travel and tech outsourcing industry. Headquartered in the heart of Bangkok at Chamchuri Square, we provide tailored, seamless solutions to clients worldwide.",
    },
    gallery: {
      title: "Visualizing Our Journey",
      desc: "A glimpse into the global connectivity and premium travel experiences we deliver every day.",
    },
    vision: {
      title: "Mission & Vision 2032",
      badge: "The Future We Build",
      missionTitle: "Our Mission",
      missionDesc:
        "To deliver seamless business and travel solutions that empower corporate clients, tour operators, and specialized communities through innovative SaaS platforms like BKK AIR.",
      visionTitle: "Vision 2032",
      visionDesc:
        "To establish a globally recognized business ecosystem by November 11, 2032. We prioritize family care, team empowerment, and delivering unforgettable personalized experiences.",
      lgbtqTitle: "Inclusive Travel",
      lgbtqDesc:
        "We champion diversity. Through platforms like GayBKK, we create safe, premium, and highly customizable travel experiences dedicated to the LGBTQ+ community.",
    },
    values: {
      title: "Our Core Strengths",
      v1: "20+ Years Experience",
      v1d: "Deep industry knowledge in travel management and tourism.",
      v2: "Global Connectivity",
      v2d: "Robust IT infrastructure bridging businesses across borders.",
      v3: "Personalized Care",
      v3d: "Attention to detail that guarantees complete customer satisfaction.",
    },
    cta: {
      title: "Ready to Elevate Your Journey?",
      desc: "Let's collaborate to bring your business goals to life.",
      btn: "Contact Us Today",
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
        "319 Chamchuri Square Building, 24th Floor, Phayathai Road, Pathumwan District, Bangkok 10330, Thailand",
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
    header: {
      badge: "เรื่องราวของเรา",
      title1: "รู้จักกับ",
      title2: "SIAM ON CLOUD",
      desc: "ผสานความเชี่ยวชาญด้านการเดินทางกว่า 20 ปี เข้ากับนวัตกรรมดิจิทัลที่ล้ำสมัย เราคือพันธมิตที่เชื่อถือได้ในการขับเคลื่อนธุรกิจของคุณสู่ระดับโลก",
    },
    story: {
      title: "ความเป็นเลิศที่เชื่อถือได้ตั้งแต่ปี 2018",
      subtitle:
        "บริษัท สยามออนคลาวด์ จำกัด ก่อตั้งโดยคุณสยาม อุตตระกูล เมื่อวันที่ 15 มกราคม 2018 ด้วยวิสัยทัศน์ที่ต้องการยกระดับอุตสาหกรรมการเดินทางและเทคโนโลยี เรามีสำนักงานใหญ่ใจกลางกรุงเทพฯ ณ จามจุรีสแควร์ พร้อมให้บริการลูกค้าระดับสากล",
    },
    gallery: {
      title: "ภาพสะท้อนแห่งความสำเร็จ",
      desc: "สัมผัสประสบการณ์การเดินทางระดับพรีเมียมและการเชื่อมต่อระดับโลกที่เราส่งมอบในทุกๆ วัน",
    },
    vision: {
      title: "พันธกิจ และ วิสัยทัศน์ 2032",
      badge: "อนาคตที่เราสร้าง",
      missionTitle: "พันธกิจของเรา",
      missionDesc:
        "ส่งมอบโซลูชันด้านธุรกิจและการเดินทางที่ไร้รอยต่อ เพื่อเพิ่มศักยภาพให้กับองค์กร ผู้ประกอบการทัวร์ และกลุ่มคอมมูนิตี้ ผ่านแพลตฟอร์ม SaaS อย่าง BKK AIR",
      visionTitle: "วิสัยทัศน์ปี 2032",
      visionDesc:
        "สร้างระบบนิเวศทางธุรกิจที่ประสบความสำเร็จระดับโลกภายในวันที่ 11 พฤศจิกายน 2032 โดยให้ความสำคัญกับการดูแลครอบครัว ทีมงาน และการส่งมอบประสบการณ์สุดพิเศษ",
      lgbtqTitle: "การเดินทางที่เปิดกว้าง (LGBTQ+)",
      lgbtqDesc:
        "เราสนับสนุนความหลากหลาย ผ่านแพลตฟอร์ม GayBKK ที่สร้างสรรค์ทริปและบริการระดับพรีเมียมที่ปลอดภัยและปรับแต่งได้สำหรับกลุ่ม LGBTQ+ โดยเฉพาะ",
    },
    values: {
      title: "จุดแข็งของเรา",
      v1: "ประสบการณ์กว่า 20 ปี",
      v1d: "ความรู้ความเชี่ยวชาญเชิงลึกด้านการจัดการการเดินทางและการท่องเที่ยว",
      v2: "การเชื่อมต่อระดับโลก",
      v2d: "โครงสร้างพื้นฐานด้าน IT ที่แข็งแกร่ง เชื่อมโยงธุรกิจข้ามพรมแดน",
      v3: "การดูแลอย่างใส่ใจ",
      v3d: "ใส่ใจในทุกรายละเอียด เพื่อรับประกันความพึงพอใจสูงสุดของลูกค้า",
    },
    cta: {
      title: "พร้อมยกระดับธุรกิจของคุณหรือยัง?",
      desc: "มาร่วมงานกับเราเพื่อผลักดันเป้าหมายทางธุรกิจของคุณให้เป็นจริง",
      btn: "ติดต่อเราวันนี้",
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

const galleryImages = [
  "https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-01.webp",
  "https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-02.webp",
  "https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-03.webp",
  "https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-04.webp",
];

// --- SEO Structured Data (JSON-LD) ---
const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Siam On Cloud Co., Ltd.",
  alternateName: "BKK AIR | GayBKK",
  url: "https://siamon.cloud",
  logo: "https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/mascot/binnai-head.png",
  description:
    "Trusted outsourcing provider specializing in travel management, tourism, and robust technology management with over 20 years of expertise.",
  telephone: "+66-99-000-9588",
  email: "info@siamon.cloud",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "14/89 Flat 2, 8th floor, Soi Plookchit, Rama4 Road, Lumphini, Pathumwan",
    addressLocality: "Bangkok",
    postalCode: "10330",
    addressCountry: "TH",
  },
  founder: {
    "@type": "Person",
    name: "Mr. Siam Uttrakun",
  },
  foundingDate: "2018-01-15",
  sameAs: [
    "https://www.facebook.com/siamoncloud",
    "https://www.linkedin.com/company/siamoncloud",
  ],
};

function About() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Inject JSON-LD Structured Data
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
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
            <img
              src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/logos/logo-white-online.png"
              alt="Siam On Cloud Logo"
              className="h-12 w-auto object-contain"
            />
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
                className="text-cyan-600 font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded px-1"
                role="menuitem"
                aria-current="page"
              >
                {t.nav.about}
              </Link>
              <Link
                to="/services"
                className="hover:text-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded px-1"
                role="menuitem"
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
              <Link
                to="/terms"
                className="hover:text-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded px-1"
                role="menuitem"
              >
                {t.footer.terms}
              </Link>
            </div>

            <div
              className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200"
              aria-label="Language Selector"
            >
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 text-xs font-bold rounded-md transition-all focus:outline-none ${
                  lang === "en"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("th")}
                className={`px-2 py-1 text-xs font-bold rounded-md transition-all focus:outline-none ${
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
              className="md:hidden text-slate-600 p-1"
              aria-label="Open mobile menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Inner Hero Section */}
        <section
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0A2540] overflow-hidden"
          aria-label="About Us Hero"
        >
          <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-02.webp')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540] to-[#0A2540]/90"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-100 text-sm font-medium mb-6 border border-cyan-400/30 backdrop-blur-md">
              <Sparkles
                size={16}
                className="text-cyan-400"
                aria-hidden="true"
              />
              {t.header.badge}
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              {t.header.title1}{" "}
              <span className="text-cyan-400">{t.header.title2}</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {t.header.desc}
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 bg-white" aria-labelledby="story-heading">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2
              id="story-heading"
              className="text-3xl lg:text-4xl font-bold text-[#0A2540] mb-8"
            >
              {t.story.title}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              {t.story.subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0A2540] to-[#06B6D4] mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Mission, Vision & LGBTQ+ Focus */}
        <section className="py-24 bg-slate-50" aria-labelledby="vision-heading">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                {t.vision.badge}
              </span>
              <h2
                id="vision-heading"
                className="text-4xl font-bold text-[#0A2540]"
              >
                {t.vision.title}
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Mission */}
              <article className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-16 h-16 bg-[#0A2540] rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                  {t.vision.missionTitle}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {t.vision.missionDesc}
                </p>
              </article>

              {/* Vision 2032 */}
              <article className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  <Compass size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                  {t.vision.visionTitle}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {t.vision.visionDesc}
                </p>
              </article>

              {/* LGBTQ+ Focus */}
              <article className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  <Heart size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                  {t.vision.lgbtqTitle}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {t.vision.lgbtqDesc}
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* --- LARGE VISUAL GRID SECTION (Approx 20% of Page Area) --- */}
        <section className="py-24 bg-white" aria-label="Visual Gallery">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0A2540] mb-4">
                {t.gallery.title}
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                {t.gallery.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px] md:h-[800px]">
              {/* Feature Large Image */}
              <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-[2.5rem] shadow-2xl group relative">
                <img
                  src={galleryImages[0]}
                  alt="Global Travel Experience"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white font-bold text-xl">
                    Global Exploration
                  </p>
                </div>
              </div>

              {/* Vertical Secondary Image */}
              <div className="md:col-span-1 md:row-span-2 overflow-hidden rounded-[2.5rem] shadow-xl group relative">
                <img
                  src={galleryImages[1]}
                  alt="Business and Tech Solution"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white font-bold">Innovation</p>
                </div>
              </div>

              {/* Horizontal Top-Right */}
              <div className="md:col-span-1 md:row-span-1 overflow-hidden rounded-[2.5rem] shadow-xl group relative">
                <img
                  src={galleryImages[2]}
                  alt="Luxury Destination"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Horizontal Bottom-Right */}
              <div className="md:col-span-1 md:row-span-1 overflow-hidden rounded-[2.5rem] shadow-xl group relative">
                <img
                  src={galleryImages[3]}
                  alt="Team and Collaboration"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Strengths */}
        <section
          className="py-24 bg-slate-50"
          aria-labelledby="strengths-heading"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2
              id="strengths-heading"
              className="text-4xl font-bold text-[#0A2540] text-center mb-16"
            >
              {t.values.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="w-20 h-20 mx-auto bg-white text-[#0A2540] rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                  <Award size={36} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                  {t.values.v1}
                </h3>
                <p className="text-slate-500">{t.values.v1d}</p>
              </div>
              <div>
                <div className="w-20 h-20 mx-auto bg-white text-cyan-600 rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                  <Globe size={36} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                  {t.values.v2}
                </h3>
                <p className="text-slate-500">{t.values.v2d}</p>
              </div>
              <div>
                <div className="w-20 h-20 mx-auto bg-white text-[#0A2540] rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                  <Users size={36} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                  {t.values.v3}
                </h3>
                <p className="text-slate-500">{t.values.v3d}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-[#0A2540] to-[#06B6D4] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.cta.title}
            </h2>
            <p className="text-cyan-100 text-lg mb-10">{t.cta.desc}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0A2540] font-bold shadow-xl hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-cyan-300"
            >
              {t.cta.btn} <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer (Matches Homepage perfectly) */}
      <footer
        className="bg-slate-900 pt-20 pb-10 text-slate-400"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <img
                  src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/logos/logo-white-online2.png"
                  alt="Siam On Cloud Logo"
                  className="h-12 w-auto object-contain"
                />
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
                      href="/terms"
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      {t.footer.terms}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
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

export default About;
