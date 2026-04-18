import React, { useState } from "react";
import Button from "./Button";
import OptimizedImage from "./OptimizedImage";
import { FaChevronDown, FaPhone, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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

const Footer = () => {
    const navigate = useNavigate();

    const redirect = () => {
        navigate('/contact-us');
    }
    const [isLoansOpen, setIsLoansOpen] = useState(false);
    const [isLinksOpen, setIsLinksOpen] = useState(false);

    return (
        <footer className="w-full bg-white text-blue px-6 md:px-12 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.25fr,1fr,1fr,1fr] gap-10">
            {/* Contact + Info */}
            <div className="flex flex-col items-start gap-3">
                <OptimizedImage src="./assets/logo.svg" alt="Dynamic Capital Logo" className="h-10" />
                <a href="tel:82910-71621" className="flex items-center gap-2">
                    <FaPhone className="text-blue" />
                    <span className="text-2xl md:text-[32px] font-onest text-blue">82910-71621</span>
                </a>
                <a href="mailto:dynamiccapitaladv@gmail.com" className="flex items-center gap-2">
                    <FaEnvelope className="text-blue" />
                    <span className="text-xs font-onest text-blue">dynamiccapitaladv@gmail.com</span>
                </a>
                <p className="text-xs font-onest text-blue">
                    Office no. H-206, 2nd Floor, BRSCCL Tower no. 3, CBD Belapur Station, Navi Mumbai- 400614
                </p>
                <Button label="Contact Us" bgColor="blue" onClick={redirect} />
            </div>

            {/* Loans */}
            <div className="flex flex-col gap-3 items-start">
                {/* Mobile Dropdown Header */}
                <button
                    className="flex justify-between items-center w-full lg:cursor-default lg:pointer-events-none font-onest text-lightBlue text-xs mb-2"
                    onClick={() => setIsLoansOpen(!isLoansOpen)}
                >
                    LOANS
                    <FaChevronDown
                        className={`lg:hidden transition-transform duration-200 ${isLoansOpen ? "rotate-180" : ""
                            }`}
                    />
                </button>

                {/* Links */}
                <div className={`flex flex-col gap-3 ${isLoansOpen ? "block" : "hidden"} lg:flex`}>
                    {flexiData.map((loan) => (
                        <a key={loan.id} href={`/loan/${loan.id}`} className="text-sm font-onest text-blue">
                            {loan.loanType}
                        </a>
                    ))}
                </div>
            </div>

            {/* Main Links */}
            <div className="flex flex-col gap-3 items-start">
                {/* Mobile Dropdown Header */}
                <button
                    className="flex justify-between items-center w-full lg:cursor-default lg:pointer-events-none font-onest text-lightBlue text-xs mb-2"
                    onClick={() => setIsLinksOpen(!isLinksOpen)}
                >
                    MAIN LINKS
                    <FaChevronDown
                        className={`lg:hidden transition-transform duration-200 ${isLinksOpen ? "rotate-180" : ""
                            }`}
                    />
                </button>

                {/* Links */}
                <div className={`flex flex-col gap-3 ${isLinksOpen ? "block" : "hidden"} lg:flex`}>
                    <a href="/about" className="text-sm font-onest text-blue">
                        About Us
                    </a>
                    <a href="/loan-eligibility" className="text-sm font-onest text-blue">
                        Current Interest Rates
                    </a>
                    <a href="/emi-calculator" className="text-sm font-onest text-blue">
                        Loan Calculator
                    </a>
                </div>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-3 items-start">
                <h3 className="font-onest font-normal text-lightBlue text-xs mb-2">SOCIAL</h3>
                <div className="flex items-center gap-3">
                    <img src="./assets/link-f.svg" alt="Facebook" className="h-5" />
                    <img src="./assets/link-x.svg" alt="Twitter" className="h-5" />
                    <img src="./assets/link-l.svg" alt="LinkedIn" className="h-5" />
                </div>
            </div>
        </footer >
    );
};

export default Footer;
