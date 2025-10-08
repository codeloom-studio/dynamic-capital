import React from 'react'
import HeroSection from '../components/HeroSection'
import LoanProcess from '../components/LoanProcess'
import Usp from '../components/Usp'
import EMICalculator from '../components/EMICalculator'
import BlogSection from '../components/BlogSection'
import ReviewSection from '../components/ReviewSection'
import LogoSection from '../components/LogoSection'
import SEO from '../components/SEO'

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
                <LoanProcess />
                <Usp />
                <EMICalculator />
                <ReviewSection />
                <BlogSection />
                <LogoSection />
            </div>
        </>
    )
}

export default HomePage