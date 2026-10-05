import React from 'react'
import FlexiSection from '../components/FlexiSection'
import LoanForm from '../components/LoanForm'
import SEO from '../components/SEO'
import LoanGuide from '../components/LoanGuide'
import { useParams } from "react-router-dom";

const flexiData = [
    {
        id: "home-loan",
        title: "Easy, Affordable, <span class='italic text-lightBlue font-taviraj'>Stress Free</span> Home Loans",
        subtitle: "home loan service",
        loanType: "Home Loan",
        description:
            "Turn your dream home into reality with quick approvals, simple documentation, and competitive interest rates. Whether you're buying your first house, upgrading to a bigger space, or refinancing, our home loans are designed to make your journey smooth and worry-free.",
        image: "/assets/home-loan-hero.svg",
    },
    {
        id: "loan-against-property",
        title: "Unlock the <span class='italic text-lightBlue font-taviraj'>Value of Your </span> with Ease",
        subtitle: "Loan Against Property service",
        loanType: "Loan Against Property",
        description:
            "Get access to high-value funds by leveraging your residential or commercial property. Enjoy quick approvals, minimal paperwork, and attractive interest rates. Whether it's for business expansion, education, or personal needs, our Loan Against Property helps you achieve your goals without selling your asset.",
        image: "/assets/loan-against-property-hero.svg",
    },
    {
        id: "business-loan",
        title: "Fast, Flexible, and <span class='italic text-lightBlue font-taviraj'>Hassle-Free</span> Funding",
        subtitle: "business loan service",
        loanType: "Business Loan",
        description:
            "Get the capital you need to grow with quick approvals, minimal paperwork, and low interest rates. Whether you're expanding, upgrading equipment, or boosting working capital, our business loans are designed to keep your vision moving forward.",
        image: "/assets/business-loan-hero.svg",
    },
    {
        id: "personal-loan",
        title: "Quick, Simple, and Stress Free <span class='italic text-lightBlue font-taviraj'>Personal Loans</span>",
        subtitle: "Personal Loan service",
        loanType: "Personal Loan",
        description:
            "Get instant access to funds for any need — from travel and weddings to medical expenses and home upgrades. Enjoy fast approvals, minimal documentation, and flexible repayment options, so you can focus on what matters most without financial worries.",
        image: "/assets/personal-loan-hero.svg",
    },
    {
        id: "car-loan",
        title: "Drive Home <span class='italic text-lightBlue font-taviraj'>Your Dream Car</span>, Hassle Free",
        subtitle: "Car Loan service",
        loanType: "Car Loan",
        description:
            "Own the car you've always wanted with quick approvals, easy documentation, and attractive interest rates. Whether it's a new or pre-owned car, our flexible repayment options make your journey smooth and affordable.",
        image: "/assets/car-loan-hero.svg",
    },
    {
        id: "education-loan",
        title: "Invest in Your Future with <span class='italic text-lightBlue font-taviraj'>Easy Education Loans</span>",
        subtitle: "Education Loan service",
        loanType: "Education Loan",
        description:
            "Pursue your dreams without financial stress. Get quick approvals, minimal paperwork, and flexible repayment options to fund your higher education, professional courses, or skill development programs — in India or abroad.",
        image: "/assets/education-loan-hero.svg",
    },
];

