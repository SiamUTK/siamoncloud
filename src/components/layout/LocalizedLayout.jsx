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
  const { lang, setLang, loading } = useLanguage();

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

  if (!safeRouteLang) {
    return null;
  }

  if (loading || safeRouteLang !== lang) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-6">
        <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-2xl">
          <div className="h-5 w-56 rounded-full bg-gradient-to-r from-slate-700/70 via-slate-500/80 to-slate-700/70 animate-pulse" />
          <div className="mt-5 h-3 w-full rounded bg-gradient-to-r from-slate-700/70 via-slate-500/70 to-slate-700/70 animate-pulse" />
          <div className="mt-3 h-3 w-11/12 rounded bg-gradient-to-r from-slate-700/70 via-slate-500/70 to-slate-700/70 animate-pulse" />
          <div className="mt-3 h-3 w-9/12 rounded bg-gradient-to-r from-slate-700/70 via-slate-500/70 to-slate-700/70 animate-pulse" />
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="h-20 rounded-2xl bg-gradient-to-r from-slate-700/60 via-slate-500/60 to-slate-700/60 animate-pulse" />
            <div className="h-20 rounded-2xl bg-gradient-to-r from-slate-700/60 via-slate-500/60 to-slate-700/60 animate-pulse" />
            <div className="h-20 rounded-2xl bg-gradient-to-r from-slate-700/60 via-slate-500/60 to-slate-700/60 animate-pulse" />
          </div>
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
