import { ArrowRight, Headphones, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import useLanguage from "@/i18n/useLanguage";

function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-opacity duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950 text-cyan-300 text-sm font-semibold mb-6">
            <Sparkles size={16} />
            {t("hero_badge")}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 leading-tight">
            {t("hero_title_1")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              {t("hero_title_2")}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed">
            {t("hero_desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/${lang}/services`}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-xl transform hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
            >
              {t("btn_explore")}
              <ArrowRight size={20} />
            </Link>
            <Link
              to={`/${lang}/contact`}
              className="px-8 py-4 rounded-xl border-2 border-slate-300 text-slate-200 font-semibold hover:border-cyan-500 hover:text-cyan-300 transition-all inline-flex items-center justify-center gap-2"
            >
              <Headphones size={20} />
              {t("btn_expert")}
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <div className="text-center p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm">
            <div className="text-3xl font-bold text-cyan-600 mb-2">20+</div>
            <div className="text-slate-300 text-sm font-medium">
              {t("stats_years")}
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm">
            <div className="text-3xl font-bold text-cyan-600 mb-2">10K+</div>
            <div className="text-slate-300 text-sm font-medium">
              {t("stats_clients")}
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm">
            <div className="text-3xl font-bold text-cyan-600 mb-2">50K+</div>
            <div className="text-slate-300 text-sm font-medium">
              {t("stats_bookings")}
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm">
            <div className="text-3xl font-bold text-cyan-600 mb-2">24/7</div>
            <div className="text-slate-300 text-sm font-medium">
              {t("stats_support")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
