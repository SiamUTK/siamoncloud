import { useCallback, useEffect, useMemo, useState } from "react";
import LanguageContext from "./languageContextInstance";
import detectLanguage, {
  DEFAULT_LANG,
  isSupportedLanguage,
  STORAGE_KEY,
} from "./detectLanguage";
const translationCache = new Map();

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

      if (value === undefined || value === null) {
        return fallback;
      }

      if (typeof value !== "string") {
        return value;
      }

      return interpolate(value, variables);
    },
    [messages],
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
