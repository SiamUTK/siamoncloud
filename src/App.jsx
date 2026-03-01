import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import CookieConsent from "./components/ui/CookieConsent";
import AppErrorBoundary from "./components/layout/AppErrorBoundary";
import LocalizedLayout, {
  RootLanguageRedirect,
} from "./components/layout/LocalizedLayout";
import NotFound from "./pages/NotFound";
import { initAnalytics, trackPageView } from "./lib/analytics";
import useLanguage from "@/i18n/useLanguage";

// Lazy pages
const Home = lazy(() => import("./pages/HomePage"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/legal/Terms"));
const Privacy = lazy(() => import("./pages/legal/Privacy"));
const Cookies = lazy(() => import("./pages/legal/Cookies"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  const location = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <AppErrorBoundary key={lang}>
      <Suspense
        fallback={
          <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-6">
            <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-lg">
              <div className="h-5 w-44 rounded-full bg-white/10 animate-pulse" />
              <div className="mt-4 h-3 w-full rounded bg-white/10 animate-pulse" />
              <div className="mt-2 h-3 w-5/6 rounded bg-white/10 animate-pulse" />
              <div className="mt-2 h-3 w-2/3 rounded bg-white/10 animate-pulse" />
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<RootLanguageRedirect />} />

          <Route path="/:lang/*" element={<LocalizedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="privacy-policy" element={<Privacy />} />
            <Route path="cookies" element={<Cookies />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="/terms" element={<Navigate to="/en/terms" replace />} />
          <Route
            path="/privacy"
            element={<Navigate to="/en/privacy" replace />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <CookieConsent />
      </Suspense>
    </AppErrorBoundary>
  );
}

export default App;
