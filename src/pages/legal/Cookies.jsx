import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

function Cookies() {
  const { t } = useLanguage();

  usePageMeta({
    title: t("cookies_seo_title"),
    description: t("cookies_seo_desc"),
    scrollToTop: true,
  });

  const rows = ["session", "preferences", "analytics", "marketing"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">{t("cookies_title")}</h1>
        <p className="mt-3 text-sm text-slate-400">
          {t("cookies_last_updated")}
        </p>
        <p className="mt-5 text-slate-300">{t("cookies_intro")}</p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-800/60 text-slate-200">
              <tr>
                <th className="px-4 py-3">{t("cookies_table_name")}</th>
                <th className="px-4 py-3">{t("cookies_table_purpose")}</th>
                <th className="px-4 py-3">{t("cookies_table_duration")}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((key) => (
                <tr
                  key={key}
                  className="border-t border-slate-800 text-slate-300"
                >
                  <td className="px-4 py-3">{t(`cookies_row_${key}_name`)}</td>
                  <td className="px-4 py-3">
                    {t(`cookies_row_${key}_purpose`)}
                  </td>
                  <td className="px-4 py-3">
                    {t(`cookies_row_${key}_duration`)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Cookies;
