// @ts-nocheck
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bot,
  Building2,
  ChevronDown,
  Cloud,
  Handshake,
  Layers,
  Menu,
  Plane,
  Puzzle,
  Route,
  X,
} from "lucide-react";
import BrandLogo from "@/components/common/BrandLogo";
import useLanguage from "@/i18n/useLanguage";
import { useLocaleRouting } from "@/lib/localeRouting";

const NavLinkItem = memo(function NavLinkItem({
  to,
  children,
  onClick,
  isActive = false,
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`group relative inline-flex min-h-10 items-center py-2 text-sm tracking-tight transition-colors duration-200 ${
        isActive
          ? "font-semibold text-blue-700 dark:text-cyan-300"
          : "font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-300"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
      <span
        className={`pointer-events-none absolute -bottom-[2px] left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform duration-200 ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
        aria-hidden="true"
      />
    </Link>
  );
});

const SolutionsMenuItem = memo(function SolutionsMenuItem({
  to,
  icon: Icon,
  title,
  description,
  onClick,
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-500/40"
    >
      <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-blue-600 transition-colors duration-200 group-hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800 dark:text-cyan-300 dark:group-hover:text-cyan-200">
        <Icon size={16} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </span>
        <span className="mt-0.5 block text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          {description}
        </span>
      </span>
    </Link>
  );
});

function LanguageSwitcher({ className = "" }) {
  const { lang, t } = useLanguage();
  const { switchLocale } = useLocaleRouting();

  const onSwitchLanguage = (nextLang) => {
    if (nextLang === lang) return;
    switchLocale(nextLang);
  };

  const onKeyDown = (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();

    const nextLang = event.key === "ArrowLeft" ? "en" : "th";
    onSwitchLanguage(nextLang);
  };

  return (
    <div
      className={`inline-flex h-10 items-center rounded-full border border-slate-200 bg-slate-100 p-1 dark:border-slate-700 dark:bg-slate-800 ${className}`}
      role="group"
      aria-label={t("switcher_aria")}
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        onClick={() => onSwitchLanguage("en")}
        className={`inline-flex h-8 min-w-[52px] items-center justify-center rounded-full px-3 text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-900 ${
          lang === "en"
            ? "bg-white text-blue-600 shadow-sm dark:bg-slate-900 dark:text-cyan-300"
            : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
        }`}
        aria-pressed={lang === "en"}
        aria-label={t("switcher_to_en")}
      >
        {t("switcher_en")}
      </button>
      <button
        type="button"
        onClick={() => onSwitchLanguage("th")}
        className={`inline-flex h-8 min-w-[52px] items-center justify-center rounded-full px-3 text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-900 ${
          lang === "th"
            ? "bg-white text-blue-600 shadow-sm dark:bg-slate-900 dark:text-cyan-300"
            : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
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
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const { lang, t } = useLanguage();
  const location = useLocation();

  const tf = useCallback(
    (key, fallback) => {
      const value = t(key);
      return value === key ? fallback : value;
    },
    [t],
  );

  useEffect(() => {
    let rafId = null;

    const onScroll = () => {
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
        rafId = null;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSolutionsOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  const homePath = `/${lang}`;
  const aboutPath = `/${lang}/about`;
  const servicesPath = `/${lang}/services`;
  const contactPath = `/${lang}/contact`;
  const loginPath = `/${lang}/login`;

  const industries = useMemo(
    () => [
      {
        key: "airlines",
        icon: Plane,
        title: tf("nav_solutions_airlines_title", "Airlines"),
        description: tf(
          "nav_solutions_airlines_desc",
          "Scale booking flows and customer journeys across markets.",
        ),
        to: `${servicesPath}#airlines`,
      },
      {
        key: "agencies",
        icon: Handshake,
        title: tf("nav_solutions_agencies_title", "Travel Agencies"),
        description: tf(
          "nav_solutions_agencies_desc",
          "Boost conversions with modern quoting and workflow automation.",
        ),
        to: `${servicesPath}#travel-agencies`,
      },
      {
        key: "otas",
        icon: Route,
        title: tf("nav_solutions_otas_title", "OTAs"),
        description: tf(
          "nav_solutions_otas_desc",
          "Optimize inventory sync, pricing logic, and campaign velocity.",
        ),
        to: `${servicesPath}#otas`,
      },
      {
        key: "enterprise",
        icon: Building2,
        title: tf("nav_solutions_enterprise_title", "Enterprise Teams"),
        description: tf(
          "nav_solutions_enterprise_desc",
          "Deploy secure, governed platforms for multi-team operations.",
        ),
        to: `${servicesPath}#enterprise-teams`,
      },
    ],
    [servicesPath, tf],
  );

  const capabilities = useMemo(
    () => [
      {
        key: "ai",
        icon: Bot,
        title: tf("nav_solutions_ai_title", "AI Automation"),
        description: tf(
          "nav_solutions_ai_desc",
          "Automate lead handling, support, and lifecycle intelligence.",
        ),
        to: `${servicesPath}#ai-automation`,
      },
      {
        key: "booking",
        icon: Layers,
        title: tf("nav_solutions_booking_title", "Booking Systems"),
        description: tf(
          "nav_solutions_booking_desc",
          "Deliver fast, resilient booking experiences across channels.",
        ),
        to: `${servicesPath}#booking-systems`,
      },
      {
        key: "cloud",
        icon: Cloud,
        title: tf("nav_solutions_cloud_title", "Cloud Infrastructure"),
        description: tf(
          "nav_solutions_cloud_desc",
          "Build secure, scalable cloud foundations for growth.",
        ),
        to: `${servicesPath}#cloud-infrastructure`,
      },
      {
        key: "integrations",
        icon: Puzzle,
        title: tf("nav_solutions_integrations_title", "Custom Integrations"),
        description: tf(
          "nav_solutions_integrations_desc",
          "Connect CRMs, payment rails, and legacy systems seamlessly.",
        ),
        to: `${servicesPath}#custom-integrations`,
      },
    ],
    [servicesPath, tf],
  );

  const isPathActive = (path) => {
    const currentPath = location.pathname;
    if (path === homePath) return currentPath === homePath;
    return currentPath === path || currentPath.startsWith(`${path}/`);
  };

  const solutionsActive = location.pathname === servicesPath;

  const navClass = isScrolled
    ? "border-slate-200/80 bg-white/95 shadow-md dark:border-slate-700/80 dark:bg-slate-950/90"
    : "border-slate-200/60 bg-white/80 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/75";

  return (
    <header className="dark sticky top-0 z-50">
      <nav
        className={`transform-gpu border-b backdrop-blur-xl transition-all duration-200 ${navClass}`}
        role="navigation"
        aria-label="Primary navigation"
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-16 lg:px-8">
          <Link
            to={homePath}
            className="inline-flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-900"
            aria-label={t("brand_logo_alt")}
          >
            <BrandLogo
              alt={t("brand_logo_alt")}
              size="custom"
              className="h-8 w-auto object-contain md:h-9"
            />
          </Link>

          <div className="hidden items-center gap-6 lg:gap-8 md:flex">
            <NavLinkItem to={homePath} isActive={isPathActive(homePath)}>
              {t("nav_home")}
            </NavLinkItem>

            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                onFocus={() => setSolutionsOpen(true)}
                onBlur={(event) => {
                  if (
                    !event.currentTarget.parentElement?.contains(
                      event.relatedTarget,
                    )
                  ) {
                    setSolutionsOpen(false);
                  }
                }}
                className={`group relative inline-flex min-h-10 items-center gap-1.5 py-2 text-sm tracking-tight transition-colors duration-200 ${
                  solutionsActive || solutionsOpen
                    ? "font-semibold text-blue-700 dark:text-cyan-300"
                    : "font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-cyan-300"
                }`}
                aria-haspopup="true"
                aria-expanded={solutionsOpen}
                aria-label={tf("nav_solutions", "Solutions")}
              >
                {tf("nav_solutions", "Solutions")}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    solutionsOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`pointer-events-none absolute -bottom-[2px] left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform duration-200 ${
                    solutionsActive || solutionsOpen
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  aria-hidden="true"
                />
              </button>

              {solutionsOpen && (
                <div className="absolute left-1/2 top-[calc(100%+14px)] z-50 w-[min(92vw,780px)] -translate-x-1/2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card dark:border-slate-700 dark:bg-slate-900">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-blue-700 dark:text-cyan-300">
                      {tf("nav_solutions", "Solutions")}
                    </h3>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                          {tf("nav_solutions_industries", "Industries")}
                        </p>
                        <div className="space-y-2">
                          {industries.map((item) => (
                            <SolutionsMenuItem
                              key={item.key}
                              to={item.to}
                              icon={item.icon}
                              title={item.title}
                              description={item.description}
                              onClick={() => setSolutionsOpen(false)}
                            />
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                          {tf("nav_solutions_capabilities", "Capabilities")}
                        </p>
                        <div className="space-y-2">
                          {capabilities.map((item) => (
                            <SolutionsMenuItem
                              key={item.key}
                              to={item.to}
                              icon={item.icon}
                              title={item.title}
                              description={item.description}
                              onClick={() => setSolutionsOpen(false)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLinkItem
              to={servicesPath}
              isActive={isPathActive(servicesPath)}
            >
              {t("nav_services")}
            </NavLinkItem>
            <NavLinkItem to={aboutPath} isActive={isPathActive(aboutPath)}>
              {t("nav_about")}
            </NavLinkItem>
            <NavLinkItem to={contactPath} isActive={isPathActive(contactPath)}>
              {t("nav_contact")}
            </NavLinkItem>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <Link
              to={loginPath}
              className="inline-flex min-h-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-900"
            >
              {t("nav_get_started")}
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher className="scale-95 origin-right" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:border-cyan-300 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-cyan-500 dark:hover:text-cyan-300"
              aria-label={t("nav_toggle_menu")}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              <span className="relative block h-5 w-5" aria-hidden="true">
                <Menu
                  size={20}
                  className={`absolute inset-0 transition-all duration-200 ${
                    mobileMenuOpen
                      ? "scale-75 opacity-0 rotate-90"
                      : "scale-100 opacity-100 rotate-0"
                  }`}
                />
                <X
                  size={20}
                  className={`absolute inset-0 transition-all duration-200 ${
                    mobileMenuOpen
                      ? "scale-100 opacity-100 rotate-0"
                      : "scale-75 opacity-0 -rotate-90"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-nav-panel"
            className="md:hidden border-t border-slate-200/70 bg-white px-4 pb-4 pt-3 shadow-card animate-in fade-in slide-in-from-top-2 duration-200 dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="space-y-1">
              <NavLinkItem
                to={homePath}
                onClick={() => setMobileMenuOpen(false)}
                isActive={isPathActive(homePath)}
              >
                {t("nav_home")}
              </NavLinkItem>

              <div className="rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/60">
                <button
                  type="button"
                  onClick={() =>
                    setMobileSolutionsOpen(
                      (prevMobileSolutionsOpen) => !prevMobileSolutionsOpen,
                    )
                  }
                  className={`group relative flex min-h-11 w-full items-center justify-between px-3 py-2 text-sm tracking-tight transition-colors duration-200 ${
                    mobileSolutionsOpen
                      ? "font-semibold text-blue-700 dark:text-cyan-300"
                      : "font-medium text-slate-700 dark:text-slate-300"
                  }`}
                  aria-expanded={mobileSolutionsOpen}
                  aria-controls="mobile-solutions-panel"
                  aria-label={tf("nav_solutions", "Solutions")}
                >
                  <span>{tf("nav_solutions", "Solutions")}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileSolutionsOpen ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {mobileSolutionsOpen && (
                  <div
                    id="mobile-solutions-panel"
                    className="space-y-3 px-3 pb-3 pt-2 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    <div>
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                        {tf("nav_solutions_industries", "Industries")}
                      </p>
                      <div className="space-y-2">
                        {industries.map((item) => (
                          <SolutionsMenuItem
                            key={`mobile-${item.key}`}
                            to={item.to}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            onClick={() => {
                              setMobileSolutionsOpen(false);
                              setMobileMenuOpen(false);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                        {tf("nav_solutions_capabilities", "Capabilities")}
                      </p>
                      <div className="space-y-2">
                        {capabilities.map((item) => (
                          <SolutionsMenuItem
                            key={`mobile-cap-${item.key}`}
                            to={item.to}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            onClick={() => {
                              setMobileSolutionsOpen(false);
                              setMobileMenuOpen(false);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLinkItem
                to={servicesPath}
                onClick={() => setMobileMenuOpen(false)}
                isActive={isPathActive(servicesPath)}
              >
                {t("nav_services")}
              </NavLinkItem>
              <NavLinkItem
                to={aboutPath}
                onClick={() => setMobileMenuOpen(false)}
                isActive={isPathActive(aboutPath)}
              >
                {t("nav_about")}
              </NavLinkItem>
              <NavLinkItem
                to={contactPath}
                onClick={() => setMobileMenuOpen(false)}
                isActive={isPathActive(contactPath)}
              >
                {t("nav_contact")}
              </NavLinkItem>
            </div>

            <Link
              to={loginPath}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-cyan-400 dark:focus-visible:ring-offset-slate-900"
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
