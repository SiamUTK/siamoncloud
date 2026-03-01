import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

function Privacy() {
  const { t } = useLanguage();

  usePageMeta({
    title: t("privacy_seo_title"),
    description: t("privacy_seo_desc"),
    scrollToTop: true,
  });

  const sections = [
    "data",
    "usage",
    "sharing",
    "retention",
    "rights",
    "contact",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">{t("privacy_title")}</h1>
        <p className="mt-3 text-sm text-slate-400">
          {t("privacy_last_updated")}
        </p>
        <p className="mt-5 text-slate-300">{t("privacy_intro")}</p>

        <div className="mt-10 space-y-8">
          {sections.map((key, index) => (
            <section
              key={key}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur"
            >
              <h2 className="text-xl font-semibold">
                {index + 1}. {t(`privacy_${key}_title`)}
              </h2>
              <p className="mt-3 leading-relaxed text-slate-300">
                {t(`privacy_${key}_desc`)}
              </p>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Privacy;
