import { Component } from "react";
import LanguageContext from "@/i18n/languageContextInstance";

class AppErrorBoundary extends Component {
  static contextType = LanguageContext;

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("[AppErrorBoundary]", error, errorInfo);
  }

  render() {
    const t = this.context?.t;

    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-center text-slate-900 dark:bg-slate-950 dark:text-white">
          <div>
            <h1 className="mb-3 text-2xl font-bold">
              {t?.("error_boundary_title")}
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              {t?.("error_boundary_desc")}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;
