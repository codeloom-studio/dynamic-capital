import React from 'react'
import Button from './Button'

const LoanProcess = () => {
    return (
        <section className="w-full bg-offWhite flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20 py-12 md:py-20 gap-8 md:gap-12">

            {/* Heading */}
            <h1 className="text-blue font-onest text-2xl sm:text-3xl md:text-[32px] leading-snug md:leading-[100%] font-semibold">
                From application to Money in your account{" "}
                <span className="italic text-lightBlue">here's how it works</span>
            </h1>
            <p className="text-sm sm:text-base md:text-[15px] text-blue leading-relaxed md:leading-[130%] font-onest font-normal max-w-2xl">
                Getting a loan shouldn’t feel complicated — we’ve made the process simple, fast, and transparent.
            </p>

            {/* Process Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">

                {/* Left - Image */}
                <div className="flex justify-center">
                    <div className="w-56 h-56 sm:w-80 sm:h-80 md:w-[460px] md:h-[460px] rounded-full overflow-hidden relative">
                        <img
                            src="./assets/works.svg"
                            alt="Family"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-blue-500/30" />
                    </div>
                </div>

                {/* Right - Steps */}
                <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 items-start justify-start text-left">
                    {[
                        {
                            num: 1,
                            title: "Check if you’re eligible in 30 seconds",
                            desc: "See if you qualify with no fuss",
                        },
                        {
                            num: 2,
                            title: "Submit your application at your Door Steps",
                            desc: "Complete a 100% application form",
                        },
                        {
                            num: 3,
                            title: "Get sanctioned Quickly",
                            desc: "We will evaluate your application propose a fair sanction",
                        },
                        {
                            num: 4,
                            title: "Funds paid out typically within 7 days",
                            desc: "Once you accept your offer, bank will deposit the funds into your account",
                        },
                    ].map((step) => (
                        <div key={step.num} className="flex gap-4 items-start">
                            <span className="text-blue font-semibold text-xl sm:text-2xl leading-7 sm:leading-8">
                                {step.num}
                            </span>
                            <div>
                                <h3 className="text-blue font-semibold text-lg sm:text-xl md:text-[22px] leading-snug">
                                    {step.title}
                                </h3>
                                <p className="text-blue text-sm sm:text-base leading-5 sm:leading-6 font-onest">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="w-full flex justify-center md:justify-start">
                        <Button label="Apply Now" />
                    </div>
                </div>
            </div>

            {/* Bottom Support Section */}
            <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 w-full md:w-2/3">
                <div className="flex items-center gap-4 text-left">
                    <img
                        src="./assets/avatar.svg"
                        alt="Support"
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                    />
                    <div className="flex flex-col items-start justify-center">
                        <h4 className="font-onest font-semibold text-lg sm:text-xl leading-6 sm:leading-8 text-blue">
                            Here to help if you need us
                        </h4>
                        <p className="text-blue text-sm sm:text-base font-onest leading-5 sm:leading-6">
                            Contact our UK-based team if you have any questions
                        </p>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end w-full md:w-auto">
                    <Button label="Contact Us" border={true} text="blue" bgColor="white" />
                </div>
            </div>
        </section>
    )
}

export default LoanProcess
