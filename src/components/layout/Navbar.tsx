import { memo, useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/common/BrandLogo";
import useLanguage from "@/i18n/useLanguage";
import { useLocaleRouting } from "@/lib/localeRouting";

const navItemClass = ({ isActive }) =>
  [
    "inline-flex min-h-10 items-center rounded-md px-2 py-2 text-sm transition",
    isActive
      ? "text-blue-400 font-semibold"
      : "text-slate-300 hover:text-white",
  ].join(" ");

const mobileNavItemClass = ({ isActive }) =>
  [
    "block rounded-lg px-3 py-2.5 text-sm transition",
    isActive
      ? "bg-slate-800 text-blue-400 font-semibold"
      : "text-slate-300 hover:bg-slate-800/70 hover:text-white",
  ].join(" ");

const NavItem = memo(function NavItem({ to, label, end = false, onClick }) {
  return (
    <NavLink to={to} end={end} onClick={onClick} className={navItemClass}>
      {label}
    </NavLink>
  );
});

function LanguageSwitcher({ className = "" }) {
  const { lang, t } = useLanguage();
  const { switchLocale } = useLocaleRouting();

  const onSwitchLanguage = (nextLang) => {
    if (nextLang !== lang) {
      switchLocale(nextLang);
    }
  };

  return (
    <div
      className={`inline-flex h-10 items-center rounded-full border border-slate-700 bg-slate-900 p-1 ${className}`}
      role="group"
      aria-label={t("switcher_aria")}
    >
      <button
        type="button"
        onClick={() => onSwitchLanguage("en")}
        className={`inline-flex h-8 min-w-[52px] items-center justify-center rounded-full px-3 text-xs font-semibold transition ${
          lang === "en"
            ? "bg-slate-800 text-cyan-300"
            : "text-slate-300 hover:text-white"
        }`}
        aria-pressed={lang === "en"}
        aria-label={t("switcher_to_en")}
      >
        {t("switcher_en")}
      </button>
      <button
        type="button"
        onClick={() => onSwitchLanguage("th")}
        className={`inline-flex h-8 min-w-[52px] items-center justify-center rounded-full px-3 text-xs font-semibold transition ${
          lang === "th"
            ? "bg-slate-800 text-cyan-300"
            : "text-slate-300 hover:text-white"
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
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const { withLocalePath } = useLocaleRouting();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItems = useMemo(
    () => [
      { key: "home", label: t("nav_home"), to: withLocalePath("/"), end: true },
      {
        key: "solutions",
        label: t("nav_solutions", "Solutions"),
        to: withLocalePath("/solutions"),
      },
      {
        key: "services",
        label: t("nav_services"),
        to: withLocalePath("/services"),
      },
      { key: "about", label: t("nav_about"), to: withLocalePath("/about") },
      {
        key: "contact",
        label: t("nav_contact"),
        to: withLocalePath("/contact"),
      },
    ],
    [t, withLocalePath],
  );

  const loginPath = withLocalePath("/login");

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={`border-b backdrop-blur-xl transition-all duration-200 ${
          isScrolled
            ? "border-slate-700/80 bg-slate-950/95 shadow-md"
            : "border-slate-700/60 bg-slate-950/80"
        }`}
        role="navigation"
        aria-label="Primary navigation"
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-16 lg:px-8">
          <Link
            to={withLocalePath("/")}
            className="inline-flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={t("brand_logo_alt")}
          >
            <BrandLogo
              alt={t("brand_logo_alt")}
              size="custom"
              className="h-8 w-auto object-contain md:h-9"
            />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavItem
                key={item.key}
                to={item.to}
                end={item.end}
                label={item.label}
              />
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <Link
              to={loginPath}
              className="inline-flex min-h-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-[1px] hover:shadow-lg"
            >
              {t("nav_get_started")}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher className="scale-95 origin-right" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((previous) => !previous)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300"
              aria-label={t("nav_toggle_menu")}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-nav-panel"
            className="border-t border-slate-700 bg-slate-950 px-4 pb-4 pt-3 md:hidden"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.key}
                  to={item.to}
                  end={item.end}
                  className={mobileNavItemClass}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <Link
              to={loginPath}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-[1px] hover:shadow-lg"
            >
              {t("nav_get_started")}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
