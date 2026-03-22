// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoanPage from "./pages/LoanPage";
import EMICalculatorPage from "./pages/EMICalculatorPage";
import ContactUsPage from "./pages/ContactUsPage";
import LoanEligibilityForm from "./components/LoanEligibilityForm";
// import BlogPage from "./pages/BlogPage";
// import CareerPage from "./pages/CareerPage";
import AboutUsPage from "./pages/AboutUsPage";
import { preloadCriticalImages } from "./utils/imagePreloader";

const ScrollRevealController = () => {
  const location = useLocation();

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll("section, main, .scroll-animate, [data-animate], button")
    );

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    targets.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      if (element.tagName === "BUTTON") {
        element.classList.add("scroll-reveal-button");
      }
      element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 350)}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
};

function App() {
  useEffect(() => {
    // Preload critical images on app start
    preloadCriticalImages().then(() => {
      console.log('Critical images preloaded');
    }).catch(err => {
      console.warn('Some images failed to preload:', err);
    });
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollRevealController />
        {/* Navbar stays always */}
        <Navbar />

        {/* Page content changes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loan/:id" element={<LoanPage />} />
          {/* <Route path="/blog" element={<BlogPage />} /> */}
          <Route path="/about" element={<AboutUsPage />} />
          {/* <Route path="/career" element={<CareerPage />} /> */}
          <Route path="/emi-calculator" element={<EMICalculatorPage />} />
          <Route path="/loan-eligibility" element={<LoanEligibilityForm />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>

        {/* Footer stays always */}
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
