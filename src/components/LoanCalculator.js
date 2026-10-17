import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const loanTypes = ["years", "months"];
const inputClass = "mt-2 w-full rounded-md border border-lightGrey bg-white px-4 py-3 font-onest text-sm text-blue outline-none focus:border-lightBlue focus:ring-2 focus:ring-dullBlue";
const selectClass = `${inputClass} appearance-none pr-12`;
const formatCurrency = (value) => `₹${Math.round(value).toLocaleString("en-IN")}`;

const faqs = [
    ["What is an EMI?", "EMI is the fixed monthly amount you pay to repay a loan. It covers both the principal and the interest."],
    ["How is EMI calculated?", "EMI depends on the loan amount, the interest rate and the tenure. The formula is shown on this page."],
    ["Does a longer tenure reduce my EMI?", "Yes, a longer tenure lowers the monthly EMI, but you pay more interest over the life of the loan."],
    ["Is the calculator result the exact EMI I will pay?", "No. It is an estimate. The lender decides the final EMI, interest rate and charges."],
];

const LoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState("1000000");
    const [interestRate, setInterestRate] = useState("10");
    const [tenure, setTenure] = useState("5");
    const [tenureUnit, setTenureUnit] = useState("years");
    const [result, setResult] = useState(null);

    const calculateEMI = (event) => {
        event.preventDefault();
        const principal = Number(loanAmount);
        const months = tenureUnit === "years" ? Number(tenure) * 12 : Number(tenure);
        const monthlyRate = Number(interestRate) / 12 / 100;
        if (!principal || principal < 1 || !months || months < 1 || Number(interestRate) < 0) return;
        const emi = monthlyRate === 0 ? principal / months : principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
        const totalPayment = emi * months;
        setResult({ emi, totalInterest: totalPayment - principal, totalPayment });
    };

    return (
        <main className="bg-lightWhite font-onest text-blue">
            <section className="bg-dullBlue px-6 py-16 md:px-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lightBlue">Plan with clarity</p>
                    <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Loan EMI Calculator</h1>
                    <p className="mt-6 max-w-3xl text-base leading-7 text-grey md:text-lg">Planning a loan? Use our EMI calculator to estimate your monthly instalment before you apply. Enter the loan amount, interest rate and tenure to see an approximate EMI, so you can plan your repayments with confidence.</p>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16 md:px-16 md:py-24">
                <h2 className="text-3xl font-semibold md:text-4xl">Calculate Your EMI</h2>
                <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr,1.15fr]">
                    <form onSubmit={calculateEMI} className="rounded-lg bg-white p-6 shadow-sm md:p-8">
                        <label className="block text-sm font-semibold">Loan amount<input required type="number" min="1" value={loanAmount} onChange={(event) => setLoanAmount(event.target.value)} className={inputClass} placeholder="Enter loan amount" /></label>
                        <label className="mt-5 block text-sm font-semibold">Interest rate (% per year)<div className="relative"><input required type="number" min="0" step="0.01" value={interestRate} onChange={(event) => setInterestRate(event.target.value)} className={`${inputClass} pr-10`} placeholder="Enter interest rate" /><span className="absolute right-4 top-1/2 mt-1 -translate-y-1/2 text-grey">%</span></div></label>
                        <div className="mt-5 grid grid-cols-[1fr,auto] gap-3"><label className="text-sm font-semibold">Tenure<input required type="number" min="1" value={tenure} onChange={(event) => setTenure(event.target.value)} className={inputClass} /></label><label className="text-sm font-semibold">Unit<div className="relative"><select value={tenureUnit} onChange={(event) => setTenureUnit(event.target.value)} className={selectClass}>{loanTypes.map((unit) => <option key={unit}>{unit}</option>)}</select><FaChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 mt-1 -translate-y-1/2 text-blue" size={16} /></div></label></div>
                        <button type="submit" className="mt-8 rounded-[3px] bg-lightBlue px-8 py-4 font-inter text-[15px] font-medium text-white hover:bg-blue">Calculate EMI</button>
                    </form>
                    <div className="rounded-lg bg-blue p-6 text-white md:p-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">Your estimate</p>
                        {result ? <><div className="mt-6"><p className="text-sm text-white/70">Monthly EMI</p><p className="mt-1 text-4xl font-semibold md:text-5xl">{formatCurrency(result.emi)}</p></div><div className="mt-10 grid gap-6 border-t border-white/20 pt-6 sm:grid-cols-2"><div><p className="text-sm text-white/70">Total interest</p><p className="mt-1 text-xl font-semibold">{formatCurrency(result.totalInterest)}</p></div><div><p className="text-sm text-white/70">Total payment</p><p className="mt-1 text-xl font-semibold">{formatCurrency(result.totalPayment)}</p></div></div></> : <p className="mt-8 max-w-sm leading-7 text-white/80">Enter your loan details and calculate an estimate of your monthly repayment.</p>}
                    </div>
                </div>
                <p className="mt-5 text-xs leading-5 text-grey">The result is an estimate for planning purposes. Actual EMI, interest rate, processing charges and terms are decided by the lender.</p>
            </section>

            <section className="border-y border-lightGrey bg-white px-6 py-16 md:px-16 md:py-20">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl font-semibold">What Is an EMI?</h2>
                    <p className="mt-5 max-w-4xl leading-7 text-grey">EMI stands for Equated Monthly Instalment. It is the fixed amount you pay every month until your loan is fully repaid. Each EMI has two parts: a portion that repays the loan amount (principal) and a portion that pays the interest. In the early months a larger share goes towards interest, and over time more of each EMI goes towards the principal.</p>
                    <h2 className="mt-14 text-3xl font-semibold">How Is EMI Calculated?</h2>
                    <p className="mt-5 rounded-md bg-dullBlue px-5 py-4 text-lg font-semibold md:text-xl">EMI = [P × R × (1 + R)^N] ÷ [(1 + R)^N − 1]</p>
                    <ul className="mt-6 space-y-2 leading-7 text-grey"><li><strong className="text-blue">P</strong> = loan amount (principal)</li><li><strong className="text-blue">R</strong> = monthly interest rate (annual rate ÷ 12 ÷ 100)</li><li><strong className="text-blue">N</strong> = number of monthly instalments</li></ul>
                    <p className="mt-6 max-w-4xl leading-7 text-grey"><strong className="text-blue">Illustrative example:</strong> for a loan of ₹10,00,000 at 10% per year over 5 years (60 months), the EMI works out to about ₹21,247, and the total repayment is about ₹12,74,800. These figures are only an example to show how the calculation works. They are not an offer or a current rate.</p>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16 md:px-16 md:py-24">
                <h2 className="text-3xl font-semibold md:text-4xl">Factors That Affect Your EMI</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-3">{[["Loan Amount", "A higher loan amount means a higher EMI. Borrow only what you need and can repay comfortably."], ["Interest Rate", "Even a small change in the interest rate can change your EMI and the total interest you pay over the loan period."], ["Loan Tenure", "A longer tenure lowers your monthly EMI but increases the total interest paid. A shorter tenure raises the EMI but reduces total interest."]].map(([title, text]) => <article key={title} className="border-t-4 border-lightBlue bg-white p-6"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-grey">{text}</p></article>)}</div>
                <h2 className="mt-16 text-3xl font-semibold">Short Tenure or Long Tenure?</h2>
                <ul className="mt-6 space-y-3 leading-7 text-grey"><li><strong className="text-blue">Short tenure:</strong> higher EMI, less total interest, loan closes sooner.</li><li><strong className="text-blue">Long tenure:</strong> lower EMI, more total interest, easier on monthly cash flow.</li></ul>
                <p className="mt-5 leading-7 text-grey">Try different tenures in the calculator to find the balance that suits your budget.</p>
            </section>

            <section className="border-y border-lightGrey bg-white px-6 py-16 md:px-16 md:py-20"><div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2"><div><h2 className="text-3xl font-semibold">Tips to Plan Your Repayments</h2><ul className="mt-6 list-disc space-y-3 pl-5 leading-7 text-grey"><li>Keep your total EMIs at a level you can manage comfortably each month.</li><li>Compare EMIs for different amounts and tenures before you decide.</li><li>Look at the total interest payable, not only the monthly EMI.</li><li>Keep some savings aside for emergencies.</li><li>Check whether the lender charges processing fees or other charges.</li></ul></div><div><h2 className="text-3xl font-semibold">Why Use an EMI Calculator Before Applying?</h2><p className="mt-5 leading-7 text-grey">An EMI calculator shows you the monthly commitment before you approach a lender. It helps you choose a realistic loan amount and tenure, avoid overborrowing and have a clearer conversation with your loan advisor.</p></div></div></section>

            <section className="mx-auto max-w-6xl px-6 py-16 md:px-16 md:py-24"><h2 className="text-3xl font-semibold md:text-4xl">Frequently Asked Questions</h2><div className="mt-8 divide-y divide-lightGrey border-y border-lightGrey">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="cursor-pointer list-none pr-8"><h3 className="inline text-lg font-semibold">{question}</h3><span className="float-right text-lightBlue group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl leading-7 text-grey">{answer}</p></details>)}</div></section>

            <section className="bg-blue px-6 py-16 text-center text-white md:px-16 md:py-20"><h2 className="text-3xl font-semibold md:text-4xl">Not Sure Which Loan Fits Your Goal?</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">Our advisors can help you understand your options and check your eligibility.</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><Link to="/loan-eligibility" className="rounded-[3px] bg-lightBlue px-8 py-4 font-inter text-[15px] font-medium text-white hover:bg-white hover:text-blue">Check Eligibility</Link><a href="tel:8291071621" className="rounded-[3px] border border-white px-8 py-4 font-inter text-[15px] font-medium hover:bg-white hover:text-blue">Talk to Our Advisor</a></div></section>
        </main>
    );
};

export default LoanCalculator;
