import React from 'react'
import HeroSection from '../components/HeroSection'
import LoanProcess from '../components/LoanProcess'
import Usp from '../components/Usp'
import EMICalculator from '../components/EMICalculator'
// import BlogSection from '../components/BlogSection'
import ReviewSection from '../components/ReviewSection'
import LogoSection from '../components/LogoSection'
import SEO from '../components/SEO'

const loanLinks = [
    ['Personal Loan', '/loan/personal-loan'],
    ['Home Loan', '/loan/home-loan'],
    ['Car Loan', '/loan/car-loan'],
    ['Business Loan', '/loan/business-loan'],
    ['Education Loan', '/loan/education-loan'],
    ['Loan Against Property', '/loan/loan-against-property']
];

const HomePage = () => {
    return (
        <>
            <SEO
                title="Dynamic Capital - Your Trusted Financial Partner | Loans & Financial Services"
                description="Get instant personal loans, home loans, car loans, business loans, and education loans with quick approvals, minimal documentation, and competitive interest rates at Dynamic Capital."
                keywords="personal loans, home loans, car loans, business loans, education loans, financial services, loan approval, competitive rates, navi mumbai, mumbai loans"
                url={window.location.href}
            />
            <div className="w-full">
                <HeroSection />
                <section className="bg-dullBlue px-6 py-14 md:px-12 lg:px-20" aria-labelledby="loan-options-heading">
                    <div className="mx-auto max-w-6xl">
                        <h2 id="loan-options-heading" className="mb-6 font-onest text-3xl font-semibold text-blue">Loans and Financial Solutions for Every Need</h2>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {loanLinks.map(([label, href]) => <a key={href} href={href} className="rounded-lg bg-white p-5 font-onest font-semibold text-blue shadow-sm hover:text-lightBlue">{label}</a>)}
                        </div>
                        <a href="/contact-us" className="mt-6 inline-block font-onest font-semibold text-lightBlue underline">Contact our team</a>
                    </div>
                </section>
                <LoanProcess />
                <Usp />
                <EMICalculator />
                <ReviewSection />
                {/* <BlogSection /> */}
                <LogoSection />
            </div>
        </>
    )
}

export default HomePage