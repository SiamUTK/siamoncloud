import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/ui/Icon";
import PageContainer from "../components/layout/PageContainer";
import Footer from "../components/layout/Footer";
import { getSupabaseClient } from "../lib/supabaseClient";
import usePageMeta from "../hooks/usePageMeta";

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
    page: {
      title: "Welcome Back",
      subtitle: "Log in to continue your journey with Siam On Cloud.",
      email: "Email",
      emailPlaceholder: "your@email.com",
      password: "Password",
      passwordPlaceholder: "Enter your password",
      logIn: "Log In",
      noAccount: "Don't have an account?",
      signup: "Sign up here",
      successTitle: "Success!",
      successMessage: "You're logged in. Redirecting...",
      errorGeneric: "Something went wrong. Please try again.",
      errorInvalid: "Invalid email or password. Please try again.",
      errorEmptyEmail: "Email is required.",
      errorEmptyPassword: "Password is required.",
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
    page: {
      title: "ยินดีต้อนรับกลับ",
      subtitle:
        "เข้าสู่ระบบเพื่อดำเนินการต่อในการเดินทางของคุณกับ Siam On Cloud",
      email: "อีเมล",
      emailPlaceholder: "your@email.com",
      password: "รหัสผ่าน",
      passwordPlaceholder: "ระบุรหัสผ่านของคุณ",
      logIn: "เข้าสู่ระบบ",
      noAccount: "ยังไม่มีบัญชี?",
      signup: "สมัครสมาชิกที่นี่",
      successTitle: "สำเร็จ!",
      successMessage: "คุณได้เข้าสู่ระบบแล้ว กำลังเปลี่ยนเส้นทาง...",
      errorGeneric: "มีข้อผิดพลาด โปรดลองใหม่",
      errorInvalid: "อีเมลหรือรหัสผ่านไม่ถูกต้อง โปรดลองใหม่",
      errorEmptyEmail: "ต้องระบุอีเมล",
      errorEmptyPassword: "ต้องระบุรหัสผ่าน",
    },
  },
};

function Login() {
  usePageMeta({
    title: "Siam On Cloud | Log In",
    description: "Securely log in to your Siam On Cloud account.",
    scrollToTop: true,
  });

  const navigate = useNavigate();
  const [lang, setLang] = useState("en");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const t = translations[lang];

  const validateForm = () => {
    if (!email.trim()) {
      setError(t.page.errorEmptyEmail);
      return false;
    }
    if (!password) {
      setError(t.page.errorEmptyPassword);
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm() || loading) return;

    setLoading(true);
    try {
      const client = getSupabaseClient();
      if (!client) {
        setError(t.page.errorGeneric);
        setLoading(false);
        return;
      }

      const { data, error: authError } = await client.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (authError) {
        if (authError.message.includes("Invalid login credentials")) {
          setError(t.page.errorInvalid);
        } else {
          setError(authError.message || t.page.errorGeneric);
        }
        setLoading(false);
        return;
      }

      if (data) {
        setSuccess(true);
        setEmail("");
        setPassword("");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (err) {
      setError(t.page.errorGeneric);
      console.error("[Login Error]", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth bg-white font-sans text-slate-800">
      {/* Navigation */}
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
              <a
                href="/signup"
                className="rounded-full bg-gradient-to-r from-[#0A2540] to-[#06B6D4] px-5 py-2 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
              >
                {t.nav.register}
              </a>
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

      {/* Main Content */}
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <PageContainer>
            <div className="mx-auto max-w-2xl">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#0A2540] sm:text-5xl">
                {t.page.title}
              </h1>
              <p className="text-lg text-slate-600">{t.page.subtitle}</p>
            </div>
          </PageContainer>
        </section>

        {/* Login Form */}
        <section className="flex items-center justify-center px-4">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-lg ring-1 ring-slate-100 p-8">
            {success ? (
              <div className="text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 mx-auto">
                  <Icon
                    name="CheckCircle"
                    size={28}
                    className="text-emerald-600"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="mb-2 text-xl font-bold text-slate-900">
                  {t.page.successTitle}
                </h2>
                <p className="text-sm text-slate-600">
                  {t.page.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleLogin} noValidate>
                {/* Email Field */}
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    {t.page.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder={t.page.emailPlaceholder}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    disabled={loading}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm transition-all focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/20 disabled:bg-slate-50 disabled:text-slate-500"
                    autoComplete="email"
                    required
                    autoFocus
                  />
                </div>

                {/* Password Field */}
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    {t.page.password}
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder={t.page.passwordPlaceholder}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError("");
                    }}
                    disabled={loading}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm transition-all focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/20 disabled:bg-slate-50 disabled:text-slate-500"
                    autoComplete="current-password"
                    required
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-5 rounded-lg bg-red-50 border border-red-200 p-3">
                    <p className="text-sm text-red-800 font-medium">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-gradient-to-r from-[#0A2540] to-[#06B6D4] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
                  aria-busy={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      {t.page.logIn}
                    </span>
                  ) : (
                    t.page.logIn
                  )}
                </button>

                {/* Sign Up Link */}
                <div className="mt-6 text-center text-sm text-slate-600">
                  {t.page.noAccount}{" "}
                  <a
                    href="/signup"
                    className="font-semibold text-cyan-600 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded px-1"
                  >
                    {t.page.signup}
                  </a>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Login;
