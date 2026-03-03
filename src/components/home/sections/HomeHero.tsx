// @ts-nocheck
import { Link } from "react-router-dom";
import { Globe, Mail, Plane, Send } from "lucide-react";
import useLanguage from "@/i18n/useLanguage";

function textOrFallback(t, key, fallback) {
  const value = t(key);
  return value === key ? fallback : value;
}

export default function HomeHero() {
  const { lang, t } = useLanguage();

  return (
    <section
      className="mb-16 flex flex-col-reverse items-center justify-between gap-8 lg:mb-24 lg:flex-row lg:gap-11"
      aria-labelledby="hero-title"
    >
      <div className="z-20 w-full text-center lg:w-3/5 lg:text-left">
        <h1
          id="hero-title"
          className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {textOrFallback(t, "hero_title_1", "Transform Your Travel Business")}
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {textOrFallback(t, "hero_title_2", "with Smart Solutions")}
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-base text-slate-400 sm:text-lg lg:mx-0">
          {textOrFallback(
            t,
            "hero_desc",
            "From AI-powered booking systems to LGBTQ+ travel experiences. We deliver premium end-to-end solutions for modern travel businesses with 20+ years of expertise.",
          )}
        </p>

        <form
          className="mb-8 flex max-w-xl flex-col gap-4 sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
          aria-label="Hero lead form"
        >
          <div className="relative flex-grow">
            <Mail
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <label htmlFor="hero-email" className="sr-only">
              Enter Your Email Address
            </label>
            <input
              id="hero-email"
              type="email"
              autoComplete="email"
              placeholder={textOrFallback(
                t,
                "footer_newsletter_placeholder",
                "Enter Your Email Address",
              )}
              className="w-full rounded-full border border-white/15 bg-black/20 py-4 pl-11 pr-6 text-sm text-white outline-none transition-all placeholder:text-slate-400 focus:border-cyan-300 focus:shadow-[0_0_15px_rgba(34,211,238,0.25)]"
            />
          </div>

          <Link
            to={`/${lang}/contact`}
            aria-label={textOrFallback(t, "btn_expert", "Talk to Expert")}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            {textOrFallback(t, "btn_expert", "Talk to Expert")}
          </Link>
        </form>

        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-300 lg:justify-start">
          <li className="flex items-center gap-2">
            <Send size={14} className="text-cyan-300" aria-hidden="true" />
            {textOrFallback(
              t,
              "hero_trust_experience",
              "20+ Years Industry Expertise",
            )}
          </li>
          <li className="flex items-center gap-2">
            <Globe size={14} className="text-cyan-300" aria-hidden="true" />
            {textOrFallback(
              t,
              "hero_trust_clients",
              "Trusted by 10,000+ Clients",
            )}
          </li>
          <li className="flex items-center gap-2">
            <Plane size={14} className="text-cyan-300" aria-hidden="true" />
            {textOrFallback(t, "hero_trust_support", "24/7 Premium Support")}
          </li>
        </ul>
      </div>

      <div className="relative flex min-h-[500px] w-full justify-center lg:w-2/5">
        <div className="float-anim relative z-10 mt-6 flex flex-col items-center justify-center">
          <img
            src="/images/ai-mascot/bindee-welcome.png"
            alt="N' Bindee - AI Travel Assistant"
            className="relative z-10 h-[450px] w-auto object-contain"
            loading="eager"
          />

          <div className="absolute -bottom-6 z-20 rounded-full border border-cyan-300 bg-slate-900/80 px-6 py-2 text-sm font-bold text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] backdrop-blur-sm transition-transform hover:scale-110">
            <span
              className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400"
              aria-hidden="true"
            />
            N&apos; Bindee Online
          </div>
        </div>
      </div>
    </section>
  );
}
