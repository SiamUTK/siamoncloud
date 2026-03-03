import { useEffect, useMemo } from "react";
import {
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import useLanguage from "@/i18n/useLanguage";
import detectLanguage, {
  DEFAULT_LANG,
  SUPPORTED_LANGS,
} from "@/i18n/detectLanguage";
import { syncHreflangLinks } from "@/i18n/hreflang";
import Navbar from "@/components/layout/Navbar";
import SiteLayout from "./SiteLayout";

function getFallbackLocalizedPath(pathname, fallbackLang) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${fallbackLang}`;
  }

  const maybeLocale = segments[0];
  const rest = maybeLocale.length === 2 ? segments.slice(1) : segments;

  return rest.length
    ? `/${fallbackLang}/${rest.join("/")}`
    : `/${fallbackLang}`;
}

function LocalizedLayout() {
  const { lang: routeLang = "" } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, setLang } = useLanguage();

  const safeRouteLang = useMemo(
    () => (SUPPORTED_LANGS.includes(routeLang) ? routeLang : null),
    [routeLang],
  );

  useEffect(() => {
    if (!safeRouteLang) {
      const fallbackLang = detectLanguage(location.pathname);
      const targetPath = getFallbackLocalizedPath(
        location.pathname,
        SUPPORTED_LANGS.includes(fallbackLang) ? fallbackLang : DEFAULT_LANG,
      );

      navigate(`${targetPath}${location.search}${location.hash}`, {
        replace: true,
      });
      return;
    }

    if (safeRouteLang !== lang) {
      setLang(safeRouteLang);
    }
  }, [
    safeRouteLang,
    setLang,
    lang,
    navigate,
    location.pathname,
    location.search,
    location.hash,
  ]);

  useEffect(() => {
    if (!safeRouteLang) {
      return;
    }

    syncHreflangLinks({
      lang: safeRouteLang,
      pathname: location.pathname,
      search: location.search,
    });
  }, [safeRouteLang, location.pathname, location.search]);

  return (
    <SiteLayout>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </SiteLayout>
  );
}

export function RootLanguageRedirect() {
  const detectedLang = detectLanguage();
  const safeLang = SUPPORTED_LANGS.includes(detectedLang)
    ? detectedLang
    : DEFAULT_LANG;

  return <Navigate to={`/${safeLang}`} replace />;
}

export default LocalizedLayout;
