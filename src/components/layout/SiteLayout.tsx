function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      {children}
    </div>
  );
}

export default SiteLayout;
