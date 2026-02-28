import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Menu,
  MessageCircle,
  PhoneCall,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Globe,
  Headphones,
} from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import { useLocaleRouting } from "../lib/localeRouting";

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
      badge: "Get in Touch",
      title: "Connect with",
      titleAccent: "Siam On Cloud",
      desc: "Our expert team is ready to assist you with travel management, digital solutions, and global connectivity. Reach out to us today.",
    },
    info: {
      title: "Contact Information",
      subtitle:
        "Find us in the heart of Bangkok or reach out via digital channels.",
      phone: "Phone Support",
      email: "Official Email",
      hours: "Business Hours",
      hoursDetail: "Mon-Sat (09:00 - 18:00)",
      location: "Headquarters",
      address:
        "319 Chamchuri Square Building, 24th Floor, Phayathai Road, Pathumwan District, Bangkok 10330, Thailand",
    },
    form: {
      title: "Direct Inquiry",
      subtitle:
        "Send us a message and we will get back to you within 24 hours.",
      name: "Full Name",
      namePlaceholder: "John Doe",
      email: "Email Address",
      emailPlaceholder: "john@example.com",
      subject: "Subject",
      subjectPlaceholder: "How can we help you?",
      message: "Message",
      messagePlaceholder: "Write your message here...",
      submit: "Send Message",
      success: "Your message has been sent successfully!",
    },
    support: {
      title: "Why Contact Us?",
      card1Title: "Expert Guidance",
      card1Desc: "Over 20 years of experience in travel and tech management.",
      card2Title: "Fast Response",
      card2Desc: "Our team prioritizes your inquiries for seamless service.",
      card3Title: "Secure Data",
      card3Desc: "Your privacy and business data are handled with care.",
    },
    footer: {
      tagline:
        "SIAM ON CLOUD CO., LTD. Elevating Your Journey, Amplify Success with modern technology and global expertise.",
      hq: "Headquarters",
      company: "Company",
      legal: "Legal",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
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
      badge: "ติดต่อเรา",
      title: "เชื่อมต่อกับ",
      titleAccent: "Siam On Cloud",
      desc: "ทีมผู้เชี่ยวชาญของเราพร้อมสนับสนุนคุณ ทั้งด้านการจัดการการเดินทาง โซลูชันดิจิทัล และการเชื่อมต่อระดับโลก",
    },
    info: {
      title: "ข้อมูลการติดต่อ",
      subtitle: "พบกับเราใจกลางกรุงเทพฯ หรือติดต่อผ่านช่องทางดิจิทัลที่สะดวก",
      phone: "โทรศัพท์",
      email: "อีเมลติดต่อทางการ",
      hours: "เวลาทำการ",
      hoursDetail: "จันทร์-เสาร์ (09:00 - 18:00)",
      location: "สำนักงานใหญ่",
      address:
        "14/89 แฟลต 2 ชั้น 8 ซอยปลูกจิต ถนนพระราม 4 แขวงลุมพินี เขตปทุมวัน กรุงเทพฯ 10330",
    },
    form: {
      title: "ส่งข้อความถึงเรา",
      subtitle: "เราจะติดต่อกลับหาคุณสยามและลูกค้าทุกท่านภายใน 24 ชั่วโมงครับ",
      name: "ชื่อ-นามสกุล",
      namePlaceholder: "ชื่อของคุณ",
      email: "อีเมล",
      emailPlaceholder: "email@example.com",
      subject: "หัวข้อ",
      subjectPlaceholder: "มีอะไรให้เราช่วยไหมครับ?",
      message: "ข้อความ",
      messagePlaceholder: "พิมพ์ข้อความของคุณที่นี่...",
      submit: "ส่งข้อความ",
      success: "ส่งข้อความของคุณเรียบร้อยแล้ว!",
    },
    support: {
      title: "เราพร้อมดูแลคุณ",
      card1Title: "คำแนะนำที่เชี่ยวชาญ",
      card1Desc: "ประสบการณ์กว่า 20 ปีในอุตสาหกรรมการเดินทางและเทคโนโลยี",
      card2Title: "ตอบกลับรวดเร็ว",
      card2Desc: "ทีมงานของเราให้ความสำคัญกับทุกคำขอเพื่อบริการที่ไร้รอยต่อ",
      card3Title: "ความปลอดภัยของข้อมูล",
      card3Desc:
        "ข้อมูลธุรกิจและความเป็นส่วนตัวของคุณจะได้รับการดูแลอย่างดีที่สุด",
    },
    footer: {
      tagline:
        "บริษัท สยามออนคลาวด์ จำกัด ยกระดับการเดินทางของคุณด้วยเทคโนโลยีที่ทันสมัยและความเชี่ยวชาญระดับสากล",
      hq: "สำนักงานใหญ่",
      company: "บริษัท",
      legal: "กฎหมาย",
      terms: "ข้อตกลงการใช้งาน",
      privacy: "นโยบายความเป็นส่วนตัว",
      links: {
        cloud: "คลาวด์โซลูชัน",
        airline: "พันธมิตรสายการบิน",
        corporate: "การเดินทางองค์กร",
      },
    },
  },
};

