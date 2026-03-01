import { ArrowRight, CheckCircle2, Shield, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

function HomePage() {
  const { t, lang } = useLanguage();

  usePageMeta({
    title: t("seo.title"),
    description: t("seo.description"),
    scrollToTop: true,
  });

  const serviceKeys = ["travel", "lgbtq", "digital", "automation"];
  const whyKeys = ["expertise", "security", "speed"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <Hero key={lang} />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {t("home_services_title")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">
              {t("home_services_desc")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceKeys.map((key) => (
              <article
                key={key}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-slate-50">
                  {t(`home_services_${key}_title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {t(`home_services_${key}_desc`)}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-400" />
                    <span>{t(`home_services_${key}_point_1`)}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-400" />
                    <span>{t(`home_services_${key}_point_2`)}</span>
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/40 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {t("home_why_title")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">
              {t("home_why_desc")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {whyKeys.map((key) => (
              <article
                key={key}
                className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                  {key === "expertise" && <Sparkles className="h-5 w-5" />}
                  {key === "security" && <Shield className="h-5 w-5" />}
                  {key === "speed" && <Zap className="h-5 w-5" />}
                </div>
                <h3 className="text-lg font-semibold text-slate-50">
                  {t(`home_why_${key}_title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {t(`home_why_${key}_desc`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-10 text-center backdrop-blur">
          <h2 className="text-3xl font-bold text-slate-50">
            {t("home_cta_title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            {t("home_cta_desc")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to={`/${lang}/services`}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:shadow-xl"
            >
              {t("home_cta_primary")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to={`/${lang}/contact`}
              className="rounded-xl border border-slate-700 px-7 py-3 font-semibold text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
            >
              {t("home_cta_secondary")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
