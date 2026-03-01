import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useLanguage from "@/i18n/useLanguage";

const SUPPORTED_LANGS = ["en", "th"];

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
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const restPath = useMemo(
    () => getPathWithoutLocale(location.pathname),
    [location.pathname],
  );

  const onSwitchLanguage = (nextLang) => {
    if (nextLang === lang) {
      return;
    }

    setLang(nextLang);
    const nextPath =
      restPath === "/" ? `/${nextLang}` : `/${nextLang}${restPath}`;
    navigate(`${nextPath}${location.search}${location.hash}`);
  };

  const switcherBase =
    "inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 p-1";

  return (
    <div className={`${switcherBase} ${className}`}>
      <button
        type="button"
        onClick={() => onSwitchLanguage("en")}
        className={`rounded-full px-3 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
          lang === "en"
            ? "bg-cyan-500/20 text-cyan-300 shadow-[0_0_0_1px_rgba(34,211,238,0.35)]"
            : "text-slate-300 hover:text-cyan-300"
        }`}
        aria-pressed={lang === "en"}
      >
        🇬🇧 {t("switcher_en")}
      </button>
      <button
        type="button"
        onClick={() => onSwitchLanguage("th")}
        className={`rounded-full px-3 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
          lang === "th"
            ? "bg-cyan-500/20 text-cyan-300 shadow-[0_0_0_1px_rgba(34,211,238,0.35)]"
            : "text-slate-300 hover:text-cyan-300"
        }`}
        aria-pressed={lang === "th"}
      >
        🇹🇭 {t("switcher_th")}
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
              alt="Siam On Cloud Logo"
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
              aria-label="Toggle menu"
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
