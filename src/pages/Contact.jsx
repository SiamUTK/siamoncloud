import { useMemo, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  computeFollowupDue,
  computeInitialStage,
  computePriority,
} from "@/lib/leadLifecycle";
import { leadScoring } from "@/lib/leadScoring";
import { leadTagger } from "@/lib/leadTagger";
import { getAttribution } from "@/lib/attribution";
import { trackEvent } from "@/lib/analytics";
import getSupabaseClient from "@/lib/supabaseClient";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useLanguage from "@/i18n/useLanguage";
import usePageMeta from "@/hooks/usePageMeta";

function Contact() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
    intent: "",
    route: "",
    source: "",
    campaign: "",
  });

  usePageMeta({
    title: t("contact_seo_title"),
    description: t("contact_seo_desc"),
    scrollToTop: true,
  });

  const contactCards = useMemo(
    () => [
      {
        key: "phone",
        icon: <Phone className="h-5 w-5" />,
        title: t("contact_card_phone_title"),
        body: t("contact_card_phone_value"),
      },
      {
        key: "email",
        icon: <Mail className="h-5 w-5" />,
        title: t("contact_card_email_title"),
        body: t("contact_card_email_value"),
      },
      {
        key: "address",
        icon: <MapPin className="h-5 w-5" />,
        title: t("contact_card_address_title"),
        body: t("contact_card_address_value"),
      },
    ],
    [t],
  );

  const validate = () => {
    const next = {};

    if (!form.name || form.name.trim().length < 2) {
      next.name = t("contact_error_name");
    }

    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      next.email = t("contact_error_email");
    }

    if (!form.message || form.message.trim().length < 10) {
      next.message = t("contact_error_message");
    }

    if (form.company) {
      next.company = t("contact_error_spam");
    }

    return next;
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setErrors({});

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      trackEvent("contact_error", { ...form, errors: nextErrors });
      return;
    }

    setLoading(true);
    trackEvent("contact_submit", { ...form });

    const supabase = getSupabaseClient();
    if (!supabase) {
      setLoading(false);
      setErrors({ form: t("contact_error_supabase") });
      return;
    }

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    const phone = form.subject.trim();
    const source = form.source || "contact_form";
    const route = form.route || "";
    const intentRaw = form.intent || "";
    const { intent, tags } = leadTagger(message || intentRaw);
    const attribution = getAttribution();
    const { lead_score } = leadScoring({ intent, route, message, phone });
    const conversion_stage = computeInitialStage({ intent });
    const priorityFinal = computePriority({ lead_score });
    const followup_due_at = computeFollowupDue({ lead_score });

    const payload = {
      name,
      email,
      phone,
      message,
      source,
      intent,
      tags,
      route,
      lead_score,
      priority: priorityFinal,
      conversion_stage,
      followup_due_at,
      utm_source: attribution.utm_source || null,
      utm_medium: attribution.utm_medium || null,
      utm_campaign: attribution.utm_campaign || null,
      referrer: attribution.referrer || null,
    };

    try {
      const { error } = await supabase.from("leads").insert([payload]);

      if (error) {
        setErrors({ form: t("contact_error_submit") });
        trackEvent("contact_error", { ...form, error });
      } else {
        setIsSubmitted(true);
        trackEvent("contact_success", { ...form });
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
          company: "",
          intent: "",
          route: "",
          source: "",
          campaign: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch {
      setErrors({ form: t("contact_error_unexpected") });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />

      <section className="px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            {t("contact_badge")}
          </p>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
            {t("contact_title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            {t("contact_desc")}
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {contactCards.map((card) => (
            <article
              key={card.key}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                {card.icon}
              </div>
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{card.body}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold">{t("contact_form_title")}</h2>
          <p className="mt-2 text-sm text-slate-400">
            {t("contact_form_desc")}
          </p>

          {isSubmitted && (
            <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
              {t("contact_success")}
            </div>
          )}

          {errors.form && (
            <div className="mt-6 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
              {errors.form}
            </div>
          )}

          <form className="mt-6 space-y-5" onSubmit={onSubmit} noValidate>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={onChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  {t("contact_name")}
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder={t("contact_name_placeholder")}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-400"
                />
                {errors.name && (
                  <p className="mt-2 text-xs text-rose-300">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  {t("contact_email")}
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder={t("contact_email_placeholder")}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-400"
                />
                {errors.email && (
                  <p className="mt-2 text-xs text-rose-300">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                {t("contact_subject")}
              </label>
              <input
                name="subject"
                value={form.subject}
                onChange={onChange}
                placeholder={t("contact_subject_placeholder")}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                {t("contact_message")}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                placeholder={t("contact_message_placeholder")}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition-all focus:border-cyan-400"
              />
              {errors.message && (
                <p className="mt-2 text-xs text-rose-300">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 text-sm font-semibold text-white transition-all hover:shadow-xl disabled:opacity-60"
            >
              {loading ? t("contact_submit_loading") : t("contact_submit")}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
