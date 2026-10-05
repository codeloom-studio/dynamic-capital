import React from "react";
import Button from "./Button";
import SEO from "./SEO";

const LoanEligibilityForm = () => {
    return (
        <>
            <SEO
                title="Loan Eligibility Check | Dynamic Capital"
                description="Check your loan eligibility with Dynamic Capital and understand the documents and loan options available for your requirements."
                keywords="loan eligibility check, loan eligibility calculator, loan application, Dynamic Capital"
                url={window.location.href}
            />
            <section className="w-full h-screen bg-dullBlue py-16 flex flex-col items-center">
                {/* Heading */}
                <h1 className="text-[32px] font-onest font-semibold text-blue text-center mb-10 leading-[100%]">
                    Loan Eligibility{" "}
                    <span className="text-lightBlue font-taviraj italic">Calculator</span>
                </h1>

                {/* Form Card */}
                <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
                    <form className="space-y-5">
                        {/* Net Income */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold font-onest text-blue">
                                Net income per month
                            </label>
                            <input
                                type="text"
                                placeholder="Excluding LTA and Medical allowance"
                                className="border border-normBlack rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightBlue"
                            />
                        </div>

                        {/* Other Income + EMI */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold font-onest text-blue">
                                    Other year Income
                                </label>
                                <input
                                    type="text"
                                    placeholder="Home Rent, Incentive, Bonus etc."
                                    className="border border-normBlack rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightBlue"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold font-onest text-blue">
                                    Existing loan EMI
                                </label>
                                <input
                                    type="text"
                                    placeholder="(Per Month)"
                                    className="border border-normBlack rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightBlue"
                                />
                            </div>
                        </div>

                        {/* Loan Tenure + Rate of Interest */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold font-onest text-blue">
                                    Loan Tenure
                                </label>
                                <input
                                    type="text"
                                    placeholder="(In Years)"
                                    className="border border-normBlack rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightBlue"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold font-onest text-blue">
                                    Rate of Interest
                                </label>
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        defaultValue="6.40"
                                        className="w-full border border-normBlack rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightBlue"
                                    />
                                    <span className="ml-2 text-blue">%</span>
                                </div>
                            </div>
                        </div>

                        {/* Note */}
                        <p className="text-xs text-blue">
                            I authorize Dynamic Capital and its partners to contact me. This
                            overrides my number being in the NDNC registry.
                        </p>

                        {/* Buttons */}
                        <div className="flex items-center gap-6">
                            <Button label="Check Eligibility" bgColor="blue" />
                            <button
                                type="reset"
                                className="text-blue text-sm font-onest underline hover:text-lightBlue"
                            >
                                Reset All
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default LoanEligibilityForm;
