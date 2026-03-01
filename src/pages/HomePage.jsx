import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Compass,
  PlaneTakeoff,
  Shield,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

const SERVICE_KEYS = ["travel", "lgbtq", "digital", "automation"];
const WHY_KEYS = ["expertise", "security", "speed"];
const TRUSTED_LOGO_KEYS = [
  "airlines",
  "agencies",
  "operators",
  "hotels",
  "otas",
  "dmc",
];

const WHO_WE_HELP = [
  { key: "agencies", Icon: Building2 },
  { key: "operators", Icon: Compass },
  { key: "otas", Icon: PlaneTakeoff },
  { key: "corporate", Icon: Briefcase },
];

const HOW_IT_WORKS_STEPS = [
  { id: 1, icon: Users },
  { id: 2, icon: Workflow },
  { id: 3, icon: Zap },
];

function HomePage() {
  const { t, lang } = useLanguage();

  usePageMeta({
    title: t("seo.title"),
    description: t("seo.description"),
    scrollToTop: true,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <Hero key={lang} />

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-800/80 bg-slate-900/35 px-6 py-10 backdrop-blur-xl sm:px-8 sm:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              {t("home_who_title")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">
              {t("home_who_desc")}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {WHO_WE_HELP.map(({ key, Icon }) => (
              <article
                key={key}
                className="group rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/45 hover:shadow-[0_10px_40px_rgba(34,211,238,0.14)]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-100">
                  {t(`home_who_${key}`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {t(`home_who_${key}_desc`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-slate-800/80 bg-slate-900/35 px-6 py-6 backdrop-blur-xl">
          <p className="text-center text-sm font-medium text-slate-400">
            {t("home_trusted_title")}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {TRUSTED_LOGO_KEYS.map((key) => (
              <div
                key={`trusted-placeholder-${key}`}
                className="flex h-14 min-w-[130px] flex-1 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-800/55 px-3 text-center text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500 grayscale transition-all duration-300 hover:border-cyan-500/40 hover:text-slate-200 hover:grayscale-0 sm:flex-none sm:opacity-70 sm:hover:opacity-100"
              >
                {t(`home_trusted_${key}`)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {t("home_services_title")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">
              {t("home_services_desc")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICE_KEYS.map((key) => (
              <article
                key={key}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/40 via-blue-500/30 to-cyan-400/40 p-[1px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]"
              >
                <div className="relative h-full rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-cyan-300/40">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute top-0 -left-full h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 ease-out group-hover:left-[150%]" />
                  </div>

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div className="relative">
                    <h3 className="text-xl font-bold tracking-tight text-slate-50">
                      {t(`home_services_${key}_title`)}
                    </h3>
                    <p className="mt-3.5 text-sm leading-relaxed text-slate-300/90">
                      {t(`home_services_${key}_desc`)}
                    </p>

                    <ul className="mt-5 space-y-2.5 text-sm text-slate-200">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                        <span>{t(`home_services_${key}_point_1`)}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                        <span>{t(`home_services_${key}_point_2`)}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/5 p-8 text-center backdrop-blur sm:p-10">
          <h2 className="text-3xl font-bold text-slate-50">
            {t("home_mid_cta_title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            {t("home_mid_cta_desc")}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              to={`/${lang}/contact`}
              className="inline-flex w-full transform-gpu items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-semibold text-white shadow-[0_10px_35px_rgba(34,211,238,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(34,211,238,0.45)] sm:w-auto"
            >
              {t("home_mid_cta_primary")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to={`/${lang}/services`}
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-600 px-7 py-3.5 font-semibold text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300 sm:w-auto"
            >
              {t("home_mid_cta_secondary")}
            </Link>
          </div>
          <p className="mt-4 text-xs font-medium tracking-wide text-slate-400">
            {t("home_cta_no_obligation")}
          </p>
        </div>
      </section>

      <section className="bg-slate-900/40 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {t("home_why_title")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">
              {t("home_why_desc")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {WHY_KEYS.map((key) => (
              <article
                key={key}
                className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                  {key === "expertise" && <Sparkles className="h-5 w-5" />}
                  {key === "security" && <Shield className="h-5 w-5" />}
                  {key === "speed" && <Zap className="h-5 w-5" />}
                </div>
                <h3 className="text-lg font-semibold text-slate-50">
                  {t(`home_why_${key}_title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {t(`home_why_${key}_desc`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-800/80 bg-slate-900/35 px-6 py-10 backdrop-blur-xl sm:px-8 sm:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
              {t("home_how_title")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">
              {t("home_how_desc")}
            </p>
          </div>

          <div className="relative mt-10 grid gap-6 md:grid-cols-3">
            <div className="pointer-events-none absolute left-1/2 top-9 hidden h-px w-[66%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent md:block" />

            {HOW_IT_WORKS_STEPS.map(({ id, icon: StepIcon }) => (
              <article
                key={`how-step-${id}`}
                className="relative rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-sm font-bold text-cyan-300">
                    {id}
                  </div>
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-500/10 text-cyan-300">
                    <StepIcon className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-100">
                  {t(`home_how_step${id}_title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {t(`home_how_step${id}_desc`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-10 text-center backdrop-blur">
          <h2 className="text-3xl font-bold text-slate-50">
            {t("home_cta_title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            {t("home_cta_desc")}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              to={`/${lang}/services`}
              className="inline-flex w-full transform-gpu items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-semibold text-white shadow-[0_12px_38px_rgba(34,211,238,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_56px_rgba(34,211,238,0.45)] sm:w-auto"
            >
              {t("home_cta_primary")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to={`/${lang}/contact`}
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-700 px-7 py-3.5 font-semibold text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300 sm:w-auto"
            >
              {t("home_cta_secondary")}
            </Link>
          </div>
          <p className="mt-4 text-xs font-medium tracking-wide text-slate-400">
            {t("home_cta_no_obligation")}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
