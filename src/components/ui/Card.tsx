function Card({ as: Component = "div", className = "", children, ...props }) {
  return (
    <Component
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-none dark:hover:border-slate-700 dark:hover:shadow-none ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Card;
