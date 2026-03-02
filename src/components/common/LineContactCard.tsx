import { SITE_CONFIG } from "@/config/site";

function LineContactCard() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-300">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.2 11.4c0-4.3-3.7-7.8-8.2-7.8-4.5 0-8.2 3.5-8.2 7.8 0 3.8 2.9 7 6.8 7.6.3.1.7.2.8.5.1.2.1.6.1.8l-.1.9c0 .3-.2 1 .8.5 1-.4 5.3-3.1 7.2-5.3 1.3-1.4 1.9-2.9 1.9-5Zm-11.8 1.1H6.8V9.7c0-.2.1-.3.3-.3h1c.2 0 .3.1.3.3v1.7h1.6c.2 0 .3.1.3.3v.8c0 .2-.1.3-.3.3Zm2.8 0h-1c-.2 0-.3-.1-.3-.3V9.7c0-.2.1-.3.3-.3h1c.2 0 .3.1.3.3v2.5c0 .2-.1.3-.3.3Zm3.4 0h-.9c-.1 0-.2 0-.3-.1l-1.3-1.8v1.6c0 .2-.1.3-.3.3h-.9c-.2 0-.3-.1-.3-.3V9.7c0-.2.1-.3.3-.3h.9c.1 0 .2 0 .3.1l1.3 1.8V9.7c0-.2.1-.3.3-.3h.9c.2 0 .3.1.3.3v2.5c0 .2-.1.3-.3.3Zm3.1 0H15c-.2 0-.3-.1-.3-.3V9.7c0-.2.1-.3.3-.3h2.7c.2 0 .3.1.3.3v.8c0 .2-.1.3-.3.3h-1.4v.3h1.4c.2 0 .3.1.3.3v.8c0 .2-.1.3-.3.3h-1.4v.3h1.4c.2 0 .3.1.3.3v.8c0 .2-.1.3-.3.3Z" />
          </svg>
        </span>

        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-700 dark:text-slate-200">
            LINE Official Account
          </p>
          <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
            {SITE_CONFIG.lineId}
          </p>
        </div>
      </div>

      <a
        href={SITE_CONFIG.lineUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Chat on LINE with ${SITE_CONFIG.lineId}`}
        className="mt-4 inline-flex items-center justify-center rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
      >
        Chat on LINE
      </a>

      <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
        <img
          src={SITE_CONFIG.lineQr}
          alt="LINE Official Account QR code for Siam On Cloud"
          width="320"
          height="320"
          loading="lazy"
          className="h-auto w-full max-w-full"
        />
      </div>
    </section>
  );
}

export default LineContactCard;
