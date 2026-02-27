import { useTranslation } from 'react-i18next';
const LAST_UPDATED = 'February 27, 2026';
export default function Privacy() {
  const { t } = useTranslation();
  return (
    <section className="bg-white dark:bg-slate-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">{t('legal.privacy.title')}</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">{t('legal.privacy.lastUpdated', { date: LAST_UPDATED })}</p>
        </header>
        <nav className="sticky top-4 z-10 hidden md:block mb-10">
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
            <li><a href="#intro" className="hover:underline">{t('legal.privacy.sections.intro')}</a></li>
            <li><a href="#controller" className="hover:underline">{t('legal.privacy.sections.controller')}</a></li>
            <li><a href="#types" className="hover:underline">{t('legal.privacy.sections.types')}</a></li>
            <li><a href="#collection" className="hover:underline">{t('legal.privacy.sections.collection')}</a></li>
            <li><a href="#legalbases" className="hover:underline">{t('legal.privacy.sections.legalbases')}</a></li>
            <li><a href="#usage" className="hover:underline">{t('legal.privacy.sections.usage')}</a></li>
            <li><a href="#ai" className="hover:underline">{t('legal.privacy.sections.ai')}</a></li>
            <li><a href="#sharing" className="hover:underline">{t('legal.privacy.sections.sharing')}</a></li>
            <li><a href="#transfers" className="hover:underline">{t('legal.privacy.sections.transfers')}</a></li>
            <li><a href="#retention" className="hover:underline">{t('legal.privacy.sections.retention')}</a></li>
            <li><a href="#rights" className="hover:underline">{t('legal.privacy.sections.rights')}</a></li>
            <li><a href="#cookies" className="hover:underline">{t('legal.privacy.sections.cookies')}</a></li>
            <li><a href="#security" className="hover:underline">{t('legal.privacy.sections.security')}</a></li>
            <li><a href="#children" className="hover:underline">{t('legal.privacy.sections.children')}</a></li>
            <li><a href="#updates" className="hover:underline">{t('legal.privacy.sections.updates')}</a></li>
            <li><a href="#contact" className="hover:underline">{t('legal.privacy.sections.contact')}</a></li>
          </ul>
        </nav>
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h2 id="intro">{t('legal.privacy.sections.intro')}</h2>
          <p>{t('legal.privacy.intro')}</p>
          <h2 id="controller">{t('legal.privacy.sections.controller')}</h2>
          <p>{t('legal.privacy.controller')}</p>
          <h2 id="types">{t('legal.privacy.sections.types')}</h2>
          <p>{t('legal.privacy.types')}</p>
          <h2 id="collection">{t('legal.privacy.sections.collection')}</h2>
          <p>{t('legal.privacy.collection')}</p>
          <h2 id="legalbases">{t('legal.privacy.sections.legalbases')}</h2>
          <p>{t('legal.privacy.legalbases')}</p>
          <h2 id="usage">{t('legal.privacy.sections.usage')}</h2>
          <p>{t('legal.privacy.usage')}</p>
          <h2 id="ai">{t('legal.privacy.sections.ai')}</h2>
          <p>{t('legal.privacy.ai')}</p>
          <h2 id="sharing">{t('legal.privacy.sections.sharing')}</h2>
          <p>{t('legal.privacy.sharing')}</p>
          <h2 id="transfers">{t('legal.privacy.sections.transfers')}</h2>
          <p>{t('legal.privacy.transfers')}</p>
          <h2 id="retention">{t('legal.privacy.sections.retention')}</h2>
          <p>{t('legal.privacy.retention')}</p>
          <h2 id="rights">{t('legal.privacy.sections.rights')}</h2>
          <p>{t('legal.privacy.rights')}</p>
          <h2 id="cookies">{t('legal.privacy.sections.cookies')}</h2>
          <p>{t('legal.privacy.cookies')}</p>
          <h2 id="security">{t('legal.privacy.sections.security')}</h2>
          <p>{t('legal.privacy.security')}</p>
          <h2 id="children">{t('legal.privacy.sections.children')}</h2>
          <p>{t('legal.privacy.children')}</p>
          <h2 id="updates">{t('legal.privacy.sections.updates')}</h2>
          <p>{t('legal.privacy.updates')}</p>
          <h2 id="contact">{t('legal.privacy.sections.contact')}</h2>
          <p>{t('legal.privacy.contact')}</p>
        </article>
      </div>
    </section>
  );
}
