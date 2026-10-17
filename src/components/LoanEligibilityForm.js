import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import SEO from "./SEO";

const inputClass = "mt-2 w-full rounded-md border border-lightGrey bg-white px-4 py-3 font-onest text-sm text-blue outline-none focus:border-lightBlue focus:ring-2 focus:ring-dullBlue";
const selectClass = `${inputClass} appearance-none pr-12`;
const loanTypes = ["Personal loan", "Home loan", "Car loan", "Business loan", "Education loan", "Loan against property"];
const employmentTypes = ["Salaried", "Self-employed", "Business owner", "Professional", "Other"];
const faqs = [
    ["What affects my loan eligibility?", "Your age, income, employment type, credit history, existing EMIs and the loan amount you request all affect eligibility."],
    ["Is the eligibility result final?", "No. The result is only an indication. The lender makes the final decision after assessing your application."],
    ["What documents should I keep ready?", "Keep your identity proof, address proof, income proof and recent bank statements ready. Some loans need additional documents."],
    ["Can I improve my eligibility?", "Yes. Paying EMIs on time, keeping credit card usage low and reducing existing debt can help over time."],
    ["Can I check eligibility for more than one loan?", "Yes. Contact our advisors and they can guide you on the options for each loan type."],
];
const factors = [
    ["Age", "Lenders set a minimum and maximum age for borrowers, and the repayment period must usually fit within it."],
    ["Income and Employment", "A stable income, whether salaried or self-employed, shows that you can repay the loan. Business owners may be asked for business vintage and financial records."],
    ["Credit Score", "A good credit score and a record of timely repayments improve your chances. Missed payments can reduce them."],
    ["Existing EMIs", "The more of your income already goes to EMIs, the less room a lender sees for a new one."],
    ["Loan Amount and Tenure", "The amount you ask for and the repayment period should be realistic compared with your income."],
    ["Property or Vehicle Details", "For secured loans such as home loans, car loans and loan against property, the lender also assesses the asset being financed."],
];

