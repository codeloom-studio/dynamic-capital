import React from "react";

const PersonalLoan = () => {
    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col lg:flex-row gap-8 px-6 lg:px-16 py-10">

            {/* Left Form Section */}
            <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6 space-y-6">
                <h2 className="text-xl font-semibold mb-4">Personal Loan Amount</h2>

                {/* Loan Amount */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Loan Amount
                    </label>
                    <input
                        type="number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="₹ 425,000"
                    />
                </div>

                {/* Interest Rate */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Interest rate
                    </label>
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="5"
                        />
                        <span className="text-gray-600">%</span>
                    </div>
                </div>

                {/* Loan Tenure */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Loan tenure
                    </label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500">
                        <option>4 years</option>
                        <option>5 years</option>
                        <option>10 years</option>
                    </select>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                    Apply for Loan
                </button>
            </div>

            {/* Right Content Section */}
            <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-6 space-y-6">
                {/* Title */}
                <div>
                    <h2 className="text-2xl font-semibold">
                        EMI Calculator for <span className="text-blue-600 italic">Personal Loan</span>
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Use our easy-to-use EMI calculator to instantly know your monthly repayment amount.
                    </p>
                </div>

                {/* EMI Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t pt-4">
                    <div>
                        <p className="text-lg font-semibold">₹12,566</p>
                        <p className="text-gray-500 text-sm">Loan EMI</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">1,02,366</p>
                        <p className="text-gray-500 text-sm">Total interest payable</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">4,52,366</p>
                        <p className="text-gray-500 text-sm">Total cost of loan</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Sep 2028</p>
                        <p className="text-gray-500 text-sm">Payoff date</p>
                    </div>
                </div>

                {/* Placeholder for Chart */}
                <div className="bg-gray-100 h-64 rounded-md flex items-center justify-center">
                    📊 Chart Placeholder
                </div>

                {/* Legend */}
                <div className="flex justify-around border p-4 rounded-md">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                        <span>Principal paid: ₹253,362</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span>Interest paid: ₹306,972</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-indigo-800 rounded-full"></span>
                        <span>Loan balance: ₹86,638</span>
                    </div>
                </div>

                {/* EMI Schedule Table */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Schedule showing EMI payments starting from
                    </h3>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 border">Date</th>
                                <th className="p-2 border">Principal</th>
                                <th className="p-2 border">Interest</th>
                                <th className="p-2 border">Remaining balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 border">Oct 2025</td>
                                <td className="p-2 border">₹408.53</td>
                                <td className="p-2 border">₹1,146.67</td>
                                <td className="p-2 border">₹339,591.47</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">Nov 2025</td>
                                <td className="p-2 border">₹410.23</td>
                                <td className="p-2 border">₹1,144.96</td>
                                <td className="p-2 border">₹339,180.24</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">Dec 2025</td>
                                <td className="p-2 border">₹411.94</td>
                                <td className="p-2 border">₹1,143.26</td>
                                <td className="p-2 border">₹338,769.31</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PersonalLoan;
