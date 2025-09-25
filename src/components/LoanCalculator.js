import React, { useState } from "react";

const LoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [tenure, setTenure] = useState(""); // in years
    const [emiData, setEmiData] = useState(null);
    const [expandedYears, setExpandedYears] = useState([]);
    const [expandAll, setExpandAll] = useState(false);

    const toggleYear = (year) => {
        setExpandedYears((prev) => {
            if (prev.includes(year)) return prev.filter((y) => y !== year);
            return [...prev, year];
        });
    };

    const toggleExpandAll = () => {
        if (!expandAll) {
            setExpandedYears(emiData.schedule.map((y) => y.year));
            setExpandAll(true);
        } else {
            setExpandedYears([]);
            setExpandAll(false);
        }
    };

    const calculateEMI = () => {
        if (!loanAmount || !interestRate || !tenure) return;

        const principal = parseFloat(loanAmount);
        const annualRate = parseFloat(interestRate);
        const months = parseInt(tenure) * 12;
        const monthlyRate = annualRate / 12 / 100;

        // EMI formula
        const emi =
            (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1);

        let balance = principal;
        let schedule = [];

        for (let i = 0; i < months; i++) {
            const interest = balance * monthlyRate;
            const principalPaid = emi - interest;
            balance -= principalPaid;

            const monthDate = new Date();
            monthDate.setMonth(monthDate.getMonth() + i);

            const month = monthDate.toLocaleString("default", { month: "short", year: "numeric" });

            // Group by year
            const year = monthDate.getFullYear();
            let yearData = schedule.find((y) => y.year === year);
            if (!yearData) {
                yearData = { year, rows: [] };
                schedule.push(yearData);
            }

            yearData.rows.push({
                month,
                principal: `₹${principalPaid.toFixed(2)}`,
                interest: `₹${interest.toFixed(2)}`,
                balance: `₹${balance.toFixed(2)}`,
            });
        }

        const totalPayment = emi * months;
        const totalInterest = totalPayment - principal;

        setEmiData({
            emi: emi.toFixed(2),
            totalInterest: totalInterest.toFixed(2),
            totalPayment: totalPayment.toFixed(2),
            payoffDate: `Sep ${new Date().getFullYear() + parseInt(tenure)}`,
            schedule,
        });
        setExpandedYears([]);
        setExpandAll(false);
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 px-4 md:px-8 lg:px-16 py-8">
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8">
                {/* Left form */}
                <aside className="w-full lg:w-1/3">
                    <div className="bg-white rounded shadow p-6">
                        <label className="block text-blue font-bold text-sm mb-3">Loan Amount</label>
                        <input
                            type="number"
                            placeholder="Enter Loan Amount"
                            value={loanAmount}
                            onChange={(e) => {
                                const val = e.target.value;

                                if (val === "") {
                                    setLoanAmount("");
                                } else {
                                    const num = Number(val);
                                    if (num > 0) {
                                        setLoanAmount(val);
                                    }
                                }
                            }}

                            className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />

                        <label className="block text-blue font-bold text-sm mb-3">Interest rate</label>
                        <div className="relative w-full mb-4">
                            <input
                                type="number"
                                placeholder="Enter Interest Rate"
                                value={interestRate}
                                onChange={(e) => {
                                    const val = e.target.value;

                                    if (val === "") {
                                        setInterestRate("");
                                    } else {
                                        const num = Number(val);
                                        if (num > 0) {
                                            setInterestRate(val);
                                        }
                                    }
                                }}

                                className="w-full border rounded px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                            <span className="absolute inset-y-0 right-3 flex items-center text-gray-700">%</span>
                        </div>

                        <label className="block text-blue font-bold text-sm mb-3">Loan tenure</label>
                        <select
                            value={tenure}
                            onChange={(e) => setTenure(e.target.value)}
                            className="w-full border rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        >
                            <option value="">Select Tenure</option>
                            {[1, 2, 3, 4, 5, 10, 15, 20, 25, 30].map((t) => (
                                <option key={t} value={t}>{t} years</option>
                            ))}
                        </select>

                        <button
                            onClick={calculateEMI}
                            className="w-full bg-lightBlue text-white py-3 rounded hover:bg-blue-800 transition"
                        >
                            Calculate EMI
                        </button>
                    </div>
                </aside>

                {/* Right content */}
                <main className="w-full lg:w-2/3">
                    <div className="bg-white rounded shadow p-6">
                        <h1 className="text-3xl font-semibold text-blue">EMI Calculator</h1>
                        <p className="text-darkGrey text-base mt-3">
                            Enter your loan details to calculate monthly EMI, total interest payable, and overall loan cost.
                        </p>

                        {emiData && (
                            <>
                                {/* stats row */}
                                <div className="mt-6 border-t pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
                                    <div>
                                        <p className="text-sm text-darkGrey font-medium mt-1">Loan EMI</p>
                                        <p className="text-2xl font-extrabold text-blue">₹{emiData.emi}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-darkGrey font-medium mt-1">Total interest payable</p>
                                        <p className="text-2xl font-extrabold text-blue">₹{emiData.totalInterest}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-darkGrey font-medium mt-1">Total cost of loan</p>
                                        <p className="text-2xl font-extrabold text-blue">₹{emiData.totalPayment}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-darkGrey font-medium mt-1">Payoff date</p>
                                        <p className="text-2xl font-extrabold text-blue">{emiData.payoffDate}</p>
                                    </div>
                                </div>

                                {/* schedule table */}
                                <div className="mt-8 border-t pt-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-2xl font-bold text-blue">EMI Schedule</h2>
                                        <div className="flex items-center gap-2">
                                            <label className="text-sm font-bold text-blue">Expand all years</label>
                                            <button
                                                onClick={toggleExpandAll}
                                                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${expandAll ? "bg-blue-600" : "bg-gray-400"
                                                    }`}
                                            >
                                                <div
                                                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${expandAll ? "translate-x-5" : "translate-x-0"
                                                        }`}
                                                ></div>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded overflow-hidden">
                                        <div className="divide-y">
                                            {emiData.schedule.map((y) => {
                                                const isOpen = expandedYears.includes(y.year);
                                                return (
                                                    <div key={y.year}>
                                                        <div
                                                            className="flex items-center justify-between px-4 py-3 bg-gray-50 cursor-pointer"
                                                            onClick={() => toggleYear(y.year)}
                                                        >
                                                            <div className="flex items-center gap-4">
                                                                <div className="text-sm text-blue-700 font-semibold">{y.year}</div>
                                                                <div className="text-sm text-gray-600">Year summary / total</div>
                                                            </div>
                                                            <div className="text-sm text-gray-700">{isOpen ? "Collapse" : "Expand"}</div>
                                                        </div>

                                                        {isOpen && (
                                                            <div className="px-4 py-3">
                                                                <table className="w-full text-left">
                                                                    <thead>
                                                                        <tr className="text-sm text-gray-600 border-b">
                                                                            <th className="py-2">Date</th>
                                                                            <th className="py-2">Principal</th>
                                                                            <th className="py-2">Interest</th>
                                                                            <th className="py-2">Remaining balance</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {y.rows.map((r, idx) => (
                                                                            <tr key={idx} className="text-sm text-gray-700">
                                                                                <td className="py-2 border-b">{r.month}</td>
                                                                                <td className="py-2 border-b">{r.principal}</td>
                                                                                <td className="py-2 border-b">{r.interest}</td>
                                                                                <td className="py-2 border-b">{r.balance}</td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LoanCalculator;




// import React, { useState } from "react";
// import Button from "./Button";

// const LoanCalculator = () => {
//     const [activeTab, setActiveTab] = useState("personal");
//     const [expandedYears, setExpandedYears] = useState([]);
//     const [expandAll, setExpandAll] = useState(false);

//     const years = [
//         {
//             year: 2025,
//             rows: [
//                 { month: "Oct 2025", principal: "₹408.53", interest: "₹1,146.67", balance: "₹339,591.47" },
//                 { month: "Nov 2025", principal: "₹410.23", interest: "₹1,144.96", balance: "₹339,180.24" },
//                 { month: "Dec 2025", principal: "₹411.94", interest: "₹1,143.26", balance: "₹338,769.31" },
//             ],
//         },
//         {
//             year: 2026,
//             rows: [
//                 { month: "Jan 2026", principal: "₹6,309.90", interest: "₹21,068.00", balance: "₹333,690.10" },
//             ],
//         },
//         {
//             year: 2027,
//             rows: [
//                 { month: "Jan 2027", principal: "₹11,648.97", interest: "₹37,631.26", balance: "₹328,351.03" },
//             ],
//         },
//         {
//             year: 2028,
//             rows: [{ month: "Jan 2028", principal: "₹17,261.20", interest: "₹53,921.35", balance: "₹322,738.80" }],
//         },
//     ];

//     const toggleYear = (y) => {
//         setExpandedYears((prev) => {
//             if (prev.includes(y)) return prev.filter((p) => p !== y);
//             return [...prev, y];
//         });
//     };

//     const toggleExpandAll = () => {
//         if (!expandAll) {
//             setExpandedYears(years.map((y) => y.year));
//             setExpandAll(true);
//         } else {
//             setExpandedYears([]);
//             setExpandAll(false);
//         }
//     };

//     return (
//         <div className="w-full min-h-screen bg-gray-50 px-4 md:px-8 lg:px-16 py-8">
//             {/* Tabs - top left (underline style) */}
//             <div className="max-w-[1200px] mx-auto">
//                 <div className="flex border-b border-gray-300">
//                     <button
//                         onClick={() => setActiveTab("home")}
//                         className={`px-4 py-3 text-sm font-medium ${activeTab === "home"
//                             ? "text-blue border-b-4 font-inter text-base font-bold leading-7 border-lightBlue"
//                             : "text-blue font-inter text-base font-medium hover:text-gray-800"
//                             }`}
//                     >
//                         Home Loan
//                     </button>
//                     <button
//                         onClick={() => setActiveTab("personal")}
//                         className={`px-4 py-3 text-sm font-medium ${activeTab === "personal"
//                             ? "text-blue border-b-4 font-inter text-base font-bold leading-7 border-lightBlue"
//                             : "text-blue font-inter text-base font-medium hover:text-gray-800"
//                             }`}
//                     >
//                         Personal Loan
//                     </button>
//                 </div>

//                 {/* Main content */}
//                 <div className="mt-6 flex flex-col lg:flex-row gap-8">
//                     {/* Left form */}
//                     <aside className="w-full lg:w-1/3">
//                         <div className="bg-white rounded shadow p-6">
//                             {/* <h3 className="text-blue font-onest font-bold text-sm leading-5 mb-3">
//                                 {activeTab === "personal" ? "Personal Loan Amount" : "Home Loan Amount"}
//                             </h3> */}

//                             <label className="block text-blue font-onest font-bold text-sm leading-5 mb-3">
//                                 {activeTab === "personal" ? "Personal Loan Amount" : "Home Loan Amount"}
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder={activeTab === "personal" ? "₹ 425,000" : "₹ 25,00,000"}
//                                 className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
//                             />

//                             <label className="block text-blue font-onest font-bold text-sm leading-5 mb-3">Interest rate</label>
//                             <div className="relative w-full">
//                                 <input
//                                     type="number"
//                                     placeholder={activeTab === "personal" ? "5" : "8.5"}
//                                     className="w-full border rounded px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-200"
//                                 />
//                                 <span className="absolute inset-y-0 right-3 flex items-center text-gray-700">%</span>
//                             </div>

//                             {/* <div className="flex items-center gap-2 mb-4">
//                                 <input
//                                     type="number"
//                                     placeholder={activeTab === "personal" ? "5" : "8.5"}
//                                     className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
//                                 />
//                                 <span className="text-gray-700 px-2">%</span>
//                             </div> */}

//                             <label className="block text-blue font-onest font-bold text-sm leading-5 mb-3">Loan tenure</label>
//                             <select className="w-full border rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-200">
//                                 {activeTab === "personal" ? (
//                                     <>
//                                         <option>4 years</option>
//                                         <option>5 years</option>
//                                         <option>10 years</option>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <option>10 years</option>
//                                         <option>15 years</option>
//                                         <option>20 years</option>
//                                         <option>30 years</option>
//                                     </>
//                                 )}
//                             </select>

//                             <button className="w-full bg-lightBlue text-white py-3 rounded hover:bg-blue-800 transition">
//                                 Apply for {activeTab === "personal" ? "Personal Loan" : "Home Loan"}
//                             </button>
//                         </div>
//                     </aside>

//                     {/* Right content */}
//                     <main className="w-full lg:w-2/3">
//                         <div className="bg-white rounded shadow p-6">
//                             {/* header */}
//                             <div>
//                                 <h1 className="text-3xl font-semibold font-onest text-blue">
//                                     EMI Calculator for{" "}
//                                     <span className="text-lightBlue italic">
//                                         {activeTab === "personal" ? "Personal Loan" : "Home Loan"}
//                                     </span>
//                                 </h1>
//                                 <p className="text-darkGrey text-base font-onest leading-7 mt-3">
//                                     Use our easy-to-use EMI calculator to instantly know your monthly repayment amount. Just enter your loan amount,
//                                     interest rate, and tenure — and get a clear picture of your EMIs so you can choose the plan that fits your budget.
//                                 </p>
//                             </div>

//                             {/* stats row */}
//                             <div className="mt-6 border-t pt-6 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
//                                 <div>
//                                     <p className="text-sm text-darkGrey font-medium mt-1">Loan EMI</p>
//                                     <p className="text-2xl font-extrabold text-blue">₹12,566</p>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm text-darkGrey font-medium mt-1">Total interest payable</p>
//                                     <p className="text-2xl font-extrabold text-blue">₹1,02,366</p>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm text-darkGrey font-medium mt-1">Total cost of loan</p>
//                                     <p className="text-2xl font-extrabold text-blue">₹4,52,366</p>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm text-darkGrey font-medium mt-1">Payoff date</p>
//                                     <p className="text-2xl font-extrabold text-blue">Sep 2028</p>
//                                 </div>
//                             </div>

//                             {/* chart + legend */}
//                             <div className="mt-6">
//                                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                                     <div className="  p-4 flex flex-col items-end">
//                                         {/* small svg chart to mimic screenshot */}
//                                         <svg width="100%" height="240" viewBox="0 0 500 240" className="max-w-full">
//                                             {/* grid */}
//                                             <defs>
//                                                 <pattern id="grid" width="50" height="40" patternUnits="userSpaceOnUse">
//                                                     <path d="M 50 0 L 0 0 0 40" fill="none" stroke="#e6e8ec" strokeWidth="1" />
//                                                 </pattern>
//                                             </defs>
//                                             <rect width="100%" height="100%" fill="url(#grid)" />
//                                             {/* three example lines */}
//                                             <path d="M20,200 C120,160 240,120 420,40" stroke="#1e3a8a" strokeWidth="6" fill="none" strokeLinecap="round" />
//                                             <path d="M20,220 C120,170 240,110 420,80" stroke="#60a5fa" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.95" />
//                                             <path d="M20,40 C120,100 240,160 420,200" stroke="#16a34a" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.95" />
//                                         </svg>

//                                         <div className="text-sm font-onest font-bold text-blue mt-3">As of April 2051</div>

//                                         {/* legend */}
//                                         <div className="w-full mt-4 space-y-3">
//                                             <div className="flex items-center justify-between border-t-[1px] border-lightGrey py-2">
//                                                 <div className="flex items-center justify-center gap-3">
//                                                     <span className="w-4 h-4 rounded-full bg-lightBlue inline-block"></span>
//                                                     <span className="text-sm font-onest font-medium leading-7">Principal paid</span>
//                                                 </div>
//                                                 <div className="text-sm font-semibold">₹253,362</div>
//                                             </div>

//                                             <div className="flex items-center justify-between border-t-[1px] border-lightGrey py-2">
//                                                 <div className="flex items-center justify-center gap-3">
//                                                     <span className="w-4 h-4 rounded-full bg-extraLightGreen inline-block"></span>
//                                                     <span className="text-sm font-onest font-medium leading-7">Interest paid</span>
//                                                 </div>
//                                                 <div className="text-sm font-semibold">₹306,972</div>
//                                             </div>

//                                             <div className="flex items-center justify-between border-y-[1px] border-lightGrey py-2">
//                                                 <div className="flex items-center justify-center gap-3">
//                                                     <span className="w-4 h-4 rounded-full bg-blue inline-block"></span>
//                                                     <span className="text-sm font-onest font-medium leading-7">Loan balance</span>
//                                                 </div>
//                                                 <div className="text-sm font-semibold">₹86,638</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* schedule heading + controls */}
//                             <div className="mt-8 border-t pt-6 ">
//                                 <div className="flex flex-col items-center justify-between">
//                                     <div className="w-full">
//                                         <h2 className="text-3xl font-onest leading-8 text-blue font-semibold">Schedule showing EMI payments starting from</h2>
//                                         <p className="text-darkGrey font-onest font-medium text-sm mt-2">This table lists how much principal and interest are paid in each scheduled EMI payment.</p>
//                                     </div>

//                                     {/* <div className="flex items-center gap-6">
//                                         <div className="flex items-center gap-3">
//                                             <div className="text-sm text-gray-600">First payment</div>
//                                             <div className="border rounded px-3 py-2 text-sm">Sep 2025</div>
//                                             <div className="text-sm mx-2">→</div>
//                                             <div className="text-sm text-gray-600">Last payment</div>
//                                             <div className="text-lg font-semibold ml-2">Sep 2055</div>
//                                         </div>

//                                         <div className="flex items-center gap-2">
//                                             <label className="text-sm text-gray-600 mr-2">Expand all years</label>
//                                             <input
//                                                 type="checkbox"
//                                                 checked={expandAll}
//                                                 onChange={toggleExpandAll}
//                                                 className="w-5 h-5"
//                                             />
//                                         </div>
//                                     </div> */}

//                                     <div className="flex items-center justify-between w-full mt-6">
//                                         {/* Left side - First & Last payment */}
//                                         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-3">
//                                             {/* First Payment */}
//                                             <div className="flex flex-col items-start w-full sm:w-auto">
//                                                 <div className="text-sm text-blue font-onest font-bold">First payment</div>
//                                                 <div className="relative w-full sm:w-auto">
//                                                     <input
//                                                         type="text"
//                                                         value="Sep 2025"
//                                                         readOnly
//                                                         className="border font-onest font-medium text-blue rounded px-3 py-2 text-sm pr-10 w-full sm:w-auto focus:outline-none"
//                                                     />
//                                                     {/* Calendar Icon */}
//                                                     <span className="absolute inset-y-0 right-3 flex items-center">
//                                                         <svg
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             className="w-5 h-5 text-blue-500"
//                                                             fill="none"
//                                                             viewBox="0 0 24 24"
//                                                             stroke="currentColor"
//                                                         >
//                                                             <path
//                                                                 strokeLinecap="round"
//                                                                 strokeLinejoin="round"
//                                                                 strokeWidth={2}
//                                                                 d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                                                             />
//                                                         </svg>
//                                                     </span>
//                                                 </div>
//                                             </div>

//                                             {/* Arrow (hidden on small screens) */}
//                                             <div className="hidden sm:block text-sm mx-2">→</div>

//                                             {/* Last Payment */}
//                                             <div className="flex flex-col items-start w-full sm:w-auto">
//                                                 <div className="text-sm text-blue font-onest font-bold">Last payment</div>
//                                                 <div className="text-lg sm:text-2xl font-bold text-blue">Sep 2055</div>
//                                             </div>
//                                         </div>


//                                         {/* Right side - Toggle */}
//                                         <div className="flex items-center gap-2">
//                                             <label className="text-sm font-bold text-blue">Expand all years</label>
//                                             <button
//                                                 onClick={toggleExpandAll}
//                                                 className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${expandAll ? "bg-blue-600" : "bg-gray-400"
//                                                     }`}
//                                             >
//                                                 <div
//                                                     className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${expandAll ? "translate-x-5" : "translate-x-0"
//                                                         }`}
//                                                 ></div>
//                                             </button>
//                                         </div>
//                                     </div>

//                                 </div>

//                                 {/* schedule table (expandable years) */}
//                                 <div className="mt-6">
//                                     <div className="bg-white rounded overflow-hidden">
//                                         <div className="divide-y">
//                                             {years.map((y) => {
//                                                 const isOpen = expandedYears.includes(y.year);
//                                                 return (
//                                                     <div key={y.year}>
//                                                         <div
//                                                             className="flex items-center justify-between px-4 py-3 bg-gray-50 cursor-pointer"
//                                                             onClick={() => toggleYear(y.year)}
//                                                         >
//                                                             <div className="flex items-center gap-4">
//                                                                 <div className="text-sm text-blue-700 font-semibold">+ {y.year}</div>
//                                                                 <div className="text-sm text-gray-600">Year summary / total</div>
//                                                             </div>
//                                                             <div className="text-sm text-gray-700">{isOpen ? "Collapse" : "Expand"}</div>
//                                                         </div>

//                                                         {isOpen && (
//                                                             <div className="px-4 py-3">
//                                                                 <table className="w-full text-left">
//                                                                     <thead>
//                                                                         <tr className="text-sm text-gray-600 border-b">
//                                                                             <th className="py-2">Date</th>
//                                                                             <th className="py-2">Principal</th>
//                                                                             <th className="py-2">Interest</th>
//                                                                             <th className="py-2">Remaining balance</th>
//                                                                         </tr>
//                                                                     </thead>
//                                                                     <tbody>
//                                                                         {y.rows.map((r, idx) => (
//                                                                             <tr key={idx} className="text-sm text-gray-700">
//                                                                                 <td className="py-2 border-b">{r.month}</td>
//                                                                                 <td className="py-2 border-b">{r.principal}</td>
//                                                                                 <td className="py-2 border-b">{r.interest}</td>
//                                                                                 <td className="py-2 border-b">{r.balance}</td>
//                                                                             </tr>
//                                                                         ))}
//                                                                     </tbody>
//                                                                 </table>
//                                                             </div>
//                                                         )}
//                                                     </div>
//                                                 );
//                                             })}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div> {/* end right white card */}
//                     </main>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoanCalculator;
