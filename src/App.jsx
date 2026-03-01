import { Suspense, lazy, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import CookieConsent from "./components/ui/CookieConsent";
import AppErrorBoundary from "./components/layout/AppErrorBoundary";
import NotFound from "./pages/NotFound";
import { initAnalytics, trackPageView } from "./lib/analytics";

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
  const { i18n } = useTranslation();

  // analytics init
  useEffect(() => {
    initAnalytics();
  }, []);

  // track SPA navigation
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  // update html lang
  useEffect(() => {
    document.documentElement.lang = i18n.language || "en";
  }, [i18n.language]);

  return (
    <AppErrorBoundary>
      <Suspense
        fallback={<div className="min-h-screen bg-white dark:bg-neutral-950" />}
      >
        <Routes>
          {/* root */}
          <Route path="/" element={<Navigate to="/en" replace />} />

          {/* EN routes */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/about" element={<About />} />
          <Route path="/en/services" element={<Services />} />
          <Route path="/en/contact" element={<Contact />} />
          <Route path="/en/terms" element={<Terms />} />
          <Route path="/en/privacy" element={<Privacy />} />
          <Route path="/en/privacy-policy" element={<Privacy />} />
          <Route path="/en/cookies" element={<Cookies />} />
          <Route path="/en/signup" element={<SignUp />} />
          <Route path="/en/login" element={<Login />} />

          {/* TH routes */}
          <Route path="/th" element={<Home />} />
          <Route path="/th/about" element={<About />} />
          <Route path="/th/services" element={<Services />} />
          <Route path="/th/contact" element={<Contact />} />
          <Route path="/th/terms" element={<Terms />} />
          <Route path="/th/privacy" element={<Privacy />} />
          <Route path="/th/privacy-policy" element={<Privacy />} />
          <Route path="/th/cookies" element={<Cookies />} />
          <Route path="/th/signup" element={<SignUp />} />
          <Route path="/th/login" element={<Login />} />

          {/* legacy redirects */}
          <Route path="/terms" element={<Navigate to="/en/terms" replace />} />
          <Route
            path="/privacy"
            element={<Navigate to="/en/privacy" replace />}
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <CookieConsent />
      </Suspense>
    </AppErrorBoundary>
  );
}

export default App;
