import React, { useRef, useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
    const [isLoansOpen, setIsLoansOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ mobile menu toggle
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setIsLoansOpen(true);
        }, 200);
    };

    const handleMouseLeave = () => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setIsLoansOpen(false);
        }, 200);
    };

    return (
        <nav className="w-full bg-white flex items-center justify-between px-6 md:px-28 py-4 shadow-md relative">
            {/* Logo */}
            <Link to="/">
                <img src="./assets/logo.svg" alt="logo" className="h-7" />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex gap-10 items-center">
                {/* Loans with Dropdown (Desktop) */}
                <div
                    className="relative group"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <button className="flex items-center gap-1 text-blue font-onest text-base leading-6 font-normal hover:text-gray-900">
                        Loans
                        <FaChevronDown
                            className={`transition-transform duration-200 ${isLoansOpen ? "rotate-180" : ""
                                }`}
                            size={12}
                        />
                    </button>

                    {/* Dropdown Menu */}
                    {isLoansOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                            <ul className="flex flex-col py-2">
                                {[
                                    "Home Loan",
                                    "Loan against Property",
                                    "Business Loan",
                                    "Personal Loan",
                                    "Car Loan",
                                    "Education Loan",
                                ].map(
                                    (loan, idx) => (
                                        <li key={idx}>
                                            <Link
                                                to={`/loan/${idx + 1}`}
                                                className="block px-4 py-2 text-sm font-inter text-gray-700 hover:bg-gray-100"
                                                onClick={() => setIsLoansOpen(false)}
                                            >
                                                {loan}
                                            </Link>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Other Nav Items */}
                <Link
                    to="/emi-calculator"
                    className="text-blue font-onest text-base leading-6 font-normal hover:text-gray-900"
                >
                    Loan Calculator
                </Link>
                <Link
                    to="/loan-eligibility"
                    className="text-blue font-onest text-base leading-6 font-normal hover:text-gray-900"
                >
                    Current Interest Rates
                </Link>
                <Link
                    to="/blog"
                    className="text-blue font-onest text-base leading-6 font-normal hover:text-gray-900"
                >
                    Blog
                </Link>
                <Link
                    to="/about"
                    className="text-blue font-onest text-base leading-6 font-normal hover:text-gray-900"
                >
                    About Us
                </Link>
                <Link
                    to="/career"
                    className="text-blue font-onest text-base leading-6 font-normal hover:text-gray-900"
                >
                    Career
                </Link>
            </div>

            {/* Desktop Contact Us Button */}
            <div className="hidden md:block">
                <Link to="/contact-us">
                    <Button label="Contact Us" />
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-blue text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu (slide down) */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md flex flex-col p-4 z-50 md:hidden">
                    {/* Loans Dropdown (Mobile click toggle) */}
                    <div>
                        <button
                            className="w-full flex justify-between items-center py-2 text-blue font-onest text-base"
                            onClick={() => setIsLoansOpen(!isLoansOpen)}
                        >
                            Loans
                            <FaChevronDown
                                className={`transition-transform duration-200 ${isLoansOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        {isLoansOpen && (
                            <ul className="flex flex-col ml-4">
                                {[
                                    "Home Loan",
                                    "Loan against Property",
                                    "Business Loan",
                                    "Personal Loan",
                                    "Car Loan",
                                    "Education Loan",
                                ].map(
                                    (loan, idx) => (
                                        <li key={idx}>
                                            <Link
                                                to={`/loan/${idx + 1}`}
                                                className="block py-2 text-sm font-inter text-gray-700 hover:text-gray-900"
                                                onClick={() => {
                                                    setIsLoansOpen(false);
                                                    setIsMenuOpen(false);
                                                }}
                                            >
                                                {loan}
                                            </Link>
                                        </li>
                                    )
                                )}
                            </ul>
                        )}
                    </div>

                    {/* Other Links */}
                    <Link
                        to="/emi-calculator"
                        className="py-2 text-blue font-onest hover:text-gray-900"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Loan Calculator
                    </Link>
                    <Link
                        to="/loan-eligibility"
                        className="py-2 text-blue font-onest hover:text-gray-900"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Current Interest Rates
                    </Link>
                    <Link
                        to="/blog"
                        className="py-2 text-blue font-onest hover:text-gray-900"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Blog
                    </Link>
                    <Link
                        to="/about"
                        className="py-2 text-blue font-onest hover:text-gray-900"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About Us
                    </Link>
                    <Link
                        to="/career"
                        className="py-2 text-blue font-onest hover:text-gray-900"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Career
                    </Link>

                    {/* Mobile Contact Us Button */}
                    <div className="mt-4">
                        <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>
                            <Button label="Contact Us" />
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