const LoanEligibilityForm = () => {
    const [formData, setFormData] = useState({ loanType: "", employment: "", income: "", existingEmis: "", loanAmount: "", city: "" });
    const [result, setResult] = useState(null);

    const handleChange = ({ target }) => setFormData((previous) => ({ ...previous, [target.name]: target.value }));

    const handleSubmit = (event) => {
        event.preventDefault();
        const monthlyIncome = Number(formData.income);
        const existingEmis = Number(formData.existingEmis);
        const requestedAmount = Number(formData.loanAmount);
        const monthlyCapacity = Math.max(0, monthlyIncome * 0.5 - existingEmis);
        setResult({ requestedAmount, indicativeAmount: Math.round(monthlyCapacity * 60) });
    };

    return (
        <>
            <SEO title="Loan Eligibility Check | Dynamic Capital" description="Check your loan eligibility with Dynamic Capital. See what you may qualify for across personal, home, car, business and education loans." keywords="loan eligibility check, loan eligibility calculator, loan application, Dynamic Capital" url={window.location.href} breadcrumbName="Check Your Loan Eligibility" />
            <main className="bg-lightWhite font-onest text-blue">
                <section className="bg-dullBlue px-6 py-16 md:px-16 md:py-24">
                    <div className="mx-auto max-w-6xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lightBlue">Plan before you apply</p>
                        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Check Your Loan Eligibility</h1>
                        <p className="mt-6 max-w-3xl text-base leading-7 text-grey md:text-lg">Find out what you may be eligible for before you apply. Loan eligibility depends on several factors, and knowing where you stand helps you plan a stronger, smoother application.</p>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-6 py-16 md:px-16 md:py-24">
                    <h2 className="text-3xl font-semibold md:text-4xl">Check Your Eligibility</h2>
                    <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr,0.95fr]">
                        <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-sm md:p-8">
                            <div className="grid gap-5 md:grid-cols-2">
                                <label className="text-sm font-semibold">Loan type<div className="relative"><select required name="loanType" value={formData.loanType} onChange={handleChange} className={selectClass}><option value="">Select loan type</option>{loanTypes.map((type) => <option key={type}>{type}</option>)}</select><FaChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 mt-1 -translate-y-1/2 text-blue" size={16} /></div></label>
                                <label className="text-sm font-semibold">Employment type<div className="relative"><select required name="employment" value={formData.employment} onChange={handleChange} className={selectClass}><option value="">Select employment type</option>{employmentTypes.map((type) => <option key={type}>{type}</option>)}</select><FaChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 mt-1 -translate-y-1/2 text-blue" size={16} /></div></label>
                                <label className="text-sm font-semibold">Monthly income<input required type="number" min="1" name="income" value={formData.income} onChange={handleChange} className={inputClass} placeholder="Enter monthly income" /></label>
                                <label className="text-sm font-semibold">Existing EMIs<input required type="number" min="0" name="existingEmis" value={formData.existingEmis} onChange={handleChange} className={inputClass} placeholder="Enter monthly EMIs" /></label>
                                <label className="text-sm font-semibold">Loan amount required<input required type="number" min="1" name="loanAmount" value={formData.loanAmount} onChange={handleChange} className={inputClass} placeholder="Enter required amount" /></label>
                                <label className="text-sm font-semibold">City<input required name="city" value={formData.city} onChange={handleChange} className={inputClass} placeholder="Enter your city" /></label>
                            </div>
                            <button type="submit" className="mt-8 rounded-[3px] bg-lightBlue px-8 py-4 font-inter text-[15px] font-medium text-white hover:bg-blue">Check Now</button>
                        </form>
                        <div className="rounded-lg bg-blue p-6 text-white md:p-8">
                            <p className="text-sm uppercase tracking-[0.15em] text-white/70">Your indication</p>
                            {result ? <><h3 className="mt-5 text-3xl font-semibold">{result.indicativeAmount >= result.requestedAmount ? "Your request may fit this indication" : "Your requested amount may need review"}</h3><p className="mt-4 leading-7 text-white/80">Based on the income and existing EMI details you shared, an indicative amount is approximately ₹{result.indicativeAmount.toLocaleString("en-IN")}. Our advisor can help you understand the next steps.</p></> : <p className="mt-6 leading-7 text-white/80">Complete the form to see an initial indication based on your income and existing EMIs.</p>}
                            <p className="mt-8 border-t border-white/20 pt-5 text-xs leading-5 text-white/70">The result is only an indication. The lender assesses your application and makes the final decision on eligibility, interest rate and terms.</p>
                        </div>
                    </div>
                </section>

                <section className="border-y border-lightGrey bg-white px-6 py-16 md:px-16 md:py-20">
                    <div className="mx-auto max-w-6xl">
                        <h2 className="text-3xl font-semibold">What Is Loan Eligibility?</h2>
                        <p className="mt-5 max-w-4xl leading-7 text-grey">Loan eligibility is the lender's assessment of whether you qualify for a loan, and for how much. Lenders look at your income, credit history, existing obligations and the purpose of the loan before they decide.</p>
                        <h2 className="mt-14 text-3xl font-semibold">Factors That Affect Your Loan Eligibility</h2>
                        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{factors.map(([title, text]) => <article key={title} className="border-t-4 border-lightBlue bg-lightWhite p-6"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-grey">{text}</p></article>)}</div>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-6 py-16 md:px-16 md:py-24">
                    <h2 className="text-3xl font-semibold md:text-4xl">Eligibility by Loan Type</h2>
                    <ul className="mt-8 space-y-4 leading-7 text-grey"><li><strong className="text-blue">Personal loan:</strong> income, credit history and existing obligations.</li><li><strong className="text-blue">Home loan:</strong> income, credit history, and property details and legal documents.</li><li><strong className="text-blue">Car loan:</strong> income, credit history and vehicle details.</li><li><strong className="text-blue">Business loan:</strong> business type, vintage, turnover, and credit history of the owners and business.</li><li><strong className="text-blue">Education loan:</strong> admission to an eligible course, academic record, and the co-applicant's income and credit history.</li><li><strong className="text-blue">Loan against property:</strong> ownership and clear title of the property, plus income and credit history.</li></ul>
                    <p className="mt-6 text-sm italic text-grey">Criteria differ from lender to lender, so confirm the latest details with our team.</p>
                    <h2 className="mt-16 text-3xl font-semibold">Documents You May Need</h2>
                    <ul className="mt-6 list-disc space-y-3 pl-5 leading-7 text-grey"><li>Identity proof (such as Aadhaar, PAN or passport)</li><li>Address proof</li><li>Income proof (such as salary slips or income tax returns)</li><li>Recent bank statements</li><li>Loan-specific documents (such as property papers, vehicle quotation, admission letter or business registration)</li></ul>
                    <p className="mt-5 text-sm italic text-grey">Required documents vary by lender and loan type.</p>
                </section>

                <section className="border-y border-lightGrey bg-white px-6 py-16 md:px-16 md:py-20"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-semibold">Tips to Improve Your Eligibility</h2><ul className="mt-6 grid gap-3 leading-7 text-grey md:grid-cols-2"><li>Pay your EMIs and credit card bills on time.</li><li>Keep your credit card usage low.</li><li>Avoid applying to many lenders at once.</li><li>Check your credit report and correct any errors.</li><li>Reduce existing debt where you can.</li><li>Add a co-applicant if the lender allows it.</li></ul></div></section>

                <section className="mx-auto max-w-6xl px-6 py-16 md:px-16 md:py-24"><h2 className="text-3xl font-semibold md:text-4xl">Frequently Asked Questions</h2><div className="mt-8 divide-y divide-lightGrey border-y border-lightGrey">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="cursor-pointer list-none pr-8"><h3 className="inline text-lg font-semibold">{question}</h3><span className="float-right text-lightBlue group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl leading-7 text-grey">{answer}</p></details>)}</div></section>

                <section className="bg-blue px-6 py-16 text-center text-white md:px-16 md:py-20"><h2 className="text-3xl font-semibold md:text-4xl">Want Help Understanding Your Options?</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">Speak to our advisors for guidance on eligibility, documents and the next steps.</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><a href="tel:8291071621" className="rounded-[3px] bg-lightBlue px-8 py-4 font-inter text-[15px] font-medium text-white hover:bg-white hover:text-blue">Talk to Our Advisor</a><Link to="/emi-calculator" className="rounded-[3px] border border-white px-8 py-4 font-inter text-[15px] font-medium hover:bg-white hover:text-blue">Use the EMI Calculator</Link></div></section>
            </main>
        </>
    );
};

export default LoanEligibilityForm;