const faqData = {
    "home-loan": [
        ["Who can apply for a home loan?", "Salaried and self-employed applicants can generally apply, subject to the lender's eligibility criteria, income and credit profile."],
        ["What can a home loan be used for?", "A home loan may be used to purchase, construct or renovate a residential property, depending on the lender and loan product."],
        ["What documents are needed for a home loan?", "Common documents include identity and address proof, income proof, bank statements and property documents. Requirements vary by lender."],
        ["How is home loan EMI calculated?", "EMI depends on the loan amount, interest rate and tenure. Use our EMI calculator to estimate your monthly instalment."]
    ],
    "loan-against-property": [
        ["What is a loan against property?", "A loan against property allows you to raise funds by offering a residential or commercial property as security, subject to lender approval."],
        ["What can the funds be used for?", "Funds may be used for business expansion, education, medical needs or other approved personal and business requirements."],
        ["What documents are needed?", "Common documents include property papers, identity and address proof, income documents and recent bank statements."],
        ["How is the loan amount decided?", "The loan amount depends on the property's value, your income, credit profile and the lender's policies."]
    ],
    "business-loan": [
        ["Who can apply for a business loan?", "Sole proprietors, partnership firms and companies can generally apply, subject to the lender's criteria."],
        ["What can a business loan be used for?", "Business loans are commonly used for working capital, equipment, inventory and expansion."],
        ["What documents does a business need to provide?", "Common documents include KYC documents, business proof, financial statements and bank statements. Requirements vary by lender."],
        ["Is collateral required for a business loan?", "It depends on the loan type, amount and lender. Our team can explain the available options."]
    ],
    "personal-loan": [
        ["What can a personal loan be used for?", "Personal loans may help cover expenses such as travel, weddings, medical needs, education or home improvements."],
        ["Who can apply for a personal loan?", "Eligible salaried and self-employed applicants can apply, subject to the lender's income, credit and documentation requirements."],
        ["What documents are needed for a personal loan?", "Common documents include identity and address proof, income proof and recent bank statements."],
        ["How is personal loan EMI calculated?", "EMI depends on the loan amount, interest rate and tenure. Use our EMI calculator to estimate it."]
    ],
    "car-loan": [
        ["Can I get a loan for a used car?", "Many lenders offer finance for used cars, subject to the age and condition of the vehicle. Contact our team to know your options."],
        ["Do I need to pay a down payment for a car loan?", "Down payment requirements vary by lender and vehicle. Our team can guide you on this."],
        ["What documents are needed for a car loan?", "Common documents include identity and address proof, income proof, bank statements and the vehicle quotation."],
        ["How is my car loan EMI calculated?", "EMI depends on the loan amount, interest rate and tenure. Use our EMI calculator to estimate it."]
    ],
    "education-loan": [
        ["Who can apply for an education loan?", "Students who have secured admission to an eligible course can apply, usually with a parent or guardian as co-applicant."],
        ["Which expenses can an education loan cover?", "Depending on the lender, it may cover tuition fees, hostel charges, books, equipment and other education-related costs."],
        ["What documents are needed for an education loan?", "Common documents include the admission letter, fee structure, academic records and KYC and income documents of the co-applicant."],
        ["When does repayment of an education loan start?", "Repayment terms depend on the lender. Many education loans offer a repayment holiday during the course."]
    ]
};

const LoanFaqs = ({ loanType, items }) => (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-20" aria-labelledby="loan-faq-heading">
        <div className="mx-auto max-w-4xl">
            <h2 id="loan-faq-heading" className="mb-8 text-center font-onest text-3xl font-semibold text-blue">
                Frequently Asked <span className="font-taviraj italic text-lightBlue">Questions</span>
            </h2>
            <div className="space-y-3">
                {items.map(([question, answer]) => (
                    <details key={question} className="rounded-lg border border-blue/15 bg-dullBlue px-5 py-4">
                        <summary className="cursor-pointer font-onest font-semibold text-blue">{question}</summary>
                        <p className="pt-3 font-onest text-sm leading-6 text-blue">{answer}</p>
                    </details>
                ))}
            </div>
            <p className="mt-8 text-center font-onest text-sm text-blue">
                Need help with your {loanType.toLowerCase()}? <a href="/contact-us" className="font-semibold text-lightBlue underline">Contact our team</a>.
            </p>
        </div>
    </section>
);

const LoanPage = () => {
    const { id } = useParams(); // get id from URL
    const product = flexiData.find((item) => item.id === id) || flexiData[0];
    const faqs = faqData[product.id];

    const seoTitle = product.id === "loan-against-property"
        ? "Loan Against Property: Eligibility | Dynamic Capital"
        : `${product.loanType} Options & Eligibility | Dynamic Capital`;
    const seoDescription = `Explore ${product.loanType.toLowerCase()} options from Dynamic Capital. See eligibility, documents required and how to apply.`;
    const organizationSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "FinancialService",
                "@id": "https://www.dynamiccapital.in/#organization",
                "name": "Dynamic Capital",
                "url": "https://www.dynamiccapital.in/",
                "logo": "https://www.dynamiccapital.in/assets/logo.svg"
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(([question, answer]) => ({
                    "@type": "Question",
                    "name": question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": answer
                    }
                }))
            }
        ]
    };

    return (
        <>
            <SEO
                title={seoTitle}
                description={seoDescription}
                keywords={`${product.loanType.toLowerCase()}, ${product.loanType.toLowerCase().replace(' ', '-')}, loan application, financial services, dynamic capital`}
                url={window.location.href}
                breadcrumbName={product.loanType}
                schemaData={organizationSchema}
            />
            <FlexiSection
                title={product.title}
                subtitle={product.subtitle}
                description={product.description}
                image={product.image} />
            <LoanGuide loanType={product.loanType} loanId={product.id} />
            <LoanForm loanType={product.loanType} />
            <LoanFaqs loanType={product.loanType} items={faqs} />
        </>
    )
}

export default LoanPage