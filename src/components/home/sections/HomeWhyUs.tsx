// @ts-nocheck
import { Bot, Check, Send } from "lucide-react";
import useLanguage from "@/i18n/useLanguage";

export default function HomeWhyUs() {
  const { t } = useLanguage();
  const reasons = [
    {
      title: t("home_why_expertise_title"),
      desc: t("home_why_expertise_desc"),
    },
    {
      title: t("home_why_speed_title"),
      desc: t("home_why_speed_desc"),
    },
    {
      title: t("home_why_security_title"),
      desc: t("home_why_security_desc"),
    },
  ];

  return (
    <section
      id="why-us"
      className="relative mb-24 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 md:p-11"
    >
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/5 blur-[100px]" />
      <div className="relative z-10 flex flex-col items-center gap-11 md:flex-row">
        <div className="w-full md:w-1/2">
          <h3 className="mb-6 text-2xl font-bold">
            {t("home_why_title", "Why Choose")}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              SIAM ON CLOUD?
            </span>
          </h3>

          <p className="mb-6 text-sm text-slate-400">{t("home_why_desc")}</p>

          <div className="mb-8 space-y-4">
            {reasons.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <Check
                  className="mt-1 text-cyan-300"
                  size={16}
                  aria-hidden="true"
                />
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <figure className="rounded-r-xl rounded-l-none border-l-4 border-cyan-300 bg-black/20 p-4">
            <blockquote className="mb-2 text-sm italic text-slate-300">
              &quot;Our business travel experience with N&apos; Bindee was
              seamless. The flight options were spot on, and visa stress was
              zero. Highly recommended!&quot;
            </blockquote>
            <figcaption className="text-xs font-bold text-white">
              Siam Uttrakun
            </figcaption>
            <p className="text-[10px] text-cyan-300">Corporate Client</p>
          </figure>
        </div>

        <div className="z-10 flex w-full justify-center md:w-1/2">
          <div className="relative h-[580px] w-[280px] rounded-[40px] border-8 border-slate-700 bg-slate-900 p-4 shadow-2xl">
            <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-700" />

            <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] bg-slate-50 text-slate-800">
              <div className="flex items-center gap-3 border-b bg-white p-4 pt-8 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300/20">
                  <Bot size={12} className="text-cyan-500" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-none">
                    N&apos; Bindee
                  </h4>
                  <span className="text-[10px] font-semibold text-green-500">
                    • Online
                  </span>
                </div>
              </div>

              <div className="flex-grow space-y-4 overflow-y-auto bg-slate-100 p-4 pb-20 text-xs">
                <div className="flex gap-2">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-300/20">
                    <Bot
                      size={10}
                      className="text-cyan-500"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="rounded-2xl rounded-tl-none border bg-white p-3 shadow-sm">
                    {t(
                      "hero_micro_proof",
                      "Sawasdee khrab! I'm N' Bindee. Where are we flying to today?",
                    )}
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <div className="rounded-2xl rounded-tr-none bg-cyan-300 p-3 font-medium text-slate-900 shadow-sm">
                    {t("btn_explore", "Explore Services")}
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-300/20">
                    <Bot
                      size={10}
                      className="text-cyan-500"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="w-full rounded-2xl rounded-tl-none border bg-white p-3 shadow-sm">
                    Got it! Here is the best option via Korean Air:
                    <span className="mt-1 block rounded bg-slate-100 p-1 font-mono text-[10px] text-slate-500">
                      1 KE081 18MAY ICN-JFK 10:00
                    </span>
                    <button
                      type="button"
                      className="mt-2 w-full rounded-lg bg-slate-900 py-1.5 font-semibold text-white transition-colors hover:bg-slate-800"
                    >
                      Book Now 53,110 THB
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full border-t bg-white p-3">
                <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-grow bg-transparent text-xs text-slate-800 outline-none"
                    aria-label="Type chat message"
                  />
                  <Send
                    size={13}
                    className="text-cyan-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
