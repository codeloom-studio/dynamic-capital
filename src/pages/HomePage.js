import React from 'react'
import HeroSection from '../components/HeroSection'
import LoanProcess from '../components/LoanProcess'
import Usp from '../components/Usp'
import EMICalculator from '../components/EMICalculator'
import BlogSection from '../components/BlogSection'
import ReviewSection from '../components/ReviewSection'
import LogoSection from '../components/LogoSection'

const HomePage = () => {
    return (
        <div className="w-full">
            <HeroSection />
            <LoanProcess />
            <Usp />
            <EMICalculator />
            <ReviewSection />
            <BlogSection />
            <LogoSection />
        </div>
    )
}

export default HomePage