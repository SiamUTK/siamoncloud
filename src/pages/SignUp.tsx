import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getSupabaseClient } from "@/lib/supabaseClient";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

function SignUp() {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  usePageMeta({
    title: t("signup_seo_title"),
    description: t("signup_seo_desc"),
    scrollToTop: true,
  });

  const validate = () => {
    if (!email.trim()) {
      setError(t("signup_error_empty_email"));
      return false;
    }

    if (!password) {
      setError(t("signup_error_empty_password"));
      return false;
    }

    if (password.length < 8) {
      setError(t("signup_error_weak"));
      return false;
    }

    if (password !== confirmPassword) {
      setError(t("signup_error_mismatch"));
      return false;
    }

    setError("");
    return true;
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (!validate() || loading) return;

    setLoading(true);

    try {
      const client = getSupabaseClient();
      if (!client) {
        setError(t("signup_error_generic"));
        return;
      }

      const { data, error: authError } = await client.auth.signUp({
        email: email.trim(),
        password,
      });

      if (authError) {
        if (authError.message.includes("already registered")) {
          setError(t("signup_error_exists"));
        } else if (authError.message.includes("password")) {
          setError(t("signup_error_weak"));
        } else {
          setError(authError.message || t("signup_error_generic"));
        }
        return;
      }

      if (data) {
        setSuccess(true);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => navigate(`/${lang}/login`), 1700);
      }
    } catch {
      setError(t("signup_error_generic"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dark relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.15),transparent_50%)]" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[50vh] bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_50%)]" />

      <div className="relative z-10">
        <Navbar />

        <main className="mx-auto w-full max-w-7xl px-6 pb-24 pt-8 sm:px-10">
          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-sm">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                {t("signup_title")}
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {t("signup_desc")}
              </p>

              {success && (
                <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                  {t("signup_success")}
                </div>
              )}

              {error && (
                <div className="mt-6 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
                  {error}
                </div>
              )}

              <form
                className="mt-6 space-y-5"
                onSubmit={handleSignUp}
                noValidate
              >
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t("signup_email")}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (error) setError("");
                    }}
                    placeholder={t("signup_email_placeholder")}
                    disabled={loading}
                    className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 disabled:opacity-70"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t("signup_password")}
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      if (error) setError("");
                    }}
                    placeholder={t("signup_password_placeholder")}
                    disabled={loading}
                    className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 disabled:opacity-70"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t("signup_confirm_password")}
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                      if (error) setError("");
                    }}
                    placeholder={t("signup_confirm_password_placeholder")}
                    disabled={loading}
                    className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 disabled:opacity-70"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-lift disabled:opacity-70"
                >
                  {loading ? t("signup_loading") : t("signup_submit")}
                </button>
              </form>

              <p className="mt-6 text-sm text-slate-300">
                {t("signup_have_account")}{" "}
                <Link
                  className="font-semibold text-cyan-300 hover:text-cyan-200"
                  to={`/${lang}/login`}
                >
                  {t("signup_login_link")}
                </Link>
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default SignUp;
