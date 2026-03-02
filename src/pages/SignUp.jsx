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
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
      <Navbar />

      <main className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70 dark:backdrop-blur dark:shadow-none">
          <h1 className="text-3xl font-bold">{t("signup_title")}</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
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

          <form className="mt-6 space-y-5" onSubmit={handleSignUp} noValidate>
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
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-cyan-500 disabled:opacity-70 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-cyan-400"
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
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-cyan-500 disabled:opacity-70 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-cyan-400"
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
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-cyan-500 disabled:opacity-70 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-cyan-400"
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

          <p className="mt-6 text-sm text-slate-600 dark:text-slate-400">
            {t("signup_have_account")}{" "}
            <Link
              className="font-semibold text-blue-600 hover:text-blue-700 dark:text-cyan-300 dark:hover:text-cyan-200"
              to={`/${lang}/login`}
            >
              {t("signup_login_link")}
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SignUp;
