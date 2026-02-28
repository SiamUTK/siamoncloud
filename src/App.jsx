import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CookieConsent from "./components/ui/CookieConsent";
import AppErrorBoundary from "./components/layout/AppErrorBoundary";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/legal/Terms"));
const Privacy = lazy(() => import("./pages/legal/Privacy"));
const Cookies = lazy(() => import("./pages/legal/Cookies"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));

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

  // Analytics lazy init and SPA pageview tracking
  import { useLocation } from "react-router-dom";
  import { initAnalytics, trackPageView } from "./lib/analytics";
  const location = useLocation();
  useEffect(() => {
    initAnalytics();
  }, []);
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
  return (
    <BrowserRouter>
      <AppErrorBoundary>
        <Suspense
          fallback={<div className="min-h-screen bg-white" aria-busy="true" />}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />
            {localizedPages.map((page) =>
              locales.map((locale) => (
                <Route
                  key={`${locale}-${page.path || "home"}`}
                  path={localizedPath(locale, page.path)}
                  element={page.element}
                />
              )),
            )}
            {localizedPages.map((page) => (
              <Route
                key={`legacy-${page.path || "home"}`}
                path={page.path ? `/${page.path}` : "/home"}
                element={<Navigate to={defaultLocalePath(page.path)} replace />}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </Suspense>
      </AppErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
