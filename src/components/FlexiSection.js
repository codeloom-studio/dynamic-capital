import React from 'react'
import Button from './Button'

const FlexiSection = () => {
    return (
        <section className="w-full h-[705px] relative">
            <img src="./assets/hero-2.svg" alt="Flexi Section" className="w-full h-full object-cover" />
            <div className="absolute top-[40vh] left-[30vw] transform -translate-x-1/2 -translate-y-1/2 w-1/2 bg-white flex flex-col justify-center items-left text-left p-8 gap-6 rounded-lg">
                <h2 className="text-6xl  font-onest font-semibold text-blue mb-4">
                    Fast, Flexible, and <br /> <span className='italic text-lightBlue'>Hassle-Free </span>Funding
                </h2>
                <p className="text-blue text-2xl">
                    Explore our <span className='font-bold'>business loan service</span>
                </p>
                <p className='text-blue text-base'>
                    Get the capital you need to grow with quick approvals, minimal paperwork, and low interest rates. Whether you’re expanding, upgrading equipment, or boosting working capital, our business loans are designed to keep your vision moving forward.
                </p>
                <Button label="Apply Now" bgColor='blue' />
            </div>
        </section>
    )
}

export default FlexiSection