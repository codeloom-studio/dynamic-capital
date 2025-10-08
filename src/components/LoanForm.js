import React, { useState } from "react";
import Button from "./Button";

const LoanForm = ({ loanType = "General Loan" }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        city: '',
        monthlyIncome: '',
        loanAmount: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('https://formspree.io/f/xqaypyek', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.fullName,
                    mobile: formData.mobile,
                    city: formData.city,
                    monthlyIncome: formData.monthlyIncome,
                    loanAmount: formData.loanAmount,
                    loanType: loanType,
                    message: `Loan Application - Type: ${loanType}, Name: ${formData.fullName}, Mobile: ${formData.mobile}, City: ${formData.city}, Monthly Income: ${formData.monthlyIncome}, Loan Amount: ${formData.loanAmount}`
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    fullName: '',
                    mobile: '',
                    city: '',
                    monthlyIncome: '',
                    loanAmount: ''
                });
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            setError('Failed to submit form. Please try again.');
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section className="w-full bg-[#d9e6fb] py-16 flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-[32px] font-onest font-semibold text-blue text-center mb-4 leading-[100%]">
                Let’s Get You Started{" "}
                <span className="text-lightBlue font-taviraj italic">Apply Now</span>
            </h2>
            <p className="text-sm  text-blue text-center max-w-2xl leading-[140%] font-onest mb-10">
                Fill out your details and our loan expert will connect with you shortly
                to understand your requirements, guide you through the best options, and
                assist you with the next steps
            </p>

            {/* Form Card */}
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
                {isSubmitted ? (
                    <div className="text-center py-8">
                        <div className="text-green-500 text-6xl mb-4">✓</div>
                        <h3 className="text-2xl font-bold text-blue mb-2">Thank You!</h3>
                        <p className="text-blue">Your loan application has been submitted successfully. Our team will contact you shortly.</p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="mt-4 text-lightBlue underline hover:no-underline"
                        >
                            Submit Another Application
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                                {error}
                            </div>
                        )}

                        {/* Full Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold font-onest text-blue">Your Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Enter Full Name"
                                className="border border-normBlack rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightBlue"
                                required
                            />
                        </div>

                        {/* Mobile + City */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold font-onest text-blue">Mobile Number</label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    placeholder="Enter Mobile Number"
                                    className="border border-normBlack rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightBlue"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold font-onest text-blue">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    placeholder="Enter City"
                                    className="border border-normBlack rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightBlue"
                                    required
                                />
                            </div>
                        </div>

                        {/* Income + Loan Amount */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold font-onest text-blue">Monthly Income</label>
                                <input
                                    type="number"
                                    name="monthlyIncome"
                                    value={formData.monthlyIncome}
                                    onChange={handleInputChange}
                                    placeholder="Enter Monthly Income"
                                    className="border border-normBlack rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightBlue"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold font-onest text-blue">Loan Amount</label>
                                <input
                                    type="number"
                                    name="loanAmount"
                                    value={formData.loanAmount}
                                    onChange={handleInputChange}
                                    placeholder="Enter Loan Amount"
                                    className="border border-normBlack rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightBlue"
                                    required
                                />
                            </div>
                        </div>

                        {/* Note */}
                        <p className="text-xs text-blue">
                            I authorize Dynamic Capital and its partners to contact me. This
                            overrides my number being in the NDNC registry.
                        </p>

                        {/* Submit Button */}
                        <Button
                            label={isSubmitting ? "Submitting..." : "Apply for Loan"}
                            bgColor="lightBlue"
                            onClick={handleSubmit}
                        />
                    </form>
                )}
            </div>
        </section>
    );
};

export default LoanForm;
