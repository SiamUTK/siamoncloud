// @ts-nocheck
import { ArrowRight, Plane } from "lucide-react";
import { HOME_PARTNERS } from "../data/homeContent";
import useLanguage from "@/i18n/useLanguage";

export default function HomeServices() {
  const { t } = useLanguage();
  const localizedServices = [
    {
      title: t("home_services_travel_title"),
      desc: t("home_services_travel_desc"),
      badge: t("services_badge", "Popular"),
    },
    {
      title: t("home_services_lgbtq_title"),
      desc: t("home_services_lgbtq_desc"),
      badge: "LGBTQ+",
    },
    {
      title: t("home_services_digital_title"),
      desc: t("home_services_digital_desc"),
      badge: "Digital",
    },
  ];

  return (
    <>
      <section aria-label="Partners" className="mb-24">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-lg font-bold opacity-80">
            {HOME_PARTNERS.map((partner) => (
              <li key={partner}>{partner}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="services" className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          {t("home_services_title", "Services to Make Your Journey Seamless")}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {t("nav_services", "Services")}
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-slate-400">
          {t(
            "home_services_desc",
            "Siam On Cloud provides comprehensive corporate travel management.",
          )}
        </p>
      </section>

      <section
        className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        aria-label="Services grid"
      >
        {localizedServices.map((service) => (
          <article
            key={service.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-cyan-300/40"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl transition group-hover:bg-cyan-300/20" />
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-slate-900/70">
              <Plane className="text-cyan-300" size={20} aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              {service.desc}
            </p>
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                {service.badge}
              </span>
              <ArrowRight
                size={16}
                className="text-slate-300"
                aria-hidden="true"
              />
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
