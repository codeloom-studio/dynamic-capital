import React from 'react'

const Usp = () => {
    return (
        <div className="bg-blue grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-stretch text-center mx-auto px-6 sm:px-12 md:px-20 lg:px-28 py-10 md:py-16 gap-8">

            {/* USP 1 */}
            <div className="flex flex-col items-start justify-start text-left px-4 sm:px-6 py-6 md:py-10 gap-4 bg-blue/10 rounded-lg hover:bg-blue/20 transition">
                <img src="./assets/curr.svg" alt="Usp1" className="w-12 h-12" />
                <h4 className="text-lightWhite font-taviraj text-xl sm:text-2xl leading-snug font-medium">
                    Wide Range of Loan Options
                </h4>
                <p className="text-lightWhite font-onest font-normal text-sm sm:text-base leading-relaxed">
                    Whether it’s a Home Loan, Personal Loan, Car Loan, or even Education Loan, we have you covered. Choose from multiple products tailored to meet every financial need — all in one place.
                </p>
            </div>

            {/* USP 2 */}
            <div className="flex flex-col items-start justify-start text-left px-4 sm:px-6 py-6 md:py-10 gap-4 bg-blue/10 rounded-lg hover:bg-blue/20 transition">
                <img src="./assets/star.svg" alt="Usp2" className="w-12 h-12" />
                <h4 className="text-lightWhite font-taviraj text-xl sm:text-2xl leading-snug font-medium">
                    Quick & Hassle-Free Process
                </h4>
                <p className="text-lightWhite font-onest font-normal text-sm sm:text-base leading-relaxed">
                    Apply online in minutes, get instant eligibility checks, and enjoy faster approvals with minimal paperwork. Our seamless process saves you time so you can focus on what matters most.
                </p>
            </div>

            {/* USP 3 */}
            <div className="flex flex-col items-start justify-start text-left px-4 sm:px-6 py-6 md:py-10 gap-4 bg-blue/10 rounded-lg hover:bg-blue/20 transition">
                <img src="./assets/sheild.svg" alt="Usp3" className="w-12 h-12" />
                <h4 className="text-lightWhite font-taviraj text-xl sm:text-2xl leading-snug font-medium">
                    Trusted Network of Banks
                </h4>
                <p className="text-lightWhite font-onest font-normal text-sm sm:text-base leading-relaxed">
                    We work with leading banks and NBFCs to offer you competitive interest rates and flexible repayment plans — so you always get the best deal possible.
                </p>
            </div>
        </div>
    )
}

export default Usp
