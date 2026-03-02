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
      className={`group relative inline-flex min-h-11 items-center py-2 text-sm transition-all duration-300 after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-transform after:duration-300 ${
        isActive
          ? "font-semibold text-cyan-300 after:scale-x-100"
          : "font-medium text-slate-300 after:scale-x-0 hover:text-cyan-400 group-hover:after:scale-x-100"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
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
      className="group flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:shadow-[0_0_22px_rgba(34,211,238,0.16)]"
    >
      <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-white/10 bg-slate-900/80 text-cyan-300 transition-colors duration-300 group-hover:text-cyan-200">
        <Icon size={16} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-slate-100">
          {title}
        </span>
        <span className="mt-0.5 block text-xs leading-relaxed text-slate-400">
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
    "relative inline-flex h-11 w-[122px] items-center rounded-full border border-white/20 bg-slate-900/85 p-1 backdrop-blur-xl shadow-[0_0_24px_rgba(34,211,238,0.2)]";
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
        className={`pointer-events-none absolute left-1 top-1 h-9 w-[58px] rounded-full bg-gradient-to-r from-cyan-400/65 via-cyan-500/55 to-blue-500/60 shadow-[0_0_22px_rgba(34,211,238,0.55)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${indicatorClass}`}
      />
      <button
        type="button"
        onClick={() => onSwitchLanguage("en")}
        className={`relative z-10 inline-flex h-9 w-[58px] items-center justify-center rounded-full px-3 py-1 text-xs sm:text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/90 ${
          lang === "en"
            ? "font-bold text-white"
            : "font-semibold text-slate-100/90 hover:bg-white/10 hover:text-white"
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
            : "font-semibold text-slate-100/90 hover:bg-white/10 hover:text-white"
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
      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
        rafId = null;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
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
    if (path === homePath) {
      return currentPath === homePath;
    }
    return currentPath === path || currentPath.startsWith(`${path}/`);
  };

  const solutionsActive = location.pathname === servicesPath;

  const closeDesktopSolutions = () => {
    setSolutionsOpen(false);
  };

  const navBaseClass =
    "fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all duration-300";
  const navScrolledClass = isScrolled
    ? "h-16 bg-slate-950/90 backdrop-blur-xl border-cyan-500/20 shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
    : "h-20 bg-slate-950/70 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.35)]";

  return (
    <nav className={`${navBaseClass} ${navScrolledClass}`} role="navigation">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between transition-all duration-300">
          <Link
            to={homePath}
            className="group flex items-center gap-2 rounded-xl p-1 transition-all duration-300 ease-out hover:scale-[1.03] hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]"
          >
            <img
              src="/images/01-Primary-Logo/siam-on-cloud-logo-primary-dark.svg"
              alt={t("brand_logo_alt")}
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? "h-9 sm:h-10 md:h-11" : "h-10 sm:h-11 md:h-12"
              }`}
            />
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <NavLinkItem to={homePath} isActive={isPathActive(homePath)}>
              {t("nav_home")}
            </NavLinkItem>
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={closeDesktopSolutions}
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
                    closeDesktopSolutions();
                  }
                }}
                className={`group relative inline-flex min-h-11 items-center gap-1.5 py-2 text-sm transition-all duration-300 after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-full after:origin-left after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-transform after:duration-300 ${
                  solutionsActive || solutionsOpen
                    ? "font-semibold text-cyan-300 after:scale-x-100"
                    : "font-medium text-slate-300 after:scale-x-0 hover:text-cyan-400 group-hover:after:scale-x-100"
                }`}
                aria-haspopup="true"
                aria-expanded={solutionsOpen}
                aria-label={tf("nav_solutions", "Solutions")}
              >
                {tf("nav_solutions", "Solutions")}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    solutionsOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </button>

              {solutionsOpen && (
                <div
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={closeDesktopSolutions}
                  className="absolute left-1/2 top-[calc(100%+14px)] z-50 w-[min(92vw,780px)] -translate-x-1/2 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="rounded-2xl border border-white/10 bg-slate-950/95 p-5 backdrop-blur-xl shadow-[0_20px_60px_rgba(2,8,23,0.7)]">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300/90">
                      {tf("nav_solutions", "Solutions")}
                    </h3>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
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
                              onClick={closeDesktopSolutions}
                            />
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
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
                              onClick={closeDesktopSolutions}
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
            <LanguageSwitcher />
            <Link
              to={loginPath}
              className="group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-premium px-7 py-2.5 font-semibold text-white shadow-[0_0_20px_rgba(47,107,255,0.28)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 hover:-translate-y-[1px] hover:from-cyan-400 hover:via-blue-500 hover:to-premium hover:shadow-xl hover:shadow-cyan-500/30 active:translate-y-0 active:scale-[0.98]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              {t("nav_get_started")}
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher className="scale-95 origin-right" />
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="relative rounded-xl border border-white/10 bg-slate-900/75 p-2.5 text-slate-200 transition-colors duration-200 hover:border-cyan-400/40 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={t("nav_toggle_menu")}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              <span className="relative block h-6 w-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-200 ${
                    mobileMenuOpen
                      ? "scale-75 opacity-0 rotate-90"
                      : "scale-100 opacity-100 rotate-0"
                  }`}
                />
                <X
                  size={24}
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
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden px-4 pb-4 pt-2 animate-in fade-in slide-in-from-top-2 zoom-in-95 duration-200"
        >
          <div className="rounded-2xl border border-white/10 bg-slate-950/85 p-4 shadow-[0_16px_40px_rgba(2,8,23,0.55)] backdrop-blur-xl">
            <div className="space-y-1">
              <NavLinkItem
                to={homePath}
                onClick={() => setMobileMenuOpen(false)}
                isActive={isPathActive(homePath)}
              >
                {t("nav_home")}
              </NavLinkItem>
              <div className="rounded-xl border border-white/5 bg-white/[0.02]">
                <button
                  type="button"
                  onClick={() =>
                    setMobileSolutionsOpen(
                      (prevMobileSolutionsOpen) => !prevMobileSolutionsOpen,
                    )
                  }
                  className={`group relative flex min-h-11 w-full items-center justify-between px-3 py-2 text-sm transition-all duration-300 after:absolute after:bottom-1 after:left-3 after:h-[2px] after:w-[calc(100%-1.5rem)] after:origin-left after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 after:transition-transform after:duration-300 ${
                    mobileSolutionsOpen
                      ? "font-semibold text-cyan-300 after:scale-x-100"
                      : "font-medium text-slate-300 after:scale-x-0"
                  }`}
                  aria-expanded={mobileSolutionsOpen}
                  aria-controls="mobile-solutions-panel"
                  aria-label={tf("nav_solutions", "Solutions")}
                >
                  <span>{tf("nav_solutions", "Solutions")}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
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
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
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
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
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
              className="group relative mt-4 inline-flex min-h-11 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-premium px-6 py-3 font-semibold text-white shadow-[0_0_24px_rgba(47,107,255,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(47,107,255,0.35)]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              {t("nav_get_started")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
