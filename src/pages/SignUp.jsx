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
      title: "Create Your Account",
      subtitle: "Join Siam On Cloud in seconds — fast, secure, and simple.",
      email: "Email",
      emailPlaceholder: "your@email.com",
      password: "Password",
      passwordPlaceholder: "8+ characters",
      confirmPassword: "Confirm Password",
      confirmPasswordPlaceholder: "Confirm your password",
      createAccount: "Create Account",
      haveAccount: "Already have an account?",
      login: "Log in here",
      successTitle: "Welcome aboard!",
      successMessage: "Your account has been created. Redirecting to login...",
      errorGeneric: "Something went wrong. Please try again.",
      errorEmailExists: "This email is already registered. Try logging in.",
      errorWeakPassword: "Password must be at least 8 characters.",
      errorMismatch: "Passwords don't match.",
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
      title: "สร้างบัญชีของคุณ",
      subtitle:
        "เข้าร่วม Siam On Cloud ในเวลาเพียงไม่กี่วินาที — รวดเร็ว ปลอดภัย และง่ายดาย",
      email: "อีเมล",
      emailPlaceholder: "your@email.com",
      password: "รหัสผ่าน",
      passwordPlaceholder: "8+ ตัวอักษร",
      confirmPassword: "ยืนยันรหัสผ่าน",
      confirmPasswordPlaceholder: "ยืนยันรหัสผ่านของคุณ",
      createAccount: "สร้างบัญชี",
      haveAccount: "มีบัญชีแล้วหรือ?",
      login: "เข้าสู่ระบบที่นี่",
      successTitle: "ยินดีต้อนรับ!",
      successMessage: "บัญชีของคุณได้รับการสร้างแล้ว กำลังเปลี่ยนเส้นทาง...",
      errorGeneric: "มีข้อผิดพลาด โปรดลองใหม่",
      errorEmailExists: "อีเมลนี้ลงทะเบียนแล้ว ลองเข้าสู่ระบบ",
      errorWeakPassword: "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร",
      errorMismatch: "รหัสผ่านไม่ตรงกัน",
      errorEmptyEmail: "ต้องระบุอีเมล",
      errorEmptyPassword: "ต้องระบุรหัสผ่าน",
    },
  },
};

function SignUp() {
  usePageMeta({
    title: "Siam On Cloud | Sign Up",
    description: "Create your Siam On Cloud account in seconds.",
    scrollToTop: true,
  });

  const navigate = useNavigate();
  const [lang, setLang] = useState("en");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    if (password.length < 8) {
      setError(t.page.errorWeakPassword);
      return false;
    }
    if (password !== confirmPassword) {
      setError(t.page.errorMismatch);
      return false;
    }
    setError("");
    return true;
  };

  const handleSignUp = async (e) => {
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

      const { data, error: authError } = await client.auth.signUp({
        email: email.trim(),
        password,
      });

      if (authError) {
        if (authError.message.includes("already registered")) {
          setError(t.page.errorEmailExists);
        } else if (authError.message.includes("password")) {
          setError(t.page.errorWeakPassword);
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
        setConfirmPassword("");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      setError(t.page.errorGeneric);
      console.error("[SignUp Error]", err);
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
                href="/login"
                className="rounded px-2 py-1 text-sm font-semibold text-[#0A2540] hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              >
                {t.nav.login}
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

        {/* Sign Up Form */}
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
              <form onSubmit={handleSignUp} noValidate>
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
                <div className="mb-5">
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
                    autoComplete="new-password"
                    required
                  />
                </div>

                {/* Confirm Password Field */}
                <div className="mb-6">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-semibold text-slate-900 mb-2"
                  >
                    {t.page.confirmPassword}
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder={t.page.confirmPasswordPlaceholder}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      if (error) setError("");
                    }}
                    disabled={loading}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm transition-all focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/20 disabled:bg-slate-50 disabled:text-slate-500"
                    autoComplete="new-password"
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
                      {t.page.createAccount}
                    </span>
                  ) : (
                    t.page.createAccount
                  )}
                </button>

                {/* Login Link */}
                <div className="mt-6 text-center text-sm text-slate-600">
                  {t.page.haveAccount}{" "}
                  <a
                    href="/login"
                    className="font-semibold text-cyan-600 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded px-1"
                  >
                    {t.page.login}
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

export default SignUp;
