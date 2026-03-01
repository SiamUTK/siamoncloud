import { Link } from "react-router-dom";
import useLanguage from "@/i18n/useLanguage";
import Container from "./PageContainer";

function Footer() {
  const { t, lang } = useLanguage();
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 backdrop-blur-sm">
      <Container className="flex flex-col md:flex-row h-auto md:h-16 items-center justify-between gap-2 py-6 md:py-0">
        <div className="text-sm text-slate-400">{t("footer_copyright")}</div>
        <nav className="flex flex-wrap gap-4 text-sm text-slate-400">
          <Link
            to={`/${lang}/terms`}
            className="hover:text-cyan-300 underline-offset-2 hover:underline focus:outline-none focus:underline"
          >
            {t("legal_terms_short")}
          </Link>
          <Link
            to={`/${lang}/privacy`}
            className="hover:text-cyan-300 underline-offset-2 hover:underline focus:outline-none focus:underline"
          >
            {t("legal_privacy_short")}
          </Link>
          <Link
            to={`/${lang}/cookies`}
            className="hover:text-cyan-300 underline-offset-2 hover:underline focus:outline-none focus:underline"
          >
            {t("legal_cookies_short")}
          </Link>
        </nav>
      </Container>
    </footer>
  );
}

export default Footer;
