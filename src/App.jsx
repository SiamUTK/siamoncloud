import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function lazyWithRetry(importer, key) {
  return lazy(async () => {
    const retryKey = `lazy-retry:${key}`;

    try {
      const module = await importer();
      sessionStorage.removeItem(retryKey);
      return module;
    } catch (error) {
      const hasRetried = sessionStorage.getItem(retryKey) === "1";

      if (!hasRetried) {
        sessionStorage.setItem(retryKey, "1");
        window.location.reload();
        return new Promise(() => {});
      }

      throw error;
    }
  });
}

const Home = lazyWithRetry(() => import("./pages/HomePage"), "home");
const About = lazyWithRetry(() => import("./pages/About"), "about");
const Services = lazyWithRetry(() => import("./pages/Services"), "services");
const Contact = lazyWithRetry(() => import("./pages/Contact"), "contact");
const Terms = lazyWithRetry(() => import("./pages/Terms"), "terms");
const Privacy = lazyWithRetry(() => import("./pages/Privacy"), "privacy");
const SignUp = lazyWithRetry(() => import("./pages/SignUp"), "signup");
const Login = lazyWithRetry(() => import("./pages/Login"), "login");

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={<div className="min-h-screen bg-white" aria-busy="true" />}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
