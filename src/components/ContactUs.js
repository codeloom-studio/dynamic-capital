import React, { useState } from "react";
import { Phone, Mail } from "lucide-react"; // you can replace with your own icons

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        email: '',
        subject: '',
        message: ''
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
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    type: 'Contact Inquiry',
                    formattedMessage: `Contact Inquiry - Name: ${formData.fullName}, Mobile: ${formData.mobile}, Email: ${formData.email}, Subject: ${formData.subject}, Message: ${formData.message}`
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    fullName: '',
                    mobile: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            setError('Failed to submit inquiry. Please try again.');
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="bg-dullBlue flex justify-center items-center py-36 px-4 ">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-6xl flex flex-col md:flex-row gap-8">

                {/* Left Side - Form */}
                <div className="w-full md:w-1/2  pr-8">
                    {isSubmitted ? (
                        <div className="text-center py-8">
                            <div className="text-green-500 text-6xl mb-4">✓</div>
                            <h3 className="text-2xl font-bold text-blue mb-2">Thank You!</h3>
                            <p className="text-blue">Your inquiry has been submitted successfully. We'll get back to you soon.</p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="mt-4 text-lightBlue underline hover:no-underline"
                            >
                                Send Another Message
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
                                <label className="text-sm font-onest leading-[100%] font-bold text-blue">Your Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="Enter Full Name"
                                    className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    required
                                />
                            </div>

                            {/* Mobile + Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-onest leading-[100%] font-bold text-blue">Mobile Number</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        placeholder="Enter Mobile Number"
                                        className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-onest leading-[100%] font-bold text-blue">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter Email Address"
                                        className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-onest leading-[100%] font-bold text-blue">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="Enter Subject"
                                    className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-onest leading-[100%] font-bold text-blue">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Enter your message or inquiry"
                                    rows="4"
                                    className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-vertical"
                                    required
                                ></textarea>
                            </div>

                            {/* Note */}
                            <p className="text-xs text-blue">
                                I authorize Dynamic Capital and its partners to contact me. This overrides
                                my number being in the NDNC registry.
                            </p>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-lightBlue text-white px-6 py-3 rounded-md hover:bg-blue-700 transition w-full md:w-auto disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    )}
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
