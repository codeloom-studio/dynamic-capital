import React from "react";
import Button from "./Button";

const LoanForm = () => {
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
                <form className="space-y-5">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold font-onest text-blue">Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter Full Name"
                            className="border border-normBlack rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightBlue"
                        />
                    </div>

                    {/* Mobile + City */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold font-onest text-blue">Mobile Number</label>
                            <input
                                type="text"
                                placeholder="Enter Mobile Number"
                                className="border border-normBlack rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightBlue"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold font-onest text-blue">City</label>
                            <input
                                type="text"
                                placeholder="Enter City"
                                className="border border-normBlack rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightBlue"
                            />
                        </div>
                    </div>

                    {/* Income + Loan Amount */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold font-onest text-blue">Monthly Income</label>
                            <input
                                type="text"
                                placeholder="Enter Monthly Income"
                                className="border border-normBlack rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightBlue"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold font-onest text-blue">Loan Amount</label>
                            <input
                                type="text"
                                placeholder="Enter Loan Amount"
                                className="border border-normBlack rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightBlue"
                            />
                        </div>
                    </div>

                    {/* Note */}
                    <p className="text-xs text-blue">
                        I authorize Dynamic Capital and its partners to contact me. This
                        overrides my number being in the NDNC registry.
                    </p>

                    {/* Submit Button */}
                    <Button label="Apply for Loan" bgColor="lightBlue" />
                </form>
            </div>
        </section>
    );
};

export default LoanForm;
