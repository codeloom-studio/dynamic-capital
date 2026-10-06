import React from 'react'
import LoanCalculator from '../components/LoanCalculator'
import SEO from '../components/SEO'

const EMICalculatorPage = () => {
    return (
        <>
            <SEO
                title="EMI Calculator – Calculate Your Loan EMI | Dynamic Capital"
                description="Use the Dynamic Capital EMI calculator to estimate your monthly instalment. Enter the loan amount, interest rate and tenure to plan your repayments."
                keywords="EMI calculator, loan EMI calculator, calculate loan EMI, Dynamic Capital"
                url={window.location.href}
                breadcrumbName="Loan EMI Calculator"
            />
            <LoanCalculator />
        </>
    )
}

export default EMICalculatorPage