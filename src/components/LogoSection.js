import React from 'react'

const logos = [
    "./assets/logos/logo1.svg",
    "./assets/logos/logo2.svg",
    "./assets/logos/logo3.svg",
    "./assets/logos/logo4.svg",
    "./assets/logos/logo5.svg",
    "./assets/logos/logo6.svg",
    "./assets/logos/logo7.svg",
    "./assets/logos/logo8.svg",
    "./assets/logos/logo9.svg",
    "./assets/logos/logo10.svg",
    "./assets/logos/logo11.svg",
    "./assets/logos/logo12.svg",
    "./assets/logos/logo13.svg",
    "./assets/logos/logo14.svg",
    "./assets/logos/logo15.svg",
    "./assets/logos/logo16.svg",
    "./assets/logos/logo17.svg",
    "./assets/logos/logo18.svg",
    "./assets/logos/logo19.svg",
    "./assets/logos/logo20.svg",
    "./assets/logos/logo21.svg",
    "./assets/logos/logo22.svg",
    "./assets/logos/logo23.svg",
    "./assets/logos/logo24.svg",
    "./assets/logos/logo25.svg",
    "./assets/logos/logo26.svg",
    "./assets/logos/logo27.svg",
    "./assets/logos/logo28.svg",
    "./assets/logos/logo29.svg",
    "./assets/logos/logo30.svg",
    "./assets/logos/logo31.svg",
    "./assets/logos/logo32.svg",
    "./assets/logos/logo33.svg",
    "./assets/logos/logo34.svg",
    "./assets/logos/logo35.svg",
    "./assets/logos/logo36.svg",
    "./assets/logos/logo37.svg",
    "./assets/logos/logo38.svg",
    "./assets/logos/logo39.svg",
    "./assets/logos/logo40.svg",
    "./assets/logos/logo41.svg",
    "./assets/logos/logo42.svg",
    "./assets/logos/logo43.svg",
    "./assets/logos/logo44.svg",
    "./assets/logos/logo45.svg",
    "./assets/logos/logo46.svg",
    "./assets/logos/logo47.svg",
    "./assets/logos/logo48.svg",
]
const LogoSection = () => {
    return (
        <section className="w-full bg-blue flex flex-col items-center justify-center text-center px-4 md:px-16 lg:px-28 py-10 md:py-16 gap-6">
            <h1 className="font-taviraj text-white font-semibold text-2xl md:text-3xl lg:text-4xl leading-snug text-center mb-6">
                Connected with India’s <span className="italic text-lightBlue">Leading Banks</span>
            </h1>

            {/* Logos */}
            <div className="w-full max-w-6xl grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6 place-items-center">
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Bank Logo ${index + 1}`}
                        className="h-10 sm:h-12 md:h-14 object-contain  hover:grayscale-0 transition duration-300"
                    />
                ))}
            </div>
        </section>
    )
}

export default LogoSection
