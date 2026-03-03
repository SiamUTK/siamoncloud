import { useState } from "react";
import { Link } from "react-router-dom";
import {
  computeFollowupDue,
  computeInitialStage,
  computePriority,
} from "@/lib/leadLifecycle";
import { leadScoring } from "@/lib/leadScoring";
import { leadTagger } from "@/lib/leadTagger";
import { getAttribution } from "@/lib/attribution";
import { trackEvent } from "@/lib/analytics";
import { getSupabaseClient } from "@/lib/supabaseClient";
import { SITE_CONFIG } from "@/config/site";
import LineContactCard from "@/components/common/LineContactCard";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

const sectionClass = "py-16 md:py-20";
const containerClass = "mx-auto w-full";
const cardClass =
  "rounded-2xl border border-white/10 bg-slate-900/80 shadow-sm";
const inputClass =
  "mt-2 w-full rounded-xl border border-white/15 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition-colors duration-200 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400";
const labelClass = "text-sm font-medium text-slate-200";
const primaryButtonClass =
  "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60";

function Contact() {
  const { lang, t } = useLanguage();
  const localizedServiceOptions = [
    t("services_ticketing_title"),
    t("services_ai_title"),
    t("services_lgbtq_title"),
    t("services_digital_title"),
    t("contact_subject_placeholder", "General Inquiry"),
  ];
  const localizedContactBlocks = [
    {
      key: "phone",
      label: `${t("contact_card_phone_title")}`,
      value: SITE_CONFIG.phoneDisplay,
      subtext: t("footer_location"),
    },
    {
      key: "email",
      label: `${t("contact_card_email_title")}`,
      value: "info@siamon.cloud",
      subtext: t("footer_support_email_label"),
    },
    {
      key: "location",
      label: `${t("contact_card_address_title")}`,
      value: t("contact_card_address_value"),
      subtext: t("footer_global_presence"),
    },
    {
      key: "response",
      label: t("contact_submit_loading", "Response Time"),
      value: t("home_cta_no_obligation", "Within 24 hours"),
      subtext: t("loading_label", "Business days"),
    },
  ];

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [usedFallback, setUsedFallback] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    fullName: "",
    businessEmail: "",
    companyName: "",
    serviceInterest: "General Inquiry",
    message: "",
    company: "",
  });

  usePageMeta({
    title: t("contact_seo_title"),
    description: t("contact_seo_desc"),
    scrollToTop: true,
  });

  const validate = () => {
    const next = {};

    if (!form.fullName || form.fullName.trim().length < 2) {
      next.fullName = t("contact_error_name");
    }

    if (
      !form.businessEmail ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.businessEmail.trim())
    ) {
      next.businessEmail = t("contact_error_email");
    }

    if (!form.message || form.message.trim().length < 10) {
      next.message = t("contact_error_message");
    }

    if (form.company) {
      next.company = t("contact_error_spam");
    }

    return next;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitted(false);
    setUsedFallback(false);

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      trackEvent("contact_error", {
        ...form,
        errors: nextErrors,
      });
      return;
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      setErrors({
        form: t("contact_error_supabase"),
      });
      return;
    }

    setLoading(true);

    const message = form.message.trim();
    const { intent, tags } = leadTagger(
      `${form.serviceInterest} ${message}`.trim(),
    );
    const attribution = getAttribution();
    const { lead_score } = leadScoring({
      intent,
      route: `/${lang}/contact`,
      message,
      phone: "",
    });

    const payload = {
      name: form.fullName.trim(),
      email: form.businessEmail.trim(),
      phone: "",
      message,
      source: "contact_form",
      intent,
      tags,
      route: `/${lang}/contact`,
      lead_score,
      priority: computePriority({ lead_score }),
      conversion_stage: computeInitialStage({ intent }),
      followup_due_at: computeFollowupDue({ lead_score }),
      utm_source: attribution.utm_source || null,
      utm_medium: attribution.utm_medium || null,
      utm_campaign: attribution.utm_campaign || null,
      referrer: attribution.referrer || null,
    };

    const completeSuccess = (viaFallback = false) => {
      setErrors({});
      setIsSubmitted(true);
      setUsedFallback(viaFallback);
      trackEvent("contact_success", { ...form });
      setForm({
        fullName: "",
        businessEmail: "",
        companyName: "",
        serviceInterest: "General Inquiry",
        message: "",
        company: "",
      });
    };

    const shouldFallbackToFunction = (error) => {
      const message = String(error?.message || "").toLowerCase();
      const code = String(error?.code || "");

      return (
        code === "42501" ||
        message.includes("row-level security") ||
        message.includes("permission denied") ||
        message.includes("does not exist") ||
        message.includes("relation") ||
        message.includes("schema cache") ||
        message.includes("violates")
      );
    };

    try {
      const { error } = await supabase.from("leads").insert([payload]);

      if (!error) {
        completeSuccess();
        return;
      }

      if (shouldFallbackToFunction(error)) {
        const { error: functionError } = await supabase.functions.invoke(
          "contact-submit",
          {
            body: {
              name: payload.name,
              email: payload.email,
              message: payload.message,
              website: form.company?.trim() || "",
            },
          },
        );

        if (!functionError) {
          completeSuccess(true);
          return;
        }

        setErrors({ form: t("contact_error_submit") });
        trackEvent("contact_error", {
          ...form,
          error:
            functionError.message ||
            functionError.code ||
            "function_submit_failed",
        });
        return;
      }

      setErrors({ form: t("contact_error_submit") });
      trackEvent("contact_error", {
        ...form,
        error: error.message || error.code || "submit_failed",
      });
    } catch {
      setErrors({
        form: t("contact_error_unexpected"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dark relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.15),transparent_50%)]" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[50vh] bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.12),transparent_50%)]" />

      <div className="relative z-10">
        <main className="mx-auto w-full max-w-7xl px-6 pb-24 pt-8 sm:px-10">
          <section className={sectionClass}>
            <div className={`${containerClass} text-center`}>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                {t("contact_title")}
              </h1>
              <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-300">
                {t("contact_desc")}
              </p>
            </div>
          </section>

          <section
            className={`${sectionClass} pt-0`}
            aria-labelledby="contact-grid-title"
          >
            <div className={containerClass}>
              <h2 id="contact-grid-title" className="sr-only">
                Contact form and support information
              </h2>

              <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
                <section className={`${cardClass} p-6 md:p-8`}>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {t("contact_form_title")}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {t("contact_form_desc")}
                  </p>

                  <div aria-live="polite" className="mt-4 space-y-3">
                    {isSubmitted && (
                      <p className="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200">
                        {t("contact_success")}
                      </p>
                    )}
                    {isSubmitted && usedFallback && (
                      <p className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
                        {t(
                          "contact_submit_fallback_notice",
                          "Your message was sent via our backup channel to ensure delivery.",
                        )}
                      </p>
                    )}
                    {errors.form && (
                      <p className="rounded-xl border border-rose-300 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-200">
                        {errors.form}
                      </p>
                    )}
                  </div>

                  <form
                    className="mt-6 space-y-5"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    <div>
                      <label htmlFor="fullName" className={labelClass}>
                        {t("contact_name")} <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={
                          errors.fullName ? "fullName-error" : undefined
                        }
                        className={inputClass}
                      />
                      {errors.fullName && (
                        <p
                          id="fullName-error"
                          className="mt-2 text-xs text-rose-600 dark:text-rose-300"
                        >
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="businessEmail" className={labelClass}>
                        {t("contact_email")} <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="businessEmail"
                        name="businessEmail"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.businessEmail}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.businessEmail)}
                        aria-describedby={
                          errors.businessEmail
                            ? "businessEmail-error"
                            : undefined
                        }
                        className={inputClass}
                      />
                      {errors.businessEmail && (
                        <p
                          id="businessEmail-error"
                          className="mt-2 text-xs text-rose-600 dark:text-rose-300"
                        >
                          {errors.businessEmail}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="companyName" className={labelClass}>
                        {t("footer_company_name")}
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        autoComplete="organization"
                        value={form.companyName}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="serviceInterest" className={labelClass}>
                        {t("services_title")}
                      </label>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        value={form.serviceInterest}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        {localizedServiceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClass}>
                        {t("contact_message")} <span aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={form.message}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        className={inputClass}
                      />
                      {errors.message && (
                        <p
                          id="message-error"
                          className="mt-2 text-xs text-rose-600 dark:text-rose-300"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col items-start gap-3">
                      <button
                        type="submit"
                        disabled={loading}
                        aria-label={t("contact_submit")}
                        className={primaryButtonClass}
                      >
                        {loading
                          ? t("contact_submit_loading")
                          : t("contact_submit")}
                      </button>
                      <p className="text-xs text-slate-400">
                        {t("footer_newsletter_reassurance")}
                      </p>
                    </div>
                  </form>
                </section>

                <aside
                  className={`${cardClass} p-6 md:p-8`}
                  aria-label="Contact information"
                >
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {t("footer_support_email_label")}
                  </h3>
                  <div className="mt-6 divide-y divide-white/10">
                    {localizedContactBlocks.map((block) => (
                      <div
                        key={block.key}
                        className="py-5 first:pt-0 last:pb-0"
                      >
                        <p className="text-sm font-semibold tracking-wide text-slate-200">
                          {block.label}
                        </p>
                        <p className="mt-1 text-lg font-semibold text-slate-100">
                          {block.value}
                        </p>
                        <p className="mt-1 text-sm text-slate-300">
                          {block.subtext}
                        </p>

                        {block.key === "email" && (
                          <div className="mt-6">
                            <LineContactCard />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="py-8" aria-label="Trust statement">
            <div className={containerClass}>
              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
                  {t("home_trusted_title")}
                </p>
              </div>
            </div>
          </section>

          <section
            className={sectionClass}
            aria-labelledby="location-panel-title"
          >
            <div className={containerClass}>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-sm md:p-8">
                <h2
                  id="location-panel-title"
                  className="text-3xl font-bold tracking-tight md:text-4xl"
                >
                  Based in Bangkok. Supporting Global Clients.
                </h2>
                <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
                  {t("footer_global_presence")}
                </p>
                <div
                  className="mt-6 h-56 rounded-2xl border border-white/10 bg-slate-950"
                  aria-label="Bangkok location map placeholder"
                />
              </div>
            </div>
          </section>

          <section className={`${sectionClass} pt-0`}>
            <div className={containerClass}>
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 text-center md:p-12">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Ready to streamline your travel operations?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-300">
                  {t("footer_cta_desc")}
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    to={`/${lang}/contact`}
                    aria-label={t("footer_cta_button")}
                    className={primaryButtonClass}
                  >
                    {t("footer_cta_button")}
                  </Link>
                  <Link
                    to={`/${lang}`}
                    className="text-sm font-semibold text-slate-200 underline decoration-slate-500 underline-offset-4 transition-colors hover:text-cyan-300"
                  >
                    {t("notfound_cta")}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Contact;
