import React from 'react'

const LogoSection = () => {
    return (
        <section className="w-full bg-blue flex flex-col items-center justify-center text-center px-4 md:px-16 lg:px-28 py-10 md:py-16 gap-6">
            <h1 className="font-taviraj text-white font-semibold text-2xl md:text-3xl lg:text-4xl leading-snug text-center mb-6">
                Connected with India’s <span className="italic text-lightBlue">Leading Banks</span>
            </h1>

            {/* Logos */}
            <div className="w-full max-w-6xl grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6 place-items-center">
                {Array.from({ length: 24 }).map((_, index) => (
                    <img
                        key={index}
                        src="./assets/sbi-logo.svg"
                        alt={`Bank Logo ${index + 1}`}
                        className="h-10 sm:h-12 md:h-14 object-contain  hover:grayscale-0 transition duration-300"
                    />
                ))}
            </div>
        </section>
    )
}

export default LogoSection
