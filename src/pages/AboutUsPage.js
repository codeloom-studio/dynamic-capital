import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const loanProducts = [
    ["Personal Loan", "/loan/personal-loan"],
    ["Home Loan", "/loan/home-loan"],
    ["Car Loan", "/loan/car-loan"],
    ["Business Loan", "/loan/business-loan"],
    ["Education Loan", "/loan/education-loan"],
    ["Loan Against Property", "/loan/loan-against-property"],
];

const faqs = [
    ["What does Dynamic Capital do?", "We help individuals and businesses understand loan options, eligibility, documentation and next steps."],
    ["Which loan products do you offer?", "We help customers explore personal, home, car, business, education and loan against property options."],
    ["Do you guarantee loan approval?", "No. Final approval, interest rate and terms are decided by the lender after assessing the application."],
];

const AboutUsPage = () => (
    <>
        <SEO title="About Dynamic Capital | Loan & Financial Services" description="Learn about Dynamic Capital and how our team helps individuals and businesses explore personal, home, business and other loan options." keywords="about Dynamic Capital, loan and financial services, Navi Mumbai financial company" url={window.location.href} />
        <main className="bg-lightWhite font-onest text-blue">
            <section className="bg-dullBlue px-6 py-16 md:px-16 md:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
                    <div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lightBlue">About Dynamic Capital</p><h1 className="text-4xl font-semibold leading-tight md:text-6xl">About Dynamic Capital Advisor Pvt. Ltd.</h1><p className="mt-6 leading-7 text-grey">We help individuals and businesses explore financial solutions with clear guidance, practical support and a customer-first approach.</p></div>
                    <img src="/assets/logo.svg" alt="Dynamic Capital Advisor Pvt. Ltd." className="mx-auto w-full max-w-sm" />
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16 md:px-16 md:py-24"><h2 className="text-3xl font-semibold md:text-4xl">Who We Are</h2><p className="mt-5 max-w-4xl leading-7 text-grey">Dynamic Capital is a loan and financial solutions advisor committed to making lending easier to understand. Founded in 2020, we support customers with tailored loan options and personalized guidance across India.</p></section>

            <section className="border-y border-lightGrey bg-white px-6 py-16 md:px-16 md:py-20"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-semibold">What We Do</h2><p className="mt-5 max-w-4xl leading-7 text-grey">We help customers compare suitable loan options, understand eligibility and documentation, and move through the application process with greater clarity. Our team supports individuals, professionals, self-employed customers and business owners.</p></div></section>

            <section className="mx-auto max-w-6xl px-6 py-16 md:px-16 md:py-24"><h2 className="text-3xl font-semibold">Our Approach</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{[["Listen first", "We start by understanding your purpose, financial position and priorities."], ["Explain clearly", "We make loan terms, eligibility and documents easier to understand."], ["Support throughout", "We remain available to guide you through the next steps."],].map(([title, text]) => <article key={title} className="border-t-4 border-lightBlue bg-white p-6"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-grey">{text}</p></article>)}</div></section>

            <section className="border-y border-lightGrey bg-white px-6 py-16 md:px-16 md:py-20"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-semibold">Loans We Offer</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{loanProducts.map(([label, href]) => <Link key={href} to={href} className="rounded-md bg-lightWhite p-5 font-semibold text-blue hover:text-lightBlue">{label}</Link>)}</div></div></section>

            <section className="mx-auto max-w-6xl px-6 py-16 md:px-16 md:py-24"><h2 className="text-3xl font-semibold">Get in Touch</h2><p className="mt-5 max-w-2xl leading-7 text-grey">Have a question about a loan or the next step? Our team is ready to help.</p><div className="mt-6 space-y-3 leading-7"><a href="tel:8291071621" className="block hover:text-lightBlue">Phone: 8291071621</a><a href="mailto:dynamiccapitaladv@gmail.com" className="block hover:text-lightBlue">Email: dynamiccapitaladv@gmail.com</a><p>Office no. H-206, 2nd Floor, BRSCCL Tower no. 3, CBD Belapur Station, Navi Mumbai- 400614</p></div><a href="/contact-us" className="mt-6 inline-block rounded-[3px] bg-lightBlue px-8 py-4 font-inter text-[15px] font-medium text-white hover:bg-blue">Contact Us</a></section>

            <section className="bg-dullBlue px-6 py-16 md:px-16 md:py-24"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-semibold md:text-4xl">FAQs</h2><div className="mt-8 divide-y divide-lightGrey border-y border-lightGrey">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="cursor-pointer list-none pr-8"><h3 className="inline text-lg font-semibold">{question}</h3><span className="float-right text-lightBlue group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl leading-7 text-grey">{answer}</p></details>)}</div></div></section>
        </main>
    </>
);

export default AboutUsPage;
