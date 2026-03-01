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
  const { lang, setLang, t, loading } = useLanguage();

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

    syncHreflangLinks({ lang: safeRouteLang, pathname: location.pathname });
  }, [safeRouteLang, location.pathname]);

  if (!safeRouteLang) {
    return null;
  }

  if (loading || safeRouteLang !== lang) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-6">
        <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm">
          <div className="h-4 w-36 rounded bg-slate-800 animate-pulse" />
          <div className="mt-4 h-3 w-full rounded bg-slate-800/80 animate-pulse" />
          <div className="mt-2 h-3 w-5/6 rounded bg-slate-800/70 animate-pulse" />
          <p className="mt-6 text-sm text-slate-400">{t("loading_label")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="transition-opacity duration-300 opacity-100">
      <Outlet />
    </div>
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
