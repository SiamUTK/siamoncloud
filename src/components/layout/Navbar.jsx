import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useLanguage from "@/i18n/useLanguage";
import { useLocaleRouting } from "@/lib/localeRouting";

function NavLinkItem({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
    >
      {children}
    </Link>
  );
}

function LanguageSwitcher({ className = "" }) {
  const { lang, t } = useLanguage();
  const { switchLocale } = useLocaleRouting();

  const onSwitchLanguage = (nextLang) => {
    if (nextLang === lang) {
      return;
    }

    switchLocale(nextLang);
  };

  const onKeyDown = (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }

    const nextLang = event.key === "ArrowLeft" ? "en" : "th";

    onSwitchLanguage(nextLang);
  };

  const switcherBase =
    "relative inline-flex h-11 w-[122px] items-center rounded-full border border-white/15 bg-slate-900/70 p-1 backdrop-blur-xl shadow-[0_0_22px_rgba(34,211,238,0.16)]";
  const indicatorClass = lang === "en" ? "translate-x-0" : "translate-x-[54px]";

  return (
    <div
      className={`${switcherBase} ${className}`}
      role="group"
      aria-label={t("switcher_aria")}
      onKeyDown={onKeyDown}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-1 top-1 h-9 w-[58px] rounded-full bg-gradient-to-r from-cyan-400/50 via-cyan-500/40 to-blue-500/50 shadow-[0_0_18px_rgba(34,211,238,0.45)] transition-all duration-300 ${indicatorClass}`}
      />
      <button
        type="button"
        onClick={() => onSwitchLanguage("en")}
        className={`relative z-10 inline-flex h-9 w-[58px] items-center justify-center rounded-full px-3 py-1 text-xs sm:text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/90 ${
          lang === "en"
            ? "font-bold text-white"
            : "font-semibold text-slate-200 hover:bg-white/10 hover:text-white"
        }`}
        aria-pressed={lang === "en"}
        aria-label={t("switcher_to_en")}
      >
        {t("switcher_en")}
      </button>
      <button
        type="button"
        onClick={() => onSwitchLanguage("th")}
        className={`relative z-10 inline-flex h-9 w-[58px] items-center justify-center rounded-full px-3 py-1 text-xs sm:text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/90 ${
          lang === "th"
            ? "font-bold text-white"
            : "font-semibold text-slate-200 hover:bg-white/10 hover:text-white"
        }`}
        aria-pressed={lang === "th"}
        aria-label={t("switcher_to_th")}
      >
        {t("switcher_th")}
      </button>
    </div>
  );
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, t } = useLanguage();

  const homePath = `/${lang}`;
  const aboutPath = `/${lang}/about`;
  const servicesPath = `/${lang}/services`;
  const contactPath = `/${lang}/contact`;
  const loginPath = `/${lang}/login`;

  return (
    <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={homePath} className="flex items-center gap-2">
            <img
              src="https://nmlycxqpjceppmsgzeod.supabase.co/storage/v1/object/public/assets/logos/logo-white-online.png"
              alt={t("brand_logo_alt")}
              className="h-12 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLinkItem to={homePath}>{t("nav_home")}</NavLinkItem>
            <NavLinkItem to={aboutPath}>{t("nav_about")}</NavLinkItem>
            <NavLinkItem to={servicesPath}>{t("nav_services")}</NavLinkItem>
            <NavLinkItem to={contactPath}>{t("nav_contact")}</NavLinkItem>
            <LanguageSwitcher />
            <Link
              to={loginPath}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg transition-all"
            >
              {t("nav_get_started")}
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher className="scale-95 origin-right" />
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-lg hover:bg-slate-800 text-slate-300 transition-colors"
              aria-label={t("nav_toggle_menu")}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-3 animate-in fade-in duration-200">
          <Link
            to={homePath}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-cyan-400 font-medium"
          >
            {t("nav_home")}
          </Link>
          <Link
            to={aboutPath}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-cyan-400 font-medium"
          >
            {t("nav_about")}
          </Link>
          <Link
            to={servicesPath}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-cyan-400 font-medium"
          >
            {t("nav_services")}
          </Link>
          <Link
            to={contactPath}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-cyan-400 font-medium"
          >
            {t("nav_contact")}
          </Link>
          <Link
            to={loginPath}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium"
          >
            {t("nav_get_started")}
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
