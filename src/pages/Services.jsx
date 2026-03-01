import { Bot, Code2, HeartHandshake, Plane } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

function Services() {
  const { t } = useLanguage();

  usePageMeta({
    title: t("services_seo_title"),
    description: t("services_seo_desc"),
    scrollToTop: true,
  });

  const keys = ["ticketing", "lgbtq", "digital", "ai"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />

      <section className="px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            {t("services_badge")}
          </p>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
            {t("services_title")}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
            {t("services_desc")}
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {keys.map((key) => (
            <article
              key={key}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-sm backdrop-blur"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                {key === "ticketing" && <Plane className="h-5 w-5" />}
                {key === "lgbtq" && <HeartHandshake className="h-5 w-5" />}
                {key === "digital" && <Code2 className="h-5 w-5" />}
                {key === "ai" && <Bot className="h-5 w-5" />}
              </div>
              <h2 className="text-2xl font-semibold">
                {t(`services_${key}_title`)}
              </h2>
              <p className="mt-3 text-slate-400">{t(`services_${key}_desc`)}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li>{t(`services_${key}_point_1`)}</li>
                <li>{t(`services_${key}_point_2`)}</li>
                <li>{t(`services_${key}_point_3`)}</li>
              </ul>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services;
