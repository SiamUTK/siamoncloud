import { useTranslation } from "react-i18next";
const LAST_UPDATED = "February 27, 2026";
export default function Terms() {
  const { t } = useTranslation();
  return (
    <section className="bg-white dark:bg-slate-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
            {t("legal.terms.title")}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            {t("legal.terms.lastUpdated", { date: LAST_UPDATED })}
          </p>
        </header>
        <nav className="sticky top-4 z-10 hidden md:block mb-10">
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
            <li>
              <a href="#acceptance" className="hover:underline">
                {t("legal.terms.sections.acceptance")}
              </a>
            </li>
            <li>
              <a href="#eligibility" className="hover:underline">
                {t("legal.terms.sections.eligibility")}
              </a>
            </li>
            <li>
              <a href="#account" className="hover:underline">
                {t("legal.terms.sections.account")}
              </a>
            </li>
            <li>
              <a href="#permitted" className="hover:underline">
                {t("legal.terms.sections.permitted")}
              </a>
            </li>
            <li>
              <a href="#prohibited" className="hover:underline">
                {t("legal.terms.sections.prohibited")}
              </a>
            </li>
            <li>
              <a href="#ip" className="hover:underline">
                {t("legal.terms.sections.ip")}
              </a>
            </li>
            <li>
              <a href="#ai" className="hover:underline">
                {t("legal.terms.sections.ai")}
              </a>
            </li>
            <li>
              <a href="#thirdparty" className="hover:underline">
                {t("legal.terms.sections.thirdparty")}
              </a>
            </li>
            <li>
              <a href="#booking" className="hover:underline">
                {t("legal.terms.sections.booking")}
              </a>
            </li>
            <li>
              <a href="#liability" className="hover:underline">
                {t("legal.terms.sections.liability")}
              </a>
            </li>
            <li>
              <a href="#indemnification" className="hover:underline">
                {t("legal.terms.sections.indemnification")}
              </a>
            </li>
            <li>
              <a href="#suspension" className="hover:underline">
                {t("legal.terms.sections.suspension")}
              </a>
            </li>
            <li>
              <a href="#law" className="hover:underline">
                {t("legal.terms.sections.law")}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                {t("legal.terms.sections.contact")}
              </a>
            </li>
          </ul>
        </nav>
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h2 id="acceptance">{t("legal.terms.sections.acceptance")}</h2>
          <p>{t("legal.terms.acceptance")}</p>
          <h2 id="eligibility">{t("legal.terms.sections.eligibility")}</h2>
          <p>{t("legal.terms.eligibility")}</p>
          <h2 id="account">{t("legal.terms.sections.account")}</h2>
          <p>{t("legal.terms.account")}</p>
          <h2 id="permitted">{t("legal.terms.sections.permitted")}</h2>
          <p>{t("legal.terms.permitted")}</p>
          <h2 id="prohibited">{t("legal.terms.sections.prohibited")}</h2>
          <p>{t("legal.terms.prohibited")}</p>
          <h2 id="ip">{t("legal.terms.sections.ip")}</h2>
          <p>{t("legal.terms.ip")}</p>
          <h2 id="ai">{t("legal.terms.sections.ai")}</h2>
          <p>{t("legal.terms.ai")}</p>
          <h2 id="thirdparty">{t("legal.terms.sections.thirdparty")}</h2>
          <p>{t("legal.terms.thirdparty")}</p>
          <h2 id="booking">{t("legal.terms.sections.booking")}</h2>
          <p>{t("legal.terms.booking")}</p>
          <h2 id="liability">{t("legal.terms.sections.liability")}</h2>
          <p>{t("legal.terms.liability")}</p>
          <h2 id="indemnification">
            {t("legal.terms.sections.indemnification")}
          </h2>
          <p>{t("legal.terms.indemnification")}</p>
          <h2 id="suspension">{t("legal.terms.sections.suspension")}</h2>
          <p>{t("legal.terms.suspension")}</p>
          <h2 id="law">{t("legal.terms.sections.law")}</h2>
          <p>{t("legal.terms.law")}</p>
          <h2 id="contact">{t("legal.terms.sections.contact")}</h2>
          <p>{t("legal.terms.contact")}</p>
        </article>
      </div>
    </section>
  );
}
