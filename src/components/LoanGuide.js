import React from "react";

const guideData = {
    "home-loan": {
        intro: "A home loan can help you purchase, construct or renovate a home. Dynamic Capital helps you explore suitable options and understand the next steps.",
        eligibility: "Lenders generally review income, employment, credit history, existing obligations and property details.",
        documents: "Common documents include identity and address proof, income proof, bank statements and property documents.",
        use: "A home loan may be used to buy, build or renovate a residential property. Terms vary by lender.",
        related: [["Loan Against Property", "/loan/loan-against-property"], ["Personal Loan", "/loan/personal-loan"]]
    },
    "loan-against-property": {
        intro: "A loan against property lets you access funds by offering a residential or commercial property as security, subject to lender approval.",
        eligibility: "Lenders generally review property ownership, property value, income, credit history and existing obligations.",
        documents: "Common documents include property papers, identity and address proof, income documents and recent bank statements.",
        use: "Funds may support business expansion, education, medical needs or other approved personal and business requirements.",
        related: [["Home Loan", "/loan/home-loan"], ["Business Loan", "/loan/business-loan"]]
    },
    "business-loan": {
        intro: "A business loan can help manage working capital, purchase equipment, maintain inventory or fund business expansion.",
        eligibility: "Lenders generally consider business type, operating history, turnover, profitability, credit history and existing obligations.",
        documents: "Common documents include KYC documents, business proof, GST or registration documents, financial statements and bank statements.",
        use: "Business loans are commonly used for working capital, machinery, inventory, premises upgrades and expansion.",
        related: [["Loan Against Property", "/loan/loan-against-property"]]
    },
    "personal-loan": {
        intro: "A personal loan can provide funds for travel, weddings, medical expenses, education, home improvements or other personal needs.",
        eligibility: "Eligible salaried and self-employed applicants are assessed on income, credit history, existing obligations and lender criteria.",
        documents: "Common documents include identity and address proof, income proof and recent bank statements.",
        use: "Personal loans may be used for approved personal expenses. Final terms and permitted use vary by lender.",
        related: [["Home Loan", "/loan/home-loan"], ["Business Loan", "/loan/business-loan"]]
    },
    "car-loan": {
        intro: "A car loan can help finance a new or used vehicle with repayment options based on the loan amount, rate and tenure.",
        eligibility: "Lenders generally review income, credit profile, existing obligations, vehicle details and repayment capacity.",
        documents: "Common documents include identity and address proof, income proof, bank statements and the vehicle quotation.",
        use: "Car loans may finance new or used vehicles, subject to the lender's vehicle and loan criteria.",
        related: [["Personal Loan", "/loan/personal-loan"]]
    },
    "education-loan": {
        intro: "An education loan can help fund higher studies, including tuition, accommodation, books and other approved education costs.",
        eligibility: "Lenders generally consider admission to an eligible course, academic record, course fees and the co-applicant's income and credit profile.",
        documents: "Common documents include the admission letter, fee structure, academic records and KYC and income documents of the co-applicant.",
        use: "Depending on the lender, education loans may cover tuition, hostel charges, books, equipment and examination costs.",
        related: [["Personal Loan", "/loan/personal-loan"]]
    }
};

const LoanGuide = ({ loanType, loanId }) => {
    const guide = guideData[loanId];

    return (
        <section className="w-full bg-dullBlue px-6 py-16 md:px-12 lg:px-20" aria-labelledby="loan-guide-heading">
            <div className="mx-auto max-w-5xl">
                <h2 id="loan-guide-heading" className="mb-4 font-onest text-3xl font-semibold text-blue">About {loanType}</h2>
                <p className="max-w-3xl font-onest leading-7 text-blue">{guide.intro}</p>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <h3 className="mb-3 font-onest text-xl font-semibold text-blue">Eligibility Criteria</h3>
                        <p className="font-onest text-sm leading-6 text-blue">{guide.eligibility}</p>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <h3 className="mb-3 font-onest text-xl font-semibold text-blue">Documents Required</h3>
                        <p className="font-onest text-sm leading-6 text-blue">{guide.documents}</p>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        <h3 className="mb-3 font-onest text-xl font-semibold text-blue">How to Apply</h3>
                        <p className="font-onest text-sm leading-6 text-blue">Check eligibility, estimate your EMI, keep your documents ready and <a href="/contact-us" className="font-semibold text-lightBlue underline">contact our team</a>.</p>
                    </div>
                </div>
                <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
                    <h3 className="mb-3 font-onest text-xl font-semibold text-blue">What Can It Be Used For?</h3>
                    <p className="font-onest text-sm leading-6 text-blue">{guide.use}</p>
                    <p className="mt-4 font-onest text-sm text-blue">Estimate your repayment with our <a href="/emi-calculator" className="font-semibold text-lightBlue underline">EMI calculator</a> or <a href="/loan-eligibility" className="font-semibold text-lightBlue underline">check your eligibility</a>.</p>
                </div>
                <p className="mt-8 font-onest text-sm text-blue">
                    Explore other options: {guide.related.map(([label, href], index) => <React.Fragment key={href}><a href={href} className="font-semibold text-lightBlue underline">{label}</a>{index < guide.related.length - 1 ? ", " : "."}</React.Fragment>)}
                </p>
            </div>
        </section>
    );
};

export default LoanGuide;
