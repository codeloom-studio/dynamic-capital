// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoanPage from "./pages/LoanPage";
import EMICalculatorPage from "./pages/EMICalculatorPage";
import ContactUsPage from "./pages/ContactUsPage";
import LoanEligibilityForm from "./components/LoanEligibilityForm";
import BlogPage from "./pages/BlogPage";
import CareerPage from "./pages/CareerPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <Router>
      {/* Navbar stays always */}
      <Navbar />

      {/* Page content changes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/emi-calculator" element={<EMICalculatorPage />} />
        <Route path="/loan-eligibility" element={<LoanEligibilityForm />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>

      {/* Footer stays always */}
      <Footer />
    </Router>
  );
}

export default App;
