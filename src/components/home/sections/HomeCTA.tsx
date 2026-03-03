// @ts-nocheck
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useLanguage from "@/i18n/useLanguage";

export default function HomeCTA() {
  const { lang, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[url('/images/background/bg-cta-luxury.webp')] bg-center bg-no-repeat py-20 md:bg-cover md:py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-transparent" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-white">
        <div className="rounded-3xl border border-white/20 bg-white/5 p-8 text-center backdrop-blur-[1px] md:p-12">
          <h2 className="mb-6 text-3xl font-bold uppercase md:text-5xl">
            {t("home_cta_title", "Ready to")}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {t("home_cta_primary", "Transform")}
            </span>{" "}
            {t("home_cta_secondary", "Your Travel Experience?")}
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-slate-200">
            {t("home_cta_desc")}
          </p>
          <Link
            to={`/${lang}/contact`}
            aria-label={t("footer_cta_button", "Book Strategy Call")}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-10 py-4 text-lg font-bold text-slate-950 transition hover:scale-[1.02]"
          >
            {t("footer_cta_button", "Book Strategy Call")}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
