import React from 'react'
import FlexiSection from '../components/FlexiSection'
import LoanForm from '../components/LoanForm'
import { useParams } from "react-router-dom";

const flexiData = [
    {
        id: "1",
        title: "Easy, Affordable, <span class='italic text-lightBlue font-taviraj'>Stress Free</span> Home Loans",
        subtitle: "home loan service",
        loanType: "Home Loan",
        description:
            "Turn your dream home into reality with quick approvals, simple documentation, and competitive interest rates. Whether you're buying your first house, upgrading to a bigger space, or refinancing, our home loans are designed to make your journey smooth and worry-free.",
        image: "/assets/home-loan-hero.svg",
    },
    {
        id: "2",
        title: "Unlock the <span class='italic text-lightBlue font-taviraj'>Value of Your </span> with Ease",
        subtitle: "Loan Against Property service",
        loanType: "Loan Against Property",
        description:
            "Get access to high-value funds by leveraging your residential or commercial property. Enjoy quick approvals, minimal paperwork, and attractive interest rates. Whether it's for business expansion, education, or personal needs, our Loan Against Property helps you achieve your goals without selling your asset.",
        image: "/assets/loan-against-property-hero.svg",
    },
    {
        id: "3",
        title: "Fast, Flexible, and <span class='italic text-lightBlue font-taviraj'>Hassle-Free</span> Funding",
        subtitle: "business loan service",
        loanType: "Business Loan",
        description:
            "Get the capital you need to grow with quick approvals, minimal paperwork, and low interest rates. Whether you're expanding, upgrading equipment, or boosting working capital, our business loans are designed to keep your vision moving forward.",
        image: "/assets/business-loan-hero.svg",
    },
    {
        id: "4",
        title: "Quick, Simple, and Stress Free <span class='italic text-lightBlue font-taviraj'>Personal Loans</span>",
        subtitle: "Personal Loan service",
        loanType: "Personal Loan",
        description:
            "Get instant access to funds for any need — from travel and weddings to medical expenses and home upgrades. Enjoy fast approvals, minimal documentation, and flexible repayment options, so you can focus on what matters most without financial worries.",
        image: "/assets/personal-loan-hero.svg",
    },
    {
        id: "5",
        title: "Drive Home <span class='italic text-lightBlue font-taviraj'>Your Dream Car</span>, Hassle Free",
        subtitle: "Car Loan service",
        loanType: "Car Loan",
        description:
            "Own the car you've always wanted with quick approvals, easy documentation, and attractive interest rates. Whether it's a new or pre-owned car, our flexible repayment options make your journey smooth and affordable.",
        image: "/assets/car-loan-hero.svg",
    },
    {
        id: "6",
        title: "Invest in Your Future with <span class='italic text-lightBlue font-taviraj'>Easy Education Loans</span>",
        subtitle: "Education Loan service",
        loanType: "Education Loan",
        description:
            "Pursue your dreams without financial stress. Get quick approvals, minimal paperwork, and flexible repayment options to fund your higher education, professional courses, or skill development programs — in India or abroad.",
        image: "/assets/education-loan-hero.svg",
    },
];

const LoanPage = () => {
    const { id } = useParams(); // get id from URL
    const product = flexiData.find((item) => item.id === id) || flexiData[0];

    return (
        <>
            <FlexiSection
                title={product.title}
                subtitle={product.subtitle}
                description={product.description}
                image={product.image} />
            <LoanForm loanType={product.loanType} />
        </>
    )
}

export default LoanPage