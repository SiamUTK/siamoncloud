import { Link } from "react-router-dom";
import useLanguage from "@/i18n/useLanguage";

function NotFound() {
  const { t, lang } = useLanguage();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center text-white">
      <div>
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-300">
          404
        </p>
        <h1 className="mb-3 text-3xl font-bold">{t("notfound_title")}</h1>
        <p className="mb-8 text-slate-300">{t("notfound_desc")}</p>
        <Link
          to={`/${lang}`}
          className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white"
        >
          {t("notfound_cta")}
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
