import { useLocation, useNavigate } from "react-router-dom";

export const SUPPORTED_LOCALES = ["en", "th"];
export const DEFAULT_LOCALE = "en";

export function detectLocale(pathname) {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return SUPPORTED_LOCALES.includes(firstSegment)
    ? firstSegment
    : DEFAULT_LOCALE;
}

export function stripLocale(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return "/";

  const trimmed = SUPPORTED_LOCALES.includes(segments[0])
    ? segments.slice(1)
    : segments;

  return trimmed.length ? `/${trimmed.join("/")}` : "/";
}

export function buildLocalizedPath(path, locale = DEFAULT_LOCALE) {
  const safeLocale = SUPPORTED_LOCALES.includes(locale)
    ? locale
    : DEFAULT_LOCALE;

  if (!path || path === "/") {
    return `/${safeLocale}`;
  }

  if (path.startsWith("#")) {
    return `/${safeLocale}/${path}`;
  }

  const [basePath, hash = ""] = path.split("#");
  const normalized = basePath.startsWith("/") ? basePath : `/${basePath}`;
  const withoutLocale = stripLocale(normalized);

  return hash
    ? `/${safeLocale}${withoutLocale}#${hash}`
    : `/${safeLocale}${withoutLocale}`;
}

export function useLocaleRouting() {
  const location = useLocation();
  const navigate = useNavigate();

  const locale = detectLocale(location.pathname);

  const withLocalePath = (path) => buildLocalizedPath(path, locale);

  const switchLocale = (nextLocale) => {
    const targetLocale = SUPPORTED_LOCALES.includes(nextLocale)
      ? nextLocale
      : DEFAULT_LOCALE;

    const basePath = stripLocale(location.pathname);
    const nextPath = buildLocalizedPath(basePath, targetLocale);

    window.localStorage.setItem("soc_locale", targetLocale);
    navigate(`${nextPath}${location.search}${location.hash}`);
  };

  return {
    locale,
    withLocalePath,
    switchLocale,
  };
}
