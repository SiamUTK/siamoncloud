import { DEFAULT_LANG, SUPPORTED_LANGS } from "./detectLanguage";

const HREFLANG_SELECTOR = "link[data-soc-hreflang='true']";

function getPathWithoutLocale(pathname = "/") {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return "/";
  }

  const withoutLocale = SUPPORTED_LANGS.includes(segments[0])
    ? segments.slice(1)
    : segments;

  return withoutLocale.length ? `/${withoutLocale.join("/")}` : "/";
}

function makeAlternateUrl(lang, pathname, origin) {
  const rest = getPathWithoutLocale(pathname);
  return rest === "/" ? `${origin}/${lang}` : `${origin}/${lang}${rest}`;
}

export function syncHreflangLinks({ lang, pathname }) {
  const safeLang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
  const origin = window.location.origin;
  const head = document.head;

  head.querySelectorAll(HREFLANG_SELECTOR).forEach((node) => node.remove());

  const alternates = [
    {
      hreflang: "en",
      href: makeAlternateUrl("en", pathname, origin),
    },
    {
      hreflang: "th",
      href: makeAlternateUrl("th", pathname, origin),
    },
    {
      hreflang: "x-default",
      href: makeAlternateUrl(DEFAULT_LANG, pathname, origin),
    },
  ];

  alternates.forEach(({ hreflang, href }) => {
    const link = document.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("hreflang", hreflang);
    link.setAttribute("href", href);
    link.setAttribute("data-soc-hreflang", "true");
    head.appendChild(link);
  });

  document.documentElement.lang = safeLang;
}
