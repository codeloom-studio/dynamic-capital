// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { FaWhatsapp } from 'react-icons/fa';

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

        {/* Floating WhatsApp Icon */}
        <a href="https://wa.me/8291071621" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 bg-green text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50">
          <FaWhatsapp size={24} />
        </a>
      </Router>
    </HelmetProvider>
  );
}

export default App;
