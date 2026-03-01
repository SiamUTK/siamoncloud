const SUPPORTED_LANGS = ["en", "th"];
const DEFAULT_LANG = "en";
const STORAGE_KEY = "soc_lang";

function normalizeLanguage(value) {
  if (!value || typeof value !== "string") {
    return null;
  }

  const normalized = value.toLowerCase().trim();

  if (normalized.startsWith("th")) {
    return "th";
  }

  if (normalized.startsWith("en")) {
    return "en";
  }

  return null;
}

export function isSupportedLanguage(lang) {
  return SUPPORTED_LANGS.includes(lang);
}

export function getLanguageFromPath(pathname = "") {
  const firstSegment = pathname.split("/").filter(Boolean)[0]?.toLowerCase();
  return isSupportedLanguage(firstSegment) ? firstSegment : null;
}

export default function detectLanguage(pathname = window.location.pathname) {
  const fromPath = getLanguageFromPath(pathname);
  if (fromPath) {
    return fromPath;
  }

  const fromStorage = normalizeLanguage(
    window.localStorage.getItem(STORAGE_KEY),
  );
  if (fromStorage) {
    return fromStorage;
  }

  const fromBrowser = normalizeLanguage(window.navigator.language);
  if (fromBrowser === "th") {
    return "th";
  }

  return DEFAULT_LANG;
}

export { DEFAULT_LANG, STORAGE_KEY, SUPPORTED_LANGS };