const contactImages = {
  hero: "https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-02.webp",
  map: "https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-01.webp",
  support:
    "https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/images/hero-img-03.webp",
};

export default function Contact() {
  const { locale, withLocalePath, switchLocale } = useLocaleRouting();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const lang = locale;
  const t = translations[lang];

    // SEO Meta
    import PageMeta from "../components/seo/PageMeta";

    const metaTitle = lang === "th"
      ? "Siam On Cloud | ติดต่อเรา"
      : "Siam On Cloud | Contact Us";
    const metaDescription = lang === "th"
      ? "ติดต่อ Siam On Cloud เพื่อโซลูชันการเดินทางและเทคโนโลยีสำหรับธุรกิจ"
      : "Connect with Siam On Cloud for luxury travel and technology solutions for your business.";
    const metaImage = "https://siamon.cloud/og-cover.jpg";
    const metaCanonical = `https://siamon.cloud/contact${lang === "th" ? "?lang=th" : ""}`;

    // ...existing code...

    return (
      <>
        <PageMeta
          title={metaTitle}
          description={metaDescription}
          image={metaImage}
          canonical={metaCanonical}
        />
        {/* ...existing page content... */}
      </>

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("soc_locale", locale);
  }, [locale]);

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "" // honeypot
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Validation
  const validate = () => {
    const errs = {};
    if (!form.name || form.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.message || form.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    // Honeypot
    if (form.company) {
      errs.company = "Spam detected.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({});
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // Simulate async submit
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setForm({ name: "", email: "", subject: "", message: "", company: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth bg-white font-sans text-slate-800">
      <nav
        className="fixed z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md"
        aria-label="Main Navigation"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <Link
            to={withLocalePath("/")}
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
                to={withLocalePath("/")}
                className="rounded px-1 transition-colors hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
              >
                {t.nav.home}
              </Link>
              <Link
                to={withLocalePath("/#about")}
                className="rounded px-1 transition-colors hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
              >
                {t.nav.about}
              </Link>
              <Link
                to={withLocalePath("/services")}
                className="rounded px-1 transition-colors hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
              >
                {t.nav.services}
              </Link>
              <Link
                to={withLocalePath("/contact")}
                className="rounded px-1 font-bold text-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
                aria-current="page"
              >
                {t.nav.contact}
              </Link>
              <Link
                to={withLocalePath("/terms")}
                className="rounded px-1 transition-colors hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                role="menuitem"
              >
                {t.footer.terms}
              </Link>
            </div>

            <div
              className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-100 p-1"
              aria-label="Language Selector"
            >
              <button
                onClick={() => switchLocale("en")}
                className={`rounded-md px-2 py-1 text-xs font-bold transition-all ${
                  lang === "en"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => switchLocale("th")}
                className={`rounded-md px-2 py-1 text-xs font-bold transition-all ${
                  lang === "th"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-400 hover:text-slate-700"
                }`}
              >
                TH
              </button>
            </div>

            <div className="hidden gap-3 sm:flex">
              <button className="px-2 py-1 text-sm font-semibold text-[#0A2540] hover:text-cyan-600">
                {t.nav.login}
              </button>
              <button className="rounded-full bg-gradient-to-r from-[#0A2540] to-[#06B6D4] px-5 py-2 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90">
                {t.nav.register}
              </button>
            </div>
            <button
              className="p-1 text-slate-600 md:hidden"
              aria-label="Open mobile menu"
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section
          className="relative overflow-hidden bg-[#0A2540] pb-20 pt-32 lg:pb-32 lg:pt-48"
          aria-label="Contact Us Hero"
        >
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src={contactImages.hero}
              alt="Bangkok City Connectivity"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/60 to-white"></div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur-md">
              <Sparkles
                size={16}
                className="text-cyan-400"
                aria-hidden="true"
              />
              {t.hero.badge}
            </div>
            <h1 className="mb-6 text-5xl font-black leading-tight text-[#0A2540] lg:text-7xl">
              {t.hero.title} <br />
              <span className="text-cyan-600">{t.hero.titleAccent}</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-700">
              {t.hero.desc}
            </p>
          </div>
        </section>

        <section className="bg-white py-24" aria-labelledby="contact-heading">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col gap-16 lg:flex-row">
              <div className="space-y-12 lg:w-1/2">
                <div>
                  <h2
                    id="contact-heading"
                    className="mb-4 text-4xl font-bold text-[#0A2540]"
                  >
                    {t.info.title}
                  </h2>
                  <p className="text-lg text-slate-500">{t.info.subtitle}</p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 text-cyan-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-400">
                        {t.info.phone}
                      </p>
                      <a
                        href="tel:+66990009588"
                        className="text-lg font-bold text-[#0A2540] transition-colors hover:text-cyan-600"
                      >
                        +66 99 000 9588
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 text-cyan-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-400">
                        {t.info.email}
                      </p>
                      <a
                        href="mailto:info@siamon.cloud"
                        className="text-lg font-bold text-[#0A2540] transition-colors hover:text-cyan-600"
                      >
                        info@siamon.cloud
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 text-cyan-600">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-400">
                        {t.info.hours}
                      </p>
                      <p className="text-lg font-bold text-[#0A2540]">
                        {t.info.hoursDetail}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 text-cyan-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-400">
                        {t.info.location}
                      </p>
                      <p className="text-lg font-bold text-[#0A2540]">
                        Chamchuri Square, 24F
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative aspect-video overflow-hidden rounded-[3rem] border border-slate-100 shadow-2xl md:h-80 md:aspect-auto">
                  <img
                    src={contactImages.map}
                    alt="Siam On Cloud Location at Chamchuri Square"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#0A2540]/60 to-transparent p-8">
                    <p className="mb-2 text-lg font-bold text-white">
                      {t.info.address}
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-400 transition-colors hover:text-white"
                    >
                      Open in Google Maps <ArrowRight size={16} />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                  <a
                    href="https://line.me/R/ti/p/@siamoncloud"
                    className="flex flex-1 items-center justify-center gap-3 rounded-3xl bg-[#00B900] p-5 font-bold text-white shadow-lg shadow-green-200 transition-opacity hover:opacity-90"
                  >
                    <MessageCircle size={24} /> LINE: @siamoncloud
                  </a>
                  <a
                    href="https://wa.me/66990009588"
                    className="flex flex-1 items-center justify-center gap-3 rounded-3xl bg-[#25D366] p-5 font-bold text-white shadow-lg shadow-green-200 transition-opacity hover:opacity-90"
                  >
                    <PhoneCall size={24} /> WhatsApp
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-[4rem] border border-slate-100 bg-slate-50 p-10 shadow-sm lg:p-16">
                  <div className="absolute right-0 top-0 p-8 opacity-5">
                    <Plane size={120} className="rotate-45" />
                  </div>

                  <div className="relative z-10">
                    <h3 className="mb-4 text-3xl font-bold text-[#0A2540]">
                      {t.form.title}
                    </h3>
                    <p className="mb-10 text-slate-500">{t.form.subtitle}</p>

                    {isSubmitted ? (
                      <div className="animate-fade-in flex flex-col items-center rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center text-emerald-700">
                        <CheckCircle2 size={48} className="mb-4" />
                        <p className="text-xl font-bold">{t.form.success}</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label className="ml-2 text-sm font-bold text-[#0A2540]">
                              {t.form.name}
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              minLength={2}
                              required
                              placeholder={t.form.namePlaceholder}
                              className={`w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition-all focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-100 ${errors.name ? "border-red-400" : ""}`}
                              aria-invalid={!!errors.name}
                              aria-describedby="name-error"
                            />
                            {errors.name && <div id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</div>}
                          </div>
                          <div className="space-y-2">
                            <label className="ml-2 text-sm font-bold text-[#0A2540]">
                              {t.form.email}
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              required
                              placeholder={t.form.emailPlaceholder}
                              className={`w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition-all focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-100 ${errors.email ? "border-red-400" : ""}`}
                              aria-invalid={!!errors.email}
                              aria-describedby="email-error"
                            />
                            {errors.email && <div id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</div>}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="ml-2 text-sm font-bold text-[#0A2540]">
                            {t.form.subject}
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            required
                            placeholder={t.form.subjectPlaceholder}
                            className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition-all focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="ml-2 text-sm font-bold text-[#0A2540]">
                            {t.form.message}
                          </label>
                          <textarea
                            rows="5"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            minLength={10}
                            placeholder={t.form.messagePlaceholder}
                            className={`w-full resize-none rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition-all focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-100 ${errors.message ? "border-red-400" : ""}`}
                            aria-invalid={!!errors.message}
                            aria-describedby="message-error"
                          ></textarea>
                          {errors.message && <div id="message-error" className="text-red-500 text-xs mt-1">{errors.message}</div>}
                        </div>
                        {/* Honeypot field: visually hidden, offscreen */}
                        <div style={{position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden'}} aria-hidden="true">
                          <label htmlFor="company">Company</label>
                          <input
                            type="text"
                            name="company"
                            id="company"
                            tabIndex="-1"
                            autoComplete="off"
                            value={form.company}
                            onChange={handleChange}
                          />
                        </div>
                        {errors.company && <div className="text-red-500 text-xs mt-1">{errors.company}</div>}
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0A2540] to-[#06B6D4] py-5 text-lg font-bold text-white shadow-xl transition-opacity hover:opacity-95 disabled:opacity-60"
                          disabled={loading}
                        >
                          <Send size={20} /> {t.form.submit}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-slate-50 py-24"
          aria-labelledby="support-heading"
        >
          <div className="mx-auto max-w-7xl px-4">
            <h2
              id="support-heading"
              className="mb-16 text-center text-4xl font-bold text-[#0A2540]"
            >
              {t.support.title}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <article className="group rounded-[3rem] border border-slate-100 bg-white p-10 shadow-sm transition-all hover:shadow-xl">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A2540] text-white transition-transform group-hover:scale-110">
                  <Globe size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  {t.support.card1Title}
                </h3>
                <p className="leading-relaxed text-slate-500">
                  {t.support.card1Desc}
                </p>
              </article>

              <article className="group rounded-[3rem] border border-slate-100 bg-white p-10 shadow-sm transition-all hover:shadow-xl">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-600 text-white transition-transform group-hover:scale-110">
                  <Headphones size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  {t.support.card2Title}
                </h3>
                <p className="leading-relaxed text-slate-500">
                  {t.support.card2Desc}
                </p>
              </article>

              <article className="group rounded-[3rem] border border-slate-100 bg-white p-10 shadow-sm transition-all hover:shadow-xl">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A2540] text-white transition-transform group-hover:scale-110">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#0A2540]">
                  {t.support.card3Title}
                </h3>
                <p className="leading-relaxed text-slate-500">
                  {t.support.card3Desc}
                </p>
              </article>
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
                <img
                  src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/logos/logo-white-online2.png"
                  alt="Siam On Cloud Logo"
                  className="h-12 w-auto object-contain"
                />
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
                <h4 className="mb-6 font-bold text-white">
                  {t.footer.company}
                </h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      to={withLocalePath("/")}
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      {t.nav.home}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={withLocalePath("/#about")}
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      {t.nav.about}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={withLocalePath("/services")}
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      {t.nav.services}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <h4 className="mb-6 font-bold text-white">{t.footer.legal}</h4>
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      to={withLocalePath("/terms")}
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      {t.footer.terms}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={withLocalePath("/privacy-policy")}
                      className="hover:text-cyan-400 focus:outline-none focus:underline"
                    >
                      {t.footer.privacy}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="mb-6 font-bold text-white">{t.footer.hq}</h4>
                <address className="not-italic text-sm leading-relaxed">
                  {t.info.address}
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
    </div>
  );
}
