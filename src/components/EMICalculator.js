import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import Button from "./Button";

ChartJS.register(ArcElement, Tooltip, Legend);

const EMICalculator = () => {
    const [loanAmount, setLoanAmount] = useState(2500000);
    const [loanTerm, setLoanTerm] = useState(20); // years
    const [interestRate, setInterestRate] = useState(10.5);
    const [emi, setEmi] = useState(null);
    const [totalPayment, setTotalPayment] = useState(null);
    const [totalInterest, setTotalInterest] = useState(null);

    const calculateEMI = () => {
        let principal = loanAmount;
        let rate = interestRate / 100 / 12; // monthly interest
        let months = loanTerm * 12;

        let emiCalc =
            (principal * rate * Math.pow(1 + rate, months)) /
            (Math.pow(1 + rate, months) - 1);

        let totalPay = emiCalc * months;
        let totalInt = totalPay - principal;

        setEmi(Math.round(emiCalc));
        setTotalPayment(Math.round(totalPay));
        setTotalInterest(Math.round(totalInt));
    };

    const chartData = {
        labels: ["Principal Loan Amount", "Total Interest"],
        datasets: [
            {
                data: [loanAmount, totalInterest || 0],
                backgroundColor: ["#0b4d91", "#00a0e3"],
                hoverOffset: 6,
            },
        ],
    };

    return (
        <section className="w-full bg-gray-50 py-10 px-4 md:px-6">
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg border-t-4 border-green overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 p-6 md:p-8">
                    {/* Left Form */}
                    <div>
                        <h2 className="text-lg md:text-xl font-bold font-onest leading-6 mb-6">EMI Calculator</h2>

                        <label className="block font-bold text-sm mb-2">Loan amount</label>
                        <input
                            type="number"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                            className="w-full border rounded-md px-3 py-2 mb-4 text-sm"
                        />

                        <label className="block font-bold text-sm mb-2">Loan term</label>
                        <input
                            type="number"
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(Number(e.target.value))}
                            className="w-full border rounded-md px-3 py-2 mb-2 text-sm"
                        />
                        <div className="flex gap-4 mb-4 text-xs md:text-sm">
                            <label className="flex items-center gap-1">
                                <input type="radio" name="term" disabled />
                                Months
                            </label>
                            <label className="flex items-center gap-1">
                                <input type="radio" name="term" defaultChecked />
                                Years
                            </label>
                        </div>

                        <label className="block font-bold text-sm mb-2">Interest rate</label>
                        <div className="flex items-center border rounded-md px-3 py-2 mb-4 text-sm">
                            <input
                                type="number"
                                value={interestRate}
                                onChange={(e) => setInterestRate(Number(e.target.value))}
                                className="w-full outline-none"
                            />
                            <span className="text-gray-600">%</span>
                        </div>

                        <Button label="Calculate" onClick={calculateEMI} bgColor="blue" />
                    </div>

                    {/* Right Results */}
                    <div className="bg-dullBlue rounded-md p-4 md:p-6">
                        <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-4">
                            Loan EMI
                        </h3>
                        {emi ? (
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                {/* Text values */}
                                <div className="flex flex-col gap-6 md:w-2/3">
                                    <p className="text-2xl md:text-3xl font-bold font-taviraj text-blue">
                                        ₹ {emi.toLocaleString()}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="font-onest text-sm text-grey">Your Principal Amount</p>
                                            <p className="font-onest text-sm text-blue font-medium">
                                                ₹ {loanAmount.toLocaleString()}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-onest text-sm text-grey">Total cost of loan</p>
                                            <p className="font-onest text-sm text-blue font-medium">
                                                ₹ {totalInterest?.toLocaleString()}
                                            </p>
                                        </div>
                                        <div className="col-span-1 sm:col-span-2">
                                            <p className="font-onest text-sm text-grey">Total of Payments (Principal + Interest)</p>
                                            <p className="font-onest text-sm text-blue font-medium">
                                                ₹ {totalPayment?.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Chart */}
                                <div className="md:w-1/3 flex justify-center">
                                    <div className="w-40 h-40 md:w-48 md:h-48">
                                        <Pie data={chartData} />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-600 text-sm">Enter details and click Calculate</p>
                        )}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t px-6 md:px-8 py-6">
                    <div className="flex items-center gap-4">
                        <img
                            src="./assets/curr-check.svg"
                            alt="Lowest Loan Rates"
                            className="w-12 h-12 md:w-16 md:h-16"
                        />
                        <div>
                            <h4 className="font-semibold text-blue-900 text-sm md:text-base">
                                Lowest Loan Interest Rates
                            </h4>
                            <ul className="text-xs md:text-sm text-gray-600 mt-1 space-y-1">
                                <li>✔ Fast processing using online process</li>
                                <li>✔ Quality service at your doorstep</li>
                            </ul>
                        </div>
                    </div>
                    <Button label="Contact Us" border={true} bgColor="white" text="blue" />
                </div>
            </div>
        </section>
    );
};

export default EMICalculator;
