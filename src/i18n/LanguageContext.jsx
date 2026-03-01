import { useCallback, useEffect, useMemo, useState } from "react";
import LanguageContext from "./languageContextInstance";
import detectLanguage, {
  DEFAULT_LANG,
  isSupportedLanguage,
  STORAGE_KEY,
} from "./detectLanguage";
const translationCache = new Map();
const missingWarnings = new Set();

async function loadMessages(lang) {
  if (translationCache.has(lang)) {
    return translationCache.get(lang);
  }

  const messages = await import(`./locales/${lang}.json`);
  const value = messages.default || messages;
  translationCache.set(lang, value);
  return value;
}

function resolveTranslation(messages, key) {
  if (!messages || !key) {
    return key;
  }

  return key
    .split(".")
    .reduce(
      (accumulator, segment) =>
        accumulator && accumulator[segment] !== undefined
          ? accumulator[segment]
          : undefined,
      messages,
    );
}

function interpolate(template, variables) {
  if (typeof template !== "string" || !variables) {
    return template;
  }

  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, token) => {
    const value = variables[token];
    return value === undefined || value === null ? "" : String(value);
  });
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => detectLanguage());
  const [messages, setMessages] = useState(
    () => translationCache.get(lang) || null,
  );
  const [defaultMessages, setDefaultMessages] = useState(
    () => translationCache.get(DEFAULT_LANG) || null,
  );
  const [loading, setLoading] = useState(() => !translationCache.has(lang));

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      const safeLang = isSupportedLanguage(lang) ? lang : DEFAULT_LANG;
      const hasCachedMessages = translationCache.has(safeLang);

      setLoading(!hasCachedMessages);

      try {
        const nextMessages = await loadMessages(safeLang);

        if (cancelled) {
          return;
        }

        setMessages(nextMessages);
        window.localStorage.setItem(STORAGE_KEY, safeLang);
        document.documentElement.lang = safeLang;
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [lang]);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      try {
        const fallbackMessages = await loadMessages(DEFAULT_LANG);
        if (!cancelled) {
          setDefaultMessages(fallbackMessages);
        }
      } catch {
        if (!cancelled) {
          setDefaultMessages(null);
        }
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, []);

  const setLang = useCallback((nextLang) => {
    const safeLang = isSupportedLanguage(nextLang) ? nextLang : DEFAULT_LANG;
    setLangState((previous) => (previous === safeLang ? previous : safeLang));
  }, []);

  const t = useCallback(
    (key, fallbackOrVariables, maybeVariables) => {
      let fallback = key;
      let variables = maybeVariables;

      if (
        fallbackOrVariables &&
        typeof fallbackOrVariables === "object" &&
        !Array.isArray(fallbackOrVariables)
      ) {
        variables = fallbackOrVariables;
      } else if (typeof fallbackOrVariables === "string") {
        fallback = fallbackOrVariables;
      }

      const value = resolveTranslation(messages, key);
      const fallbackValue = resolveTranslation(defaultMessages, key);

      if (value === undefined || value === null) {
        if (fallbackValue !== undefined && fallbackValue !== null) {
          if (typeof fallbackValue === "string") {
            return interpolate(fallbackValue, variables) || fallback || key;
          }

          return fallbackValue;
        }

        if (
          import.meta.env.DEV &&
          key &&
          !missingWarnings.has(`${lang}:${String(key)}`)
        ) {
          missingWarnings.add(`${lang}:${String(key)}`);
          console.warn(
            `[i18n] Missing translation key "${String(key)}" for language "${lang}"`,
          );
        }

        return fallback || key;
      }

      if (typeof value !== "string") {
        return value;
      }

      return interpolate(value, variables) || fallback || key;
    },
    [defaultMessages, lang, messages],
  );

  const contextValue = useMemo(
    () => ({
      lang,
      setLang,
      t,
      loading,
    }),
    [lang, setLang, t, loading],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}
