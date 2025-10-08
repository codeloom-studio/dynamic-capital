import React from 'react'
import Button from './Button'
import OptimizedImage from './OptimizedImage'

const FlexiSection = ({ title, subtitle, description, image }) => {

    const scrollToLoanForm = () => {
        // Scroll down by the viewport height to reach the next section
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <section className="w-full h-[705px] relative">
            <OptimizedImage
                src={image}
                alt={`${subtitle} - Dynamic Capital Financial Services`}
                className="w-full h-full object-cover"
                priority={true}
            />
            <div className="absolute top-[40vh] left-[30vw] transform -translate-x-1/2 -translate-y-1/2 w-1/2 bg-white flex flex-col justify-center items-left text-left p-8 gap-6 rounded-lg">
                <h2
                    className="text-6xl font-onest font-semibold text-blue mb-4"
                    dangerouslySetInnerHTML={{ __html: title }}
                />

                <p className="text-blue text-2xl">
                    Explore Our <span className='font-bold'>{subtitle}</span>
                </p>
                <p className='text-blue text-base'>
                    {description}
                </p>
                <Button label="Apply Now" bgColor='blue' onClick={scrollToLoanForm} />
            </div>
        </section>
    )
}

export default FlexiSection

//<span className='italic text-lightBlue'>