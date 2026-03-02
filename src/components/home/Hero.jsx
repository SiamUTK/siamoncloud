import { ArrowRight, Headphones, Sparkles, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import useLanguage from "@/i18n/useLanguage";

function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      {/* 🌌 Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/10" />
        <div className="absolute right-[-120px] top-1/3 h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/10" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          {/* ⭐ Premium badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 backdrop-blur-sm dark:border-cyan-400/30 dark:bg-cyan-500/10 dark:text-cyan-200">
            <Sparkles size={16} />
            {t("hero_badge")}
          </div>

          {/* 🔥 Headline */}
          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-50">
            {t("hero_title_1")}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
              {t("hero_title_2")}
            </span>
          </h1>

          {/* 🧠 Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400">
            {t("hero_desc")}
          </p>

          {/* 🚀 CTA */}
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              to={`/${lang}/services`}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-lift sm:w-auto"
            >
              {t("btn_explore")}
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to={`/${lang}/contact`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-cyan-400 hover:text-cyan-700 hover:shadow-soft dark:border-slate-600 dark:bg-transparent dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300 sm:w-auto"
            >
              <Headphones size={20} />
              {t("btn_expert")}
            </Link>
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            {t("home_cta_micro_trust")}
          </p>
          <p className="mx-auto mt-1 max-w-2xl text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400">
            {t("home_cta_no_obligation")}
          </p>

          {/* 🛡️ Trust bar (NEW — conversion booster) */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              <span>{t("hero_trust_experience")}</span>
            </div>
            <div className="hidden h-4 w-px bg-slate-300 dark:bg-slate-700 sm:block" />
            <div>{t("hero_trust_clients")}</div>
            <div className="hidden h-4 w-px bg-slate-300 dark:bg-slate-700 sm:block" />
            <div>{t("hero_trust_support")}</div>
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-slate-400/90">
            {t("hero_micro_proof")}
          </p>
        </div>

        {/* 📊 Premium stats */}
        <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            { value: "20+", key: "stats_years" },
            { value: "10K+", key: "stats_clients" },
            { value: "50K+", key: "stats_bookings" },
            { value: "24/7", key: "stats_support" },
          ].map((item) => (
            <div
              key={item.key}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-lift dark:border-slate-800 dark:bg-slate-900/70 dark:backdrop-blur dark:hover:border-cyan-500/40 dark:hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)]"
            >
              <div className="mb-2 text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                {item.value}
              </div>
              <div className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {t(item.key)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
