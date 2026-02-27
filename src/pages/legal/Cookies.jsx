import { useTranslation } from 'react-i18next';
const LAST_UPDATED = 'February 27, 2026';
const cookies = [
  {
    name: 'sb-access-token',
    provider: 'Supabase',
    purpose: 'Authentication and session management',
    duration: 'Persistent',
    category: 'Strictly Necessary',
  },
  {
    name: 'sb-refresh-token',
    provider: 'Supabase',
    purpose: 'Session refresh',
    duration: 'Persistent',
    category: 'Strictly Necessary',
  },
  {
    name: 'i18next',
    provider: 'Siam On Cloud',
    purpose: 'Stores selected language',
    duration: '1 year',
    category: 'Functional',
  },
  {
    name: 'cookie-consent',
    provider: 'Siam On Cloud',
    purpose: 'Stores cookie consent preferences',
    duration: '1 year',
    category: 'Strictly Necessary',
  },
  {
    name: '_ga',
    provider: 'Google Analytics',
    purpose: 'Analytics and usage tracking',
    duration: '2 years',
    category: 'Analytics',
  },
  {
    name: '_gid',
    provider: 'Google Analytics',
    purpose: 'Analytics and usage tracking',
    duration: '24 hours',
    category: 'Analytics',
  },
];
export default function Cookies() {
  const { t } = useTranslation();
  return (
    <section className="bg-white dark:bg-slate-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">{t('legal.cookies.title')}</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">{t('legal.cookies.lastUpdated', { date: LAST_UPDATED })}</p>
        </header>
        <article className="prose prose-slate dark:prose-invert max-w-none mb-10">
          <h2>{t('legal.cookies.sections.intro')}</h2>
          <p>{t('legal.cookies.intro')}</p>
          <h2>{t('legal.cookies.sections.categories')}</h2>
          <p>{t('legal.cookies.categories')}</p>
          <h2>{t('legal.cookies.sections.management')}</h2>
          <p>{t('legal.cookies.management')}</p>
          <h2>{t('legal.cookies.sections.table')}</h2>
        </article>
        <div className="overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800">
          <table className="min-w-full text-sm text-slate-700 dark:text-slate-200">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700">
                <th className="px-4 py-3 text-left font-bold">{t('legal.cookies.table.name')}</th>
                <th className="px-4 py-3 text-left font-bold">{t('legal.cookies.table.provider')}</th>
                <th className="px-4 py-3 text-left font-bold">{t('legal.cookies.table.purpose')}</th>
                <th className="px-4 py-3 text-left font-bold">{t('legal.cookies.table.duration')}</th>
                <th className="px-4 py-3 text-left font-bold">{t('legal.cookies.table.category')}</th>
              </tr>
            </thead>
            <tbody>
              {cookies.map((cookie) => (
                <tr key={cookie.name} className="border-t border-slate-100 dark:border-slate-700">
                  <td className="px-4 py-2 font-mono">{cookie.name}</td>
                  <td className="px-4 py-2">{cookie.provider}</td>
                  <td className="px-4 py-2">{cookie.purpose}</td>
                  <td className="px-4 py-2">{cookie.duration}</td>
                  <td className="px-4 py-2">{cookie.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
