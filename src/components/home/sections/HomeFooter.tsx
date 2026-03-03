// @ts-nocheck
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import useLanguage from "@/i18n/useLanguage";
import BrandLogo from "@/components/common/BrandLogo";
import {
  HOME_FOOTER_COMPANY_LINKS,
  HOME_FOOTER_SERVICE_LINKS,
  HOME_FOOTER_SOCIALS,
} from "../data/homeContent";

export default function HomeFooter() {
  const { lang, t } = useLanguage();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 pb-8 pt-16 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-11 lg:gap-11">
          <div className="lg:col-span-4">
            <BrandLogo
              alt="Siam On Cloud Logo"
              variant="light"
              size="homeFooter"
              className="mb-6 opacity-90"
              loading="lazy"
            />
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              {t(
                "footer_tagline",
                "Business Meets Travel | Elevate Your Journey, Amplify Success.",
              )}
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              {HOME_FOOTER_SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="transition-colors hover:text-cyan-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-bold uppercase">
              {t("footer_solutions", "Services")}
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {HOME_FOOTER_SERVICE_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="#services"
                    className="transition-colors hover:text-cyan-300"
                  >
                    {label === "Airline Booking"
                      ? t("footer_link_ticketing", "Airline Booking")
                      : label === "Tour Operator Support"
                        ? t("footer_link_operators", "Tour Operator Support")
                        : label === "Visa Assistance"
                          ? t("services_ticketing_title", "Visa Assistance")
                          : t("footer_link_digital", "Technology Solutions")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-bold uppercase">
              {t("footer_resources", "Links")}
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {HOME_FOOTER_COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  {item.isAnchor ? (
                    <a
                      href={item.path}
                      className="transition-colors hover:text-cyan-300"
                    >
                      {item.label === "Corporate"
                        ? t("footer_link_corporate", "Corporate")
                        : item.label}
                    </a>
                  ) : (
                    <Link
                      to={`/${lang}${item.path}`}
                      className="transition-colors hover:text-cyan-300"
                    >
                      {item.path === "/about"
                        ? t("footer_link_about", "About Us")
                        : item.path === "/privacy"
                          ? t("footer_link_privacy", "Privacy Policy")
                          : t("footer_link_terms", "Terms")}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-lg font-bold uppercase">
              {t("nav_contact", "Contact")}
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-1 text-cyan-300"
                  aria-hidden="true"
                />
                <span>
                  SIAM ON CLOUD CO., LTD.
                  <br />
                  319 Chamchuri Square, 24th Fl.,
                  <br />
                  Phayathai Rd., Pathumwan,
                  <br />
                  Bangkok 10330, Thailand
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-cyan-300" aria-hidden="true" />
                <a
                  href="tel:+66990009588"
                  className="transition-colors hover:text-white"
                >
                  +66 (0)99-000-9588
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-cyan-300" aria-hidden="true" />
                <a
                  href="mailto:info@siamon.cloud"
                  className="transition-colors hover:text-white"
                >
                  info@siamon.cloud
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 md:flex-row">
          <p>{t("footer_copyright", "© 2026 Siam On Cloud")}</p>
          <div className="flex items-center gap-2">
            <span>{t("footer_cert_partner", "Designed by")}</span>
            <span className="font-bold uppercase tracking-widest text-cyan-300">
              AI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
