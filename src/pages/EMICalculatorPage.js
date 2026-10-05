import React from 'react'
import LoanCalculator from '../components/LoanCalculator'
import SEO from '../components/SEO'

const EMICalculatorPage = () => {
    return (
        <>
            <SEO
                title="EMI Calculator - Calculate Your Loan EMI | Dynamic Capital"
                description="Calculate your monthly loan EMI, total interest and overall repayment amount with Dynamic Capital's EMI calculator."
                keywords="EMI calculator, loan EMI calculator, calculate loan EMI, Dynamic Capital"
                url={window.location.href}
            />
            <LoanCalculator />
        </>
    )
}

export default EMICalculatorPage