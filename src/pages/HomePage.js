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
                title="Personal, Home & Business Loans | Dynamic Capital"
                description="Explore personal, home, car, business and education loans and loan against property with Dynamic Capital. Check eligibility and talk to our team."
                keywords="personal loans, home loans, car loans, business loans, education loans, financial services, loan approval, competitive rates, navi mumbai, mumbai loans"
                url={window.location.href}
            />
            <div className="w-full">
                <HeroSection />
                <section className="bg-dullBlue px-6 py-14 md:px-12 lg:px-20" aria-labelledby="loan-options-heading">
                    <div className="mx-auto max-w-6xl">
                        <h2 id="loan-options-heading" className="mb-6 font-onest text-3xl font-semibold text-blue">Our Loan Products</h2>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {loanLinks.map(([label, href]) => <a key={href} href={href} className="rounded-lg bg-white p-5 font-onest font-semibold text-blue shadow-sm hover:text-lightBlue"><h3>{label}</h3></a>)}
                        </div>
                        <a href="/contact-us" className="mt-6 inline-block font-onest font-semibold text-lightBlue underline">Contact our team</a>
                    </div>
                </section>
                <LoanProcess />
                <Usp />
                <section className="bg-lightWhite px-6 py-14 md:px-12 lg:px-20" aria-labelledby="emi-planning-heading">
                    <div className="mx-auto max-w-6xl">
                        <h2 id="emi-planning-heading" className="mb-6 font-onest text-3xl font-semibold text-blue">Check Your Eligibility and Plan Your EMI</h2>
                        <EMICalculator />
                    </div>
                </section>
                <section className="bg-white px-6 py-14 text-center md:px-12 lg:px-20" aria-labelledby="advisor-heading">
                    <div className="mx-auto max-w-3xl">
                        <h2 id="advisor-heading" className="font-onest text-3xl font-semibold text-blue">Talk to Our Advisor</h2>
                        <p className="mt-4 leading-7 text-grey">Our advisors can help you understand your loan options and next steps.</p>
                        <a href="tel:8291071621" className="mt-6 inline-block rounded-[3px] bg-lightBlue px-8 py-4 font-inter text-[15px] font-medium text-white hover:bg-blue">Talk to Our Advisor</a>
                    </div>
                </section>
                <section className="bg-dullBlue px-6 py-14 md:px-12 lg:px-20" aria-labelledby="faq-heading">
                    <div className="mx-auto max-w-6xl">
                        <h2 id="faq-heading" className="font-onest text-3xl font-semibold text-blue">Frequently Asked Questions</h2>
                        <div className="mt-8 divide-y divide-lightGrey border-y border-lightGrey">
                            {[["Which loan can I apply for?", "You can explore personal, home, car, business, education and loan against property options."], ["Can I check my eligibility before applying?", "Yes. Use our eligibility form to receive an initial indication."], ["How can I estimate my monthly repayment?", "Use the EMI calculator to compare loan amounts, interest rates and tenures."]].map(([question, answer]) => <details key={question} className="group py-5"><summary className="cursor-pointer list-none"><h3 className="inline text-lg font-semibold text-blue">{question}</h3><span className="float-right text-lightBlue group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl leading-7 text-grey">{answer}</p></details>)}
                        </div>
                    </div>
                </section>
                <ReviewSection />
                {/* <BlogSection /> */}
                <LogoSection />
            </div>
        </>
    )
}

export default HomePage