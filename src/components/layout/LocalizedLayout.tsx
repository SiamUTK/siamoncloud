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
      <div className="min-h-screen bg-slate-50 px-6 dark:bg-slate-950">
        <div className="mx-auto flex min-h-screen w-full max-w-2xl items-center">
          <div className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-none">
            <div className="h-5 w-56 rounded-full bg-slate-200 animate-pulse dark:bg-slate-700" />
            <div className="mt-5 h-3 w-full rounded bg-slate-200 animate-pulse dark:bg-slate-700" />
            <div className="mt-3 h-3 w-11/12 rounded bg-slate-200 animate-pulse dark:bg-slate-700" />
            <div className="mt-3 h-3 w-9/12 rounded bg-slate-200 animate-pulse dark:bg-slate-700" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="h-20 rounded-2xl bg-slate-100 animate-pulse dark:bg-slate-800" />
              <div className="h-20 rounded-2xl bg-slate-100 animate-pulse dark:bg-slate-800" />
              <div className="h-20 rounded-2xl bg-slate-100 animate-pulse dark:bg-slate-800" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <SiteLayout>
      <Outlet />
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
