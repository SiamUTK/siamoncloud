import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CookieConsent from "./components/ui/CookieConsent";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));

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
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <CookieConsent />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
