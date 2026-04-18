import React, { useRef, useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";

const flexiData = [
    {
        id: "home-loan",
        title: "Easy, Affordable, <span class='italic text-lightBlue font-taviraj'>Stress Free</span> Home Loans",
        subtitle: "home loan service",
        loanType: "Home Loan",
        description:
            "Turn your dream home into reality with quick approvals, simple documentation, and competitive interest rates. Whether you're buying your first house, upgrading to a bigger space, or refinancing, our home loans are designed to make your journey smooth and worry-free.",
        image: "/assets/home-loan-hero.svg",
    },
    {
        id: "loan-against-property",
        title: "Unlock the <span class='italic text-lightBlue font-taviraj'>Value of Your </span> with Ease",
        subtitle: "Loan Against Property service",
        loanType: "Loan Against Property",
        description:
            "Get access to high-value funds by leveraging your residential or commercial property. Enjoy quick approvals, minimal paperwork, and attractive interest rates. Whether it's for business expansion, education, or personal needs, our Loan Against Property helps you achieve your goals without selling your asset.",
        image: "/assets/loan-against-property-hero.svg",
    },
    {
        id: "business-loan",
        title: "Fast, Flexible, and <span class='italic text-lightBlue font-taviraj'>Hassle-Free</span> Funding",
        subtitle: "business loan service",
        loanType: "Business Loan",
        description:
            "Get the capital you need to grow with quick approvals, minimal paperwork, and low interest rates. Whether you're expanding, upgrading equipment, or boosting working capital, our business loans are designed to keep your vision moving forward.",
        image: "/assets/business-loan-hero.svg",
    },
    {
        id: "personal-loan",
        title: "Quick, Simple, and Stress Free <span class='italic text-lightBlue font-taviraj'>Personal Loans</span>",
        subtitle: "Personal Loan service",
        loanType: "Personal Loan",
        description:
            "Get instant access to funds for any need — from travel and weddings to medical expenses and home upgrades. Enjoy fast approvals, minimal documentation, and flexible repayment options, so you can focus on what matters most without financial worries.",
        image: "/assets/personal-loan-hero.svg",
    },
    {
        id: "car-loan",
        title: "Drive Home <span class='italic text-lightBlue font-taviraj'>Your Dream Car</span>, Hassle Free",
        subtitle: "Car Loan service",
        loanType: "Car Loan",
        description:
            "Own the car you've always wanted with quick approvals, easy documentation, and attractive interest rates. Whether it's a new or pre-owned car, our flexible repayment options make your journey smooth and affordable.",
        image: "/assets/car-loan-hero.svg",
    },
    {
        id: "education-loan",
        title: "Invest in Your Future with <span class='italic text-lightBlue font-taviraj'>Easy Education Loans</span>",
        subtitle: "Education Loan service",
        loanType: "Education Loan",
        description:
            "Pursue your dreams without financial stress. Get quick approvals, minimal paperwork, and flexible repayment options to fund your higher education, professional courses, or skill development programs — in India or abroad.",
        image: "/assets/education-loan-hero.svg",
    },
];

const Navbar = () => {
    const [isLoansOpen, setIsLoansOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ mobile menu toggle
    const timeoutRef = useRef(null);
    const [activeTab, setActiveTab] = useState("");

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
                                {flexiData.map(
                                    (loan) => (
                                        <li key={loan.id}>
                                            <Link
                                                to={`/loan/${loan.id}`}
                                                className="block px-4 py-2 text-sm font-inter text-gray-700 hover:bg-gray-100"
                                                onClick={() => setIsLoansOpen(false)}
                                            >
                                                {loan.loanType}
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
                    className={`font-onest text-base leading-6 font-normal ${activeTab === "emi-calculator" ? "text-lightBlue" : "text-blue hover:text-gray-900"
                        }`}
                    onClick={() => setActiveTab("emi-calculator")}
                >
                    Loan Calculator
                </Link>
                <Link
                    to="/loan-eligibility"
                    className={`font-onest text-base leading-6 font-normal ${activeTab === "loan-eligibility" ? "text-lightBlue" : "text-blue hover:text-gray-900"
                        }`}
                    onClick={() => setActiveTab("loan-eligibility")}
                >
                    Current Interest Rates
                </Link>
                {/* <Link
                    to="/blog"
                    className={`font-onest text-base leading-6 font-normal ${activeTab === "blog" ? "text-lightBlue" : "text-blue hover:text-gray-900"
                        }`}
                    onClick={() => setActiveTab("blog")}
                >
                    Blog
                </Link> */}
                <Link
                    to="/about"
                    className={`font-onest text-base leading-6 font-normal ${activeTab === "about" ? "text-lightBlue" : "text-blue hover:text-gray-900"
                        }`}
                    onClick={() => setActiveTab("about")}
                >
                    About Us
                </Link>
                {/* <Link
                    to="/career"
                    className={`font-onest text-base leading-6 font-normal ${activeTab === "career" ? "text-lightBlue" : "text-blue hover:text-gray-900"
                        }`}
                    onClick={() => setActiveTab("career")}
                >
                    Career
                </Link> */}
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
                                {flexiData.map(
                                    (loan) => (
                                        <li key={loan.id}>
                                            <Link
                                                to={`/loan/${loan.id}`}
                                                className="block py-2 text-sm font-inter text-gray-700 hover:text-gray-900"
                                                onClick={() => {
                                                    setIsLoansOpen(false);
                                                    setIsMenuOpen(false);
                                                }}
                                            >
                                                {loan.loanType}
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
                    {/* <Link
                        to="/blog"
                        className="py-2 text-blue font-onest hover:text-gray-900"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Blog
                    </Link> */}
                    <Link
                        to="/about"
                        className="py-2 text-blue font-onest hover:text-gray-900"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About Us
                    </Link>
                    {/* <Link
                        to="/career"
                        className="py-2 text-blue font-onest hover:text-gray-900"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Career
                    </Link> */}

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
