import React from "react";
import { Phone, Mail } from "lucide-react"; // you can replace with your own icons

const ContactUs = () => {
    return (
        <div className="bg-dullBlue flex justify-center items-center py-36 px-4 ">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-6xl flex flex-col md:flex-row gap-8">

                {/* Left Side - Form */}
                <div className="w-full md:w-1/2  pr-8">
                    <form className="space-y-5">
                        {/* Full Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-onest leading-[100%] font-bold text-blue">Your Name</label>
                            <input
                                type="text"
                                placeholder="Enter Full Name"
                                className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>

                        {/* Mobile + City */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-onest leading-[100%] font-bold text-blue">Mobile Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter Mobile Number"
                                    className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-onest leading-[100%] font-bold text-blue">City</label>
                                <input
                                    type="text"
                                    placeholder="Enter City"
                                    className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                            </div>
                        </div>

                        {/* Income + Loan Amount */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-onest leading-[100%] font-bold text-blue">Monthly Income</label>
                                <input
                                    type="text"
                                    placeholder="Enter Monthly Income"
                                    className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-onest leading-[100%] font-bold text-blue">Loan Amount</label>
                                <input
                                    type="text"
                                    placeholder="Enter Loan Amount"
                                    className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                            </div>
                        </div>

                        {/* Note */}
                        <p className="text-xs text-blue">
                            I authorize Dynamic Capital and its partners to contact me. This overrides
                            my number being in the NDNC registry.
                        </p>

                        {/* Submit Button */}
                        <button className="bg-lightBlue text-white px-6 py-3 rounded-md hover:bg-blue-700 transition w-full md:w-auto">
                            Apply for Loan
                        </button>
                    </form>
                </div>

                {/* Right Side - Company Info */}
                <div className="hidden md:flex w-full md:w-1/2 flex-col justify-between px-12 border-l border-gray-300">
                    {/* Logo + Address */}
                    <div>
                        <img src="./assets/logo.svg" alt="Company Logo" className="h-10 mb-4" />
                        <p className="text-xs font-onest text-blue  mb-20">
                            Office no. H206, 2nd Floor, BRSCCL Tower no. 3, <br />
                            CBD Belapur Station, Navi Mumbai - 400614
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-blue font-onest font-normal text-sm">
                                <img src="./assets/call.svg" alt="Phone Icon" className="w-5 h-5 text-blue-600" /> 82910-71621
                            </div>
                            <div className="flex items-center gap-2 text-blue font-onest font-normal text-sm">
                                <img src="./assets/call.svg" alt="Phone Icon" className="w-5 h-5 text-blue-600" /> 82910-71621
                            </div>
                            <div className="flex items-center gap-2 text-blue font-onest font-normal text-sm">
                                <img src="./assets/mail.svg" alt="Mail Icon" className="w-5 h-5 text-blue-600" /> dynamiccapitaladv@gmail.com
                            </div>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className='flex items-center gap-3'>
                        <img src="./assets/link-f.svg" alt="Facebook" className='h-6' />
                        <img src="./assets/link-x.svg" alt="Twitter" className='h-6' />
                        <img src="./assets/link-l.svg" alt="LinkedIn" className='h-6' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
