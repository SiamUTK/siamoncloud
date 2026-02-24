import { useEffect, useState } from "react";
import Chatbot from "../components/chatbot/Chatbot";
import Icon from "../components/ui/Icon";

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
      badge: "Technology & Travel Solutions",
      title1: "Elevating Your",
      title2: "Journey",
      title3: "with Precision & Care",
      desc: "Empowering businesses with cutting-edge digital solutions, seamless airline booking management, and specialized travel platforms. We merge technology with global connectivity.",
      btn1: "Our Services",
      btn2: "Contact Us",
    },
    about: {
      title: "Trusted Excellence Since 2018",
      desc: "SIAM ON CLOUD CO., LTD. is a trusted outsourcing provider specializing in travel management, tourism, and robust technology management with over 20 years of expertise.",
      card1: "Corporate DNA",
      card1Desc:
        "Founded by Mr. Siam Uttrakun, blending extensive travel expertise with modern digital solutions.",
      card2: "Global Reach",
      card2Desc:
        "Headquartered in Bangkok, providing tailored solutions and serving clients worldwide.",
      card3: "Certified Trust",
      card3Desc:
        "A fully registered Thai corporation delivering reliability, security, and exceptional service standards.",
    },
    services: {
      title: "Our Business Units",
      desc: "A diverse ecosystem designed to scale. From advanced ticketing platforms to bespoke digital solutions.",
      badge: "SaaS Ready Architecture",
      unit1: "Air Ticketing",
      unit1Desc:
        "Advanced seat reservation systems (BKK AIR) ensuring smooth, fast, and accurate booking management.",
      unit2: "LGBTQ+ Travel",
      unit2Desc:
        "Specialized platforms like GayBKK offering inclusive tours, activities, and lifestyle services.",
      unit3: "Digital Solutions",
      unit3Desc:
        "Customized technology, platform development, and robust IT infrastructure.",
      unit4: "AI & Automation",
      unit4Desc:
        "Empowering operations with cutting-edge tools, workflow automation, and smart analytics.",
    },
    trust: {
      title: "Corporate Credentials",
      desc: "Verified and trusted entity ready for global partnerships.",
      reg: "Registration",
      loc: "Location",
      exp: "Experience",
      email: "Official Email",
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "We are here to take care of you and answer all your questions.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Business Hours",
      hoursDetail: "Mon-Sat (09:00 - 18:00)",
      inquiryTitle: "Direct Inquiry",
      formName: "Name",
      formNamePlaceholder: "John Doe",
      formEmail: "Email",
      formEmailPlaceholder: "john@example.com",
      formMessage: "Message",
      formMessagePlaceholder: "How can we help you?",
      formSubmit: "Send Inquiry",
    },
    chatbot: {
      title: "N' Binnai",
      status: "AI Assistant • Online",
      greeting:
        "Hello! I am N' Binnai, your AI assistant from SIAM ON CLOUD ✈️. How can I help you with flight bookings or tour packages today?",
      placeholder: "Type your message here...",
      response:
        "I have received your message. Let me check the information for you right away!",
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
    hero: {
      badge: "โซลูชันด้านเทคโนโลยีและการเดินทาง",
      title1: "ยกระดับ",
      title2: "การเดินทาง",
      title3: "ของคุณด้วยความใส่ใจ",
      desc: "เพิ่มศักยภาพให้องค์กรของคุณด้วยโซลูชันดิจิทัลที่ทันสมัย ระบบจัดการการจองตั๋วเครื่องบินที่ไร้รอยต่อ และแพลตฟอร์มการเดินทางเฉพาะกลุ่ม",
      btn1: "บริการของเรา",
      btn2: "ติดต่อเรา",
    },
    about: {
      title: "ความเป็นเลิศที่เชื่อถือได้ตั้งแต่ปี 2018",
      desc: "บริษัท สยามออนคลาวด์ จำกัด เป็นผู้ให้บริการเอาท์ซอร์สที่เชื่อถือได้ เชี่ยวชาญด้านการจัดการการเดินทาง การท่องเที่ยว และเทคโนโลยี",
      card1: "ดีเอ็นเอขององค์กร",
      card1Desc:
        "ก่อตั้งโดยคุณสยาม อุตตระกูล ผสมผสานความเชี่ยวชาญด้านการเดินทางเข้ากับโซลูชันดิจิทัลสมัยใหม่",
      card2: "เครือข่ายระดับโลก",
      card2Desc:
        "มีสำนักงานใหญ่ในกรุงเทพฯ พร้อมส่งมอบโซลูชันที่ปรับแต่งได้และให้บริการลูกค้าทั่วโลก",
      card3: "ความน่าเชื่อถือที่ผ่านการรับรอง",
      card3Desc:
        "นิติบุคคลที่จดทะเบียนถูกต้องตามกฎหมายไทย ส่งมอบความน่าเชื่อถือและความปลอดภัยสูงสุด",
    },
    services: {
      title: "กลุ่มธุรกิจของเรา",
      desc: "ระบบนิเวศทางธุรกิจที่พร้อมเติบโต ตั้งแต่แพลตฟอร์มจองตั๋วขั้นสูงไปจนถึงโซลูชันดิจิทัลที่ปรับแต่งได้",
      badge: "สถาปัตยกรรมที่รองรับ SaaS",
      unit1: "บริการจองตั๋วเครื่องบิน",
      unit1Desc:
        "ระบบสำรองที่นั่งขั้นสูง (BKK AIR) เพื่อการจัดการการจองที่ราบรื่น รวดเร็ว และแม่นยำ",
      unit2: "การเดินทางสำหรับ LGBTQ+",
      unit2Desc:
        "แพลตฟอร์มเฉพาะทางอย่าง GayBKK นำเสนอทัวร์ กิจกรรม และบริการไลฟ์สไตล์ระดับพรีเมียม",
      unit3: "โซลูชันดิจิทัล",
      unit3Desc:
        "พัฒนาเทคโนโลยี แพลตฟอร์ม และโครงสร้างพื้นฐานด้าน IT ที่แข็งแกร่ง",
      unit4: "AI และระบบอัตโนมัติ",
      unit4Desc:
        "เพิ่มประสิทธิภาพการทำงานด้วยเครื่องมือที่ล้ำสมัยและระบบวิเคราะห์อัจฉริยะ",
    },
    trust: {
      title: "ข้อมูลรับรององค์กร",
      desc: "หน่วยงานที่ผ่านการตรวจสอบและเชื่อถือได้ พร้อมสำหรับพันธมิตรระดับโลก",
      reg: "เลขทะเบียนนิติบุคคล",
      loc: "สถานที่ตั้ง",
      exp: "ประสบการณ์",
      email: "อีเมลติดต่อทางการ",
    },
    contact: {
      title: "ติดต่อเรา",
      subtitle: "เราพร้อมดูแลและตอบทุกคำถามของคุณสยามและลูกค้าทุกท่านครับ",
      phoneLabel: "โทรศัพท์",
      emailLabel: "อีเมล",
      hoursLabel: "เวลาทำการ",
      hoursDetail: "จันทร์-เสาร์ (09:00 - 18:00)",
      inquiryTitle: "ส่งข้อความถึงเรา",
      formName: "ชื่อ",
      formNamePlaceholder: "ชื่อของคุณ",
      formEmail: "อีเมล",
      formEmailPlaceholder: "email@example.com",
      formMessage: "ข้อความ",
      formMessagePlaceholder: "มีอะไรให้เราช่วยไหมครับ?",
      formSubmit: "ส่งข้อความ",
    },
    chatbot: {
      title: "น้องบินไหน (N' Binnai)",
      status: "ผู้ช่วย AI • ออนไลน์",
      greeting:
        "สวัสดีครับ! น้องบินไหน (N' Binnai) ผู้ช่วยจาก SIAM ON CLOUD ยินดีให้บริการครับ ✈️ มีอะไรให้น้องบินไหนช่วยดูแลเรื่องการจองตั๋วหรือแพ็กเกจทัวร์ไหมครับ?",
      placeholder: "พิมพ์ข้อความที่นี่...",
      response:
        "น้องบินไหนได้รับข้อความแล้วครับ กำลังตรวจสอบและประสานงานข้อมูลให้นะครับ!",
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

const heroImages = [
  "https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-01.webp",
  "https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-02.webp",
  "https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-03.webp",
  "https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-04.webp",
];

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

function Home() {
  const [lang, setLang] = useState("en");
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = translations[lang];

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth bg-white font-sans text-slate-800">
      <nav
        className="fixed z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md"
        aria-label="Main Navigation"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <a
            href="/"
            className="flex cursor-pointer items-center gap-2 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            aria-label="Siam On Cloud Home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#0A2540] to-[#06B6D4] text-white shadow-lg">
              <Icon name="Plane" size={24} aria-hidden="true" />
            </div>
            <span className="hidden text-xl font-bold tracking-tight sm:block">
              <span className="text-[#0A2540]">SIAM ON </span>
              <span className="text-cyan-500">CLOUD</span>
            </span>
          </a>

          <div className="flex items-center gap-4 lg:gap-8">
            <div
              className="hidden gap-6 text-sm font-medium text-slate-600 md:flex"
              role="menubar"
            >
              <a
                href="/"
                className="rounded px-1 transition-colors hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
              >
                {t.nav.home}
              </a>
              <a
                href="/about"
                className="rounded px-1 transition-colors hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
              >
                {t.nav.about}
              </a>
              <a
                href="/services"
                className="rounded px-1 transition-colors hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
              >
                {t.nav.services}
              </a>
              <a
                href="/contact"
                className="rounded px-1 transition-colors hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
              >
                {t.nav.contact}
              </a>
              <a
                href="/terms"
                className="rounded px-1 transition-colors hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
              >
                {t.footer.terms}
              </a>
            </div>

            <div
              className="rounded-lg border border-slate-200 bg-slate-100 p-1"
              aria-label="Language Selector"
            >
              <button
                onClick={() => setLang("en")}
                className={`rounded-md px-2 py-1 text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-cyan-600 ${
                  lang === "en"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-400 hover:text-slate-700"
                }`}
                aria-pressed={lang === "en"}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang("th")}
                className={`rounded-md px-2 py-1 text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-cyan-600 ${
                  lang === "th"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-400 hover:text-slate-700"
                }`}
                aria-pressed={lang === "th"}
                aria-label="เปลี่ยนเป็นภาษาไทย"
              >
                TH
              </button>
            </div>

            <div className="hidden gap-3 sm:flex">
              <button className="rounded px-2 py-1 text-sm font-semibold text-[#0A2540] hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600">
                {t.nav.login}
              </button>
              <button className="rounded-full bg-gradient-to-r from-[#0A2540] to-[#06B6D4] px-5 py-2 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2">
                {t.nav.register}
              </button>
            </div>

            <button
              className="rounded p-1 text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 md:hidden"
              aria-label="Open mobile menu"
            >
              <Icon name="Menu" size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section
          className="relative flex min-h-[80vh] items-center overflow-hidden bg-[#0A2540] pb-20 pt-32 lg:pb-40 lg:pt-52"
          aria-label="Hero Introduction"
        >
          <div className="absolute inset-0 z-0">
            {heroImages.map((img, idx) => (
              <img
                key={img}
                src={img}
                alt={`Travel and Business Solution background ${idx + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                  idx === currentSlide ? "opacity-40" : "opacity-0"
                }`}
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "auto"}
                decoding="async"
              />
            ))}
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/60 to-white"
              aria-hidden="true"
            ></div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4">
            <div className="max-w-3xl text-center lg:text-left">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur-md">
                <Icon
                  name="Sparkles"
                  size={16}
                  className="text-cyan-400"
                  aria-hidden="true"
                />
                {t.hero.badge}
              </div>
              <h1 className="mb-6 text-5xl font-black leading-tight text-[#0A2540] lg:text-7xl">
                {t.hero.title1} <br />
                <span className="text-cyan-600">{t.hero.title2}</span> <br />
                {t.hero.title3}
              </h1>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-700">
                {t.hero.desc}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="/services"
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0A2540] to-[#06B6D4] px-8 py-4 font-bold text-white shadow-xl focus:outline-none focus:ring-4 focus:ring-cyan-300"
                >
                  <Icon name="Rocket" size={20} aria-hidden="true" />{" "}
                  {t.hero.btn1}
                </a>
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-8 py-4 font-bold text-[#0A2540] shadow-md backdrop-blur-md focus:outline-none focus:ring-4 focus:ring-slate-300"
                >
                  <Icon name="MessageSquare" size={20} aria-hidden="true" />{" "}
                  {t.hero.btn2}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="relative overflow-hidden bg-white py-24"
          aria-labelledby="about-heading"
        >
          <div className="relative z-10 mx-auto max-w-7xl px-4">
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <h2
                id="about-heading"
                className="mb-6 text-4xl font-bold text-[#0A2540]"
              >
                {t.about.title}
              </h2>
              <p className="text-lg text-slate-500">{t.about.desc}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <article className="group rounded-[2.5rem] border border-slate-100 bg-slate-50 p-10 transition-all hover:bg-white hover:shadow-2xl">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A2540] text-white transition-transform group-hover:scale-110">
                  <Icon name="Briefcase" size={32} aria-hidden="true" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  {t.about.card1}
                </h3>
                <p className="leading-relaxed text-slate-500">
                  {t.about.card1Desc}
                </p>
              </article>
              <article className="group rounded-[2.5rem] border border-slate-100 bg-slate-50 p-10 transition-all hover:bg-white hover:shadow-2xl">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-600 text-white transition-transform group-hover:scale-110">
                  <Icon name="Globe" size={32} aria-hidden="true" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  {t.about.card2}
                </h3>
                <p className="leading-relaxed text-slate-500">
                  {t.about.card2Desc}
                </p>
              </article>
              <article className="group rounded-[2.5rem] border border-slate-100 bg-slate-50 p-10 transition-all hover:bg-white hover:shadow-2xl">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A2540] text-white transition-transform group-hover:scale-110">
                  <Icon name="ShieldCheck" size={32} aria-hidden="true" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  {t.about.card3}
                </h3>
                <p className="leading-relaxed text-slate-500">
                  {t.about.card3Desc}
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="bg-slate-50 py-24"
          aria-labelledby="services-heading"
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
              <div className="max-w-2xl">
                <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-cyan-600">
                  {t.services.badge}
                </span>
                <h2
                  id="services-heading"
                  className="mb-4 text-4xl font-bold text-[#0A2540]"
                >
                  {t.services.title}
                </h2>
                <p className="text-lg text-slate-500">{t.services.desc}</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <article className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                  <Icon name="Plane" size={28} aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#0A2540]">
                  {t.services.unit1}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {t.services.unit1Desc}
                </p>
              </article>
              <article className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                  <Icon name="HeartHandshake" size={28} aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#0A2540]">
                  {t.services.unit2}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {t.services.unit2Desc}
                </p>
              </article>
              <article className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Icon name="Code2" size={28} aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#0A2540]">
                  {t.services.unit3}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {t.services.unit3Desc}
                </p>
              </article>
              <article className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <Icon name="Bot" size={28} aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#0A2540]">
                  {t.services.unit4}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {t.services.unit4Desc}
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="bg-gradient-to-r from-[#0A2540] to-[#06B6D4] py-20 text-white"
          aria-labelledby="credentials-heading"
        >
          <div className="mx-auto mb-16 max-w-7xl px-4 text-center">
            <h2 id="credentials-heading" className="mb-4 text-3xl font-bold">
              {t.trust.title}
            </h2>
            <p className="text-cyan-100">{t.trust.desc}</p>
          </div>
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-md">
              <div className="mb-4 flex justify-center text-cyan-300">
                <Icon name="CheckCircle2" size={40} aria-hidden="true" />
              </div>
              <p className="mb-2 text-xs uppercase tracking-widest text-cyan-200">
                {t.trust.reg}
              </p>
              <p className="font-mono text-lg font-bold">0625561000033</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-md">
              <div className="mb-4 flex justify-center text-cyan-300">
                <Icon name="MapPin" size={40} aria-hidden="true" />
              </div>
              <p className="mb-2 text-xs uppercase tracking-widest text-cyan-200">
                {t.trust.loc}
              </p>
              <p className="text-lg font-bold">Chamchuri Sq., 24F</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-md">
              <div className="mb-4 flex justify-center text-cyan-300">
                <Icon name="Briefcase" size={40} aria-hidden="true" />
              </div>
              <p className="mb-2 text-xs uppercase tracking-widest text-cyan-200">
                {t.trust.exp}
              </p>
              <p className="text-lg font-bold">20+ Years</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-md">
              <div className="mb-4 flex justify-center text-cyan-300">
                <Icon name="Mail" size={40} aria-hidden="true" />
              </div>
              <p className="mb-2 text-xs uppercase tracking-widest text-cyan-200">
                {t.trust.email}
              </p>
              <p className="text-lg font-bold">info@siamon.cloud</p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-white py-24"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col overflow-hidden rounded-[3rem] bg-[#0A2540] shadow-2xl lg:flex-row">
              <div className="flex flex-col justify-between p-12 text-white lg:w-1/2 lg:p-20">
                <div>
                  <h2 id="contact-heading" className="mb-6 text-4xl font-bold">
                    {t.contact.title}
                  </h2>
                  <p className="mb-12 text-lg text-slate-400">
                    {t.contact.subtitle}
                  </p>
                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cyan-400">
                        <Icon name="Phone" size={24} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-widest text-slate-400">
                          {t.contact.phoneLabel}
                        </p>
                        <a
                          href="tel:+66990009588"
                          className="text-xl font-bold transition-colors hover:text-cyan-400"
                        >
                          +66 99 000 9588
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cyan-400">
                        <Icon name="Mail" size={24} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-widest text-slate-400">
                          {t.contact.emailLabel}
                        </p>
                        <a
                          href="mailto:info@siamon.cloud"
                          className="text-xl font-bold transition-colors hover:text-cyan-400"
                        >
                          info@siamon.cloud
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cyan-400">
                        <Icon name="Clock" size={24} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-widest text-slate-400">
                          {t.contact.hoursLabel}
                        </p>
                        <p className="text-xl font-bold">
                          {t.contact.hoursDetail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://line.me/R/ti/p/@siamoncloud"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#00B900] py-4 font-bold transition-opacity hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-[#00B900]/50"
                    aria-label="Contact via LINE"
                  >
                    <Icon name="MessageCircle" size={20} aria-hidden="true" />{" "}
                    LINE: @siamoncloud
                  </a>
                  <a
                    href="https://wa.me/66990009588"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-4 font-bold transition-opacity hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
                    aria-label="Contact via WhatsApp"
                  >
                    <Icon name="PhoneCall" size={20} aria-hidden="true" />{" "}
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-white p-12 lg:w-1/2 lg:p-20">
                <h3 className="mb-8 text-2xl font-bold text-[#0A2540]">
                  {t.contact.inquiryTitle}
                </h3>
                <form
                  className="space-y-6"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="inquiry-name"
                        className="text-sm font-semibold text-slate-700"
                      >
                        {t.contact.formName}
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder={t.contact.formNamePlaceholder}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="inquiry-email"
                        className="text-sm font-semibold text-slate-700"
                      >
                        {t.contact.formEmail}
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder={t.contact.formEmailPlaceholder}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="inquiry-message"
                      className="text-sm font-semibold text-slate-700"
                    >
                      {t.contact.formMessage}
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={4}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder={t.contact.formMessagePlaceholder}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#0A2540] py-4 font-bold text-white shadow-lg transition-colors hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-400"
                  >
                    {t.contact.formSubmit}
                  </button>
                </form>
              </div>
            </div>
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
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600 text-white">
                  <Icon name="Plane" size={24} aria-hidden="true" />
                </div>
                <span className="text-2xl font-bold text-white">
                  SIAM ON CLOUD
                </span>
              </div>
              <p className="mb-8 max-w-md leading-relaxed">
                {t.footer.tagline}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/siamoncloud"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Visit our LinkedIn"
                >
                  <Icon name="Linkedin" size={18} aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Visit our Twitter"
                >
                  <Icon name="Twitter" size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://www.facebook.com/siamoncloud"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Visit our Facebook"
                >
                  <Icon name="Facebook" size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="col-span-1">
                <h4 className="mb-6 font-bold text-white">
                  {t.footer.company}
                </h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href="/"
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      {t.nav.home}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      {t.nav.about}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      {t.nav.services}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <h4 className="mb-6 font-bold text-white">{t.footer.legal}</h4>
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
                      href="#"
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      {t.footer.privacy}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="mb-6 font-bold text-white">{t.footer.hq}</h4>
                <address className="not-italic text-sm leading-relaxed">
                  {t.footer.address}
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
                {t.footer.links.cloud}
              </a>
              <a
                href="#"
                className="transition-colors hover:text-white focus:outline-none focus:underline"
              >
                {t.footer.links.airline}
              </a>
              <a
                href="#"
                className="transition-colors hover:text-white focus:outline-none focus:underline"
              >
                {t.footer.links.corporate}
              </a>
            </div>
          </div>
        </div>
      </footer>

      <Chatbot t={t.chatbot} />
    </div>
  );
}

export default Home;
