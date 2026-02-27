import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "./PageContainer";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-slate-200 bg-white dark:bg-slate-900">
      <Container className="flex flex-col md:flex-row h-auto md:h-16 items-center justify-between gap-2 py-6 md:py-0">
        <div className="text-sm text-slate-500 dark:text-slate-400">
          © 2026 Siam On Cloud
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
          <Link
            to="/terms"
            className="hover:text-cyan-600 underline-offset-2 hover:underline focus:outline-none focus:underline"
          >
            {t("legal.terms.short")}
          </Link>
          <Link
            to="/privacy"
            className="hover:text-cyan-600 underline-offset-2 hover:underline focus:outline-none focus:underline"
          >
            {t("legal.privacy.short")}
          </Link>
          <Link
            to="/cookies"
            className="hover:text-cyan-600 underline-offset-2 hover:underline focus:outline-none focus:underline"
          >
            {t("legal.cookies.short")}
          </Link>
        </nav>
      </Container>
    </footer>
  );
}

export default Footer;
