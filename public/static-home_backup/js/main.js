import { initAIChat } from "../components/ai-chat.js";

const STORAGE_KEY = "soc-language";
const SUPPORTED_LANGUAGES = ["en", "th"];

let currentLang = localStorage.getItem(STORAGE_KEY) || "en";
if (!SUPPORTED_LANGUAGES.includes(currentLang)) currentLang = "en";

let locales = { en: null, th: null };
let chatHandle = null;

function getValueByPath(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

async function loadLocales() {
  const [en, th] = await Promise.all([
    fetch("./locales/en.json").then((r) => r.json()),
    fetch("./locales/th.json").then((r) => r.json()),
  ]);
  locales = { en, th };
}

function applyTranslations() {
  const t = locales[currentLang] || locales.en;

  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = getValueByPath(t, key);
    if (typeof val === "string") {
      el.textContent = val;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = getValueByPath(t, key);
    if (typeof val === "string") {
      el.setAttribute("placeholder", val);
    }
  });

  const enBtn = document.getElementById("lang-en");
  const thBtn = document.getElementById("lang-th");
  if (enBtn && thBtn) {
    const activeEn = currentLang === "en";
    enBtn.classList.toggle("bg-white", activeEn);
    enBtn.classList.toggle("text-slate-900", activeEn);
    thBtn.classList.toggle("bg-white", !activeEn);
    thBtn.classList.toggle("text-slate-900", !activeEn);
  }

  if (chatHandle) {
    chatHandle.updateLanguage(t);
  }
}

function initLanguageToggle() {
  const setLanguage = (lang) => {
    if (!SUPPORTED_LANGUAGES.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations();
  };

  document
    .getElementById("lang-en")
    ?.addEventListener("click", () => setLanguage("en"));
  document
    .getElementById("lang-th")
    ?.addEventListener("click", () => setLanguage("th"));
}

function initMobileMenu() {
  const button = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (!button || !menu) return;

  button.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

async function bootstrap() {
  await loadLocales();
  initLanguageToggle();
  initMobileMenu();
  applyTranslations();

  chatHandle = initAIChat({
    t: locales[currentLang],
    getLang: () => currentLang,
  });

  document.getElementById("hero-cta")?.addEventListener("click", () => {
    document.getElementById("soc-chat-toggle")?.click();
  });
}

bootstrap();
