import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getSupabaseClient } from "@/lib/supabaseClient";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

function Login() {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  usePageMeta({
    title: t("login_seo_title"),
    description: t("login_seo_desc"),
    scrollToTop: true,
  });

  const validate = () => {
    if (!email.trim()) {
      setError(t("login_error_empty_email"));
      return false;
    }

    if (!password) {
      setError(t("login_error_empty_password"));
      return false;
    }

    setError("");
    return true;
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!validate() || loading) return;

    setLoading(true);

    try {
      const client = getSupabaseClient();
      if (!client) {
        setError(t("login_error_generic"));
        return;
      }

      const { data, error: authError } = await client.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (authError) {
        if (authError.message.includes("Invalid login credentials")) {
          setError(t("login_error_invalid"));
        } else {
          setError(authError.message || t("login_error_generic"));
        }
        return;
      }

      if (data) {
        setSuccess(true);
        setEmail("");
        setPassword("");
        setTimeout(() => navigate(`/${lang}`), 1400);
      }
    } catch {
      setError(t("login_error_generic"));
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
                {t("login_title")}
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {t("login_desc")}
              </p>

              {success && (
                <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                  {t("login_success")}
                </div>
              )}

              {error && (
                <div className="mt-6 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
                  {error}
                </div>
              )}

              <form
                className="mt-6 space-y-5"
                onSubmit={handleLogin}
                noValidate
              >
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t("login_email")}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (error) setError("");
                    }}
                    placeholder={t("login_email_placeholder")}
                    disabled={loading}
                    className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 disabled:opacity-70"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t("login_password")}
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      if (error) setError("");
                    }}
                    placeholder={t("login_password_placeholder")}
                    disabled={loading}
                    className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 disabled:opacity-70"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-lift disabled:opacity-70"
                >
                  {loading ? t("login_loading") : t("login_submit")}
                </button>
              </form>

              <p className="mt-6 text-sm text-slate-300">
                {t("login_no_account")}{" "}
                <Link
                  className="font-semibold text-cyan-300 hover:text-cyan-200"
                  to={`/${lang}/signup`}
                >
                  {t("login_signup_link")}
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

export default Login;
