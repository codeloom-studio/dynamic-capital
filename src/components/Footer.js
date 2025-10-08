import React, { useState } from "react";
import Button from "./Button";
import OptimizedImage from "./OptimizedImage";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
                <p className="text-2xl md:text-[32px] font-onest text-blue">82910-71621</p>
                <p className="text-xs font-onest text-blue">dynamiccapitaladv@gmail.com</p>
                <p className="text-xs font-onest text-blue">
                    Office no. H206, 2nd Floor, BRSCCL Towert no. 3, CBD BelapurStation, Navi Mumbai- 400614
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
                    {[
                        "Home Loan",
                        "Loan against Property",
                        "Business Loan",
                        "Personal Loan",
                        "Car Loan",
                        "Education Loan",
                    ].map((loan, index) => (
                        <a key={index} href="#" className="text-sm font-onest text-blue">
                            {loan}
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
                    <a href="#" className="text-sm font-onest text-blue">
                        Menu 1
                    </a>
                    <a href="#" className="text-sm font-onest text-blue">
                        Menu 2
                    </a>
                    <a href="#" className="text-sm font-onest text-blue">
                        Menu 3
                    </a>
                    <a href="#" className="text-sm font-onest text-blue">
                        Menu 4
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
