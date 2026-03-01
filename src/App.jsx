import { Suspense, lazy, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import CookieConsent from "./components/ui/CookieConsent";
import AppErrorBoundary from "./components/layout/AppErrorBoundary";
import NotFound from "./pages/NotFound";

import { initAnalytics, trackPageView } from "./lib/analytics";

// Lazy pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/legal/Terms"));
const Privacy = lazy(() => import("./pages/legal/Privacy"));
const Cookies = lazy(() => import("./pages/legal/Cookies"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));

// Localized page config
const localizedPages = [
  { path: "", element: <Home /> },
  { path: "about", element: <About /> },
  { path: "services", element: <Services /> },
  { path: "contact", element: <Contact /> },
  { path: "terms", element: <Terms /> },
  { path: "privacy", element: <Privacy /> },
  { path: "privacy-policy", element: <Privacy /> },
  { path: "cookies", element: <Cookies /> },
  { path: "signup", element: <SignUp /> },
  { path: "login", element: <Login /> },
];

const locales = ["en", "th"];

function localizedPath(locale, path) {
  return path ? `/${locale}/${path}` : `/${locale}`;
}

function defaultLocalePath(path) {
  return path ? `/en/${path}` : "/en";
}

function App() {
  const location = useLocation();
  const { i18n } = useTranslation();

  // ✅ Init analytics once
  useEffect(() => {
    initAnalytics();
  }, []);

  // ✅ Track SPA page views
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  // ✅ Update <html lang="">
  useEffect(() => {
    document.documentElement.lang = i18n.language || "en";
  }, [i18n.language]);

  return (
    <AppErrorBoundary>
      <Suspense
        fallback={
          <div
            className="min-h-screen bg-white dark:bg-neutral-950"
            aria-busy="true"
          />
        }
      >
        <Routes>
          {/* Root redirect */}
          <Route path="/" element={<Navigate to="/en" replace />} />

          {/* Localized routes */}
          {localizedPages.map((page) =>
            locales.map((locale) => (
              <Route
                key={`${locale}-${page.path || "home"}`}
                path={localizedPath(locale, page.path)}
                element={page.element}
              />
            )),
          )}

          {/* Legacy redirects */}
          {localizedPages.map((page) => (
            <Route
              key={`legacy-${page.path || "home"}`}
              path={page.path ? `/${page.path}` : "/home"}
              element={<Navigate to={defaultLocalePath(page.path)} replace />}
            />
          ))}

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <CookieConsent />
      </Suspense>
    </AppErrorBoundary>
  );
}

export default App;
