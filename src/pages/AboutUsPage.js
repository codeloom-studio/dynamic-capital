import React from "react";
import SEO from '../components/SEO';

const AboutUsPage = () => {
    return (
        <>
            <SEO
                title="About Dynamic Capital | Loan & Financial Services"
                description="Learn about Dynamic Capital, a Navi Mumbai financial services company helping individuals and businesses explore suitable loan options."
                keywords="about Dynamic Capital, loan and financial services, Navi Mumbai financial company"
                url={window.location.href}
            />
            <div className="bg-dullBlue min-h-screen px-4 py-16">
                {/* Hero Section */}
                <section className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8 text-center md:text-left flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                        <h1 className="text-3xl md:text-4xl font-onest font-bold text-blue mb-4">
                            About <span className="text-lightBlue italic">Dynamic Capital</span>
                        </h1>
                        <p className="text-darkGrey font-onest leading-7">
                            Dynamic Capital is committed to providing financial solutions that empower individuals
                            and businesses across India. Our goal is to make lending transparent, simple, and customer-friendly.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img src="./assets/logo.svg" alt="About Us Hero" className="w-full h-auto rounded" />
                    </div>
                </section>

                {/* Our Story */}
                <section className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8 mt-12">
                    <h2 className="text-2xl md:text-3xl font-onest font-bold text-blue mb-4">Our Story</h2>
                    <p className="text-darkGrey font-onest leading-7">
                        Founded in 2020, Dynamic Capital started with a mission to simplify financial access for everyone.
                        Over the years, we have helped thousands of customers achieve their financial goals by providing
                        tailored loan products and personalized guidance.
                    </p>
                </section>

                <section className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-8 mt-12" aria-labelledby="about-loans-heading">
                    <h2 id="about-loans-heading" className="text-2xl md:text-3xl font-onest font-bold text-blue mb-4">Our Loan Solutions</h2>
                    <p className="text-darkGrey font-onest leading-7 mb-6">We help customers explore personal loans, home loans, car loans, business loans, education loans and loan against property options.</p>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            ['Personal Loan', '/loan/personal-loan'],
                            ['Home Loan', '/loan/home-loan'],
                            ['Car Loan', '/loan/car-loan'],
                            ['Business Loan', '/loan/business-loan'],
                            ['Education Loan', '/loan/education-loan'],
                            ['Loan Against Property', '/loan/loan-against-property']
                        ].map(([label, href]) => <a key={href} href={href} className="font-onest font-semibold text-blue underline hover:text-lightBlue">{label}</a>)}
                    </div>
                    <a href="/contact-us" className="mt-6 inline-block font-onest font-semibold text-lightBlue underline">Contact Us</a>
                </section>

                {/* Mission & Vision */}
                <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h3 className="text-xl font-onest font-bold text-blue mb-3">Our Mission</h3>
                        <p className="text-darkGrey font-onest leading-7">
                            To empower individuals and businesses with easy, transparent, and reliable financial solutions that help them grow and thrive.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h3 className="text-xl font-onest font-bold text-blue mb-3">Our Vision</h3>
                        <p className="text-darkGrey font-onest leading-7">
                            To be India’s most trusted financial partner, providing innovative solutions and exceptional customer service.
                        </p>
                    </div>
                </section>

                {/* Team Section */}
                <section className="max-w-6xl mx-auto mt-12">
                    <h2 className="text-2xl md:text-3xl font-onest font-bold text-blue text-center mb-8">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-4 text-center">
                            <img src="./assets/team1.jpeg" alt="Team Member" className="mx-auto h-32 mb-3 rounded-full" />
                            <h4 className="text-blue font-onest font-semibold">Sujit Yadav</h4>
                            <p className="text-darkGrey text-sm font-onest">Founder & CEO</p>
                        </div>
                        {/* <div className="bg-white rounded-lg shadow-md p-4 text-center">
                        <img src="./assets/team2.jpg" alt="Team Member" className="mx-auto h-32 mb-3 rounded-full" />
                        <h4 className="text-blue font-onest font-semibold">Nitin Kumbhare</h4>
                        <p className="text-darkGrey text-sm font-onest">COO</p>
                    </div> */}
                        {/* <div className="bg-white rounded-lg shadow-md p-4 text-center">
                        <img src="./assets/team3.svg" alt="Team Member" className="mx-auto h-32 mb-3 rounded-full" />
                        <h4 className="text-blue font-onest font-semibold">Gaytri Patel</h4>
                        <p className="text-darkGrey text-sm font-onest">Head of Operations</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 text-center">
                        <img src="./assets/team4.svg" alt="Team Member" className="mx-auto h-32 mb-3 rounded-full" />
                        <h4 className="text-blue font-onest font-semibold">Rohit Kumar</h4>
                        <p className="text-darkGrey text-sm font-onest">Finance Lead</p>
                    </div> */}
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutUsPage;
