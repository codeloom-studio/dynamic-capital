import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate();

    const redirect = () => {
        navigate('/contact-us');
    }
    return (
        <section className="w-full bg-blue flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 lg:px-28 py-12 md:py-20 gap-8 md:gap-6 text-center md:text-left">

            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
                <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-onest leading-snug md:leading-[120%] font-semibold text-white">
                    Compare Best{" "}
                    <span className="text-3xl sm:text-4xl lg:text-[64px] font-taviraj font-bold text-lightBlue italic">
                        Loan Offer
                    </span>{" "}
                    with Lowest Interest Rate
                </h1>
                <p className="text-sm sm:text-base md:text-[15px] text-white leading-relaxed md:leading-[150%] font-onest font-normal">
                    No need to visit banks or wait in queues — we bring loan
                    assistance, documentation, and support straight to your
                    doorstep for a smooth, stress-free experience.
                </p>
                <div className="flex justify-center md:justify-start">
                    <Button label="Apply Now" onClick={redirect} />
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src="./assets/hero-image.svg"
                    alt="Hero"
                    className="w-3/4 sm:w-2/3 md:w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-5xl"
                />
            </div>
        </section>
    )
}

export default HeroSection
