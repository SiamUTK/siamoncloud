import { Compass, HeartHandshake, Target } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

function About() {
  const { t } = useLanguage();

  usePageMeta({
    title: t("about_seo_title"),
    description: t("about_seo_desc"),
    scrollToTop: true,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />

      <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            {t("about_badge")}
          </p>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
            {t("about_title")}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
            {t("about_desc")}
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-7 backdrop-blur">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
              <Target className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold">
              {t("about_mission_title")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {t("about_mission_desc")}
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-7 backdrop-blur">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
              <Compass className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold">{t("about_vision_title")}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {t("about_vision_desc")}
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-7 backdrop-blur">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold">{t("about_values_title")}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {t("about_values_desc")}
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
