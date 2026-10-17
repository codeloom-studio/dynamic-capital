import React, { useState } from "react";
import { FaChevronDown, FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const loanTypes = [
    "Personal loan",
    "Home loan",
    "Car loan",
    "Business loan",
    "Education loan",
    "Loan against property",
];

const helpItems = [
    "Personal loans",
    "Home loans",
    "Car loans",
    "Business loans",
    "Education loans",
    "Loan against property",
    "Loan eligibility and documentation guidance",
];

const inputClass = "mt-2 w-full rounded-md border border-lightGrey bg-white px-4 py-3 font-onest text-sm text-blue outline-none transition focus:border-lightBlue focus:ring-2 focus:ring-dullBlue";
const selectClass = `${inputClass} appearance-none pr-12`;

const ContactUs = () => {
    const [formData, setFormData] = useState({ fullName: "", mobile: "", email: "", loanType: "", amount: "", city: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleInputChange = ({ target }) => setFormData((previous) => ({ ...previous, [target.name]: target.value }));

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setError("");
        try {
            const response = await fetch("https://formspree.io/f/xqaypyek", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, name: formData.fullName, type: "Contact Inquiry" }),
            });
            if (!response.ok) throw new Error("Failed to submit form");
            setIsSubmitted(true);
            setFormData({ fullName: "", mobile: "", email: "", loanType: "", amount: "", city: "", message: "" });
        } catch (submissionError) {
            setError("Failed to submit enquiry. Please try again or call us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="bg-lightWhite font-onest text-blue">
            <section className="bg-dullBlue px-6 py-16 md:px-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lightBlue">We are here to help</p>
                    <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Contact Dynamic Capital Advisor Pvt. Ltd.</h1>
                    <p className="mt-6 max-w-3xl text-base leading-7 text-grey md:text-lg">Whether you are planning to buy a home, grow your business, fund your education or raise funds against a property, our team is here to help you understand your loan options. Share your requirement and we will guide you on the next steps.</p>
                </div>
            </section>

            <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[0.85fr,1.15fr] md:px-16 md:py-24">
                <div>
                    <h2 className="text-3xl font-semibold md:text-4xl">How Can We Help You?</h2>
                    <p className="mt-4 leading-7 text-grey">Our loan advisors assist individuals and business owners with:</p>
                    <ul className="mt-6 space-y-3 text-base">{helpItems.map((item) => <li key={item} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-lightBlue" />{item}</li>)}</ul>
                    <div className="mt-12 border-t border-lightGrey pt-8">
                        <h2 className="text-3xl font-semibold">Get in Touch</h2>
                        <div className="mt-6 space-y-5 text-sm leading-6">
                            <a href="tel:8291071621" className="flex items-start gap-3 hover:text-lightBlue"><FaPhone className="mt-1 shrink-0 text-lightBlue" />8291071621</a>
                            <a href="mailto:dynamiccapitaladv@gmail.com" className="flex items-start gap-3 hover:text-lightBlue"><FaEnvelope className="mt-1 shrink-0 text-lightBlue" />dynamiccapitaladv@gmail.com</a>
                            <p className="flex items-start gap-3"><FaClock className="mt-1 shrink-0 text-lightBlue" />10am to 7pm</p>
                            <p className="flex items-start gap-3"><FaMapMarkerAlt className="mt-1 shrink-0 text-lightBlue" />Office no. H-206, 2nd Floor, BRSCCL Tower no. 3, CBD Belapur Station, Navi Mumbai- 400614</p>
                        </div>
                    </div>
                </div>

                <div id="enquiry" className="rounded-lg bg-white p-6 shadow-sm md:p-10">
                    <h2 className="text-3xl font-semibold">Send Us an Enquiry</h2>
                    <p className="mt-3 leading-7 text-grey">Fill in the form and tell us which loan you are interested in. Our team will review your requirement and get in touch with you.</p>
                    {isSubmitted ? (
                        <div className="mt-8 rounded-md bg-dullBlue p-6"><h3 className="text-xl font-semibold">Thank you for your enquiry.</h3><p className="mt-2 text-grey">Our team will review your requirement and get in touch with you.</p><button type="button" onClick={() => setIsSubmitted(false)} className="mt-5 font-semibold text-lightBlue underline">Send another enquiry</button></div>
                    ) : (
                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            {error && <p role="alert" className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
                            <div className="grid gap-5 md:grid-cols-2">
                                <label className="text-sm font-semibold">Full name<input required name="fullName" value={formData.fullName} onChange={handleInputChange} className={inputClass} placeholder="Enter your full name" /></label>
                                <label className="text-sm font-semibold">Mobile number<input required type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} className={inputClass} placeholder="Enter your mobile number" /></label>
                                <label className="text-sm font-semibold">Email address<input required type="email" name="email" value={formData.email} onChange={handleInputChange} className={inputClass} placeholder="Enter your email address" /></label>
                                <label className="text-sm font-semibold">Loan type<div className="relative"><select required name="loanType" value={formData.loanType} onChange={handleInputChange} className={selectClass}><option value="">Select loan type</option>{loanTypes.map((loan) => <option key={loan}>{loan}</option>)}</select><FaChevronDown aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 mt-1 -translate-y-1/2 text-blue" size={16} /></div></label>
                                <label className="text-sm font-semibold">Approximate loan amount<input name="amount" value={formData.amount} onChange={handleInputChange} className={inputClass} placeholder="e.g. 10,00,000" /></label>
                                <label className="text-sm font-semibold">City<input required name="city" value={formData.city} onChange={handleInputChange} className={inputClass} placeholder="Enter your city" /></label>
                            </div>
                            <label className="block text-sm font-semibold">Message <span className="font-normal text-grey">(optional)</span><textarea name="message" value={formData.message} onChange={handleInputChange} rows="4" className={`${inputClass} resize-y`} placeholder="Tell us a little about your requirement" /></label>
                            <p className="text-xs leading-5 text-grey">By submitting this form, you agree to be contacted by Dynamic Capital Advisor Pvt. Ltd. regarding your enquiry.</p>
                            <button disabled={isSubmitting} type="submit" className="rounded-[3px] bg-lightBlue px-8 py-4 font-inter text-[15px] font-medium text-white transition hover:bg-blue disabled:cursor-not-allowed disabled:bg-grey">{isSubmitting ? "Submitting..." : "Submit Enquiry"}</button>
                        </form>
                    )}
                </div>
            </section>

            <section className="border-y border-lightGrey bg-white px-6 py-16 md:px-16 md:py-20">
                <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
                    <div><h2 className="text-3xl font-semibold">Before You Contact Us</h2><p className="mt-4 leading-7 text-grey">Keeping a few details ready helps our advisors guide you faster:</p><ul className="mt-6 list-disc space-y-3 pl-5 leading-6 text-grey"><li>The type of loan you need and its purpose</li><li>The approximate amount you require</li><li>Your employment or business type</li><li>Details of any existing loans or EMIs</li><li>Property or vehicle details, if the loan is secured</li></ul></div>
                    <div><h2 className="text-3xl font-semibold">What Happens After You Enquire</h2><ol className="mt-6 space-y-5 text-grey"><li className="flex gap-4"><span className="font-semibold text-lightBlue">01</span>Our team reviews your requirement.</li><li className="flex gap-4"><span className="font-semibold text-lightBlue">02</span>An advisor contacts you to understand your needs in more detail.</li><li className="flex gap-4"><span className="font-semibold text-lightBlue">03</span>We explain the suitable options, eligibility and documents required.</li></ol><p className="mt-6 text-xs italic text-grey">Note: Our team will confirm the applicable process for your requirement.</p></div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16 md:px-16 md:py-24">
                <h2 className="text-3xl font-semibold md:text-4xl">Frequently Asked Questions</h2>
                <div className="mt-8 divide-y divide-lightGrey border-y border-lightGrey">{[
                    ["Which loans can I enquire about?", "You can enquire about personal loans, home loans, car loans, business loans, education loans and loan against property."],
                    ["What information should I share when I enquire?", "Share your name, contact number, the type of loan you need and the approximate amount. This helps our advisors guide you better."],
                    ["Can I enquire about more than one loan type?", "Yes. Mention all the loan types you are interested in and our team will guide you on each."],
                    ["Does an enquiry guarantee a loan?", "No. Final approval, interest rate and terms are decided by the lender after assessing your application."],
                ].map(([question, answer]) => <details key={question} className="group py-5"><summary className="cursor-pointer list-none pr-8"><h3 className="inline text-lg font-semibold">{question}</h3><span className="float-right text-lightBlue group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl leading-7 text-grey">{answer}</p></details>)}</div>
            </section>

            <section className="bg-blue px-6 py-16 text-center text-white md:px-16 md:py-20"><h2 className="text-3xl font-semibold md:text-4xl">Ready to Take the Next Step?</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">Tell us about your requirement and let our advisors help you move forward with clarity.</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><a href="#enquiry" className="rounded-[3px] bg-lightBlue px-8 py-4 font-inter text-[15px] font-medium text-white hover:bg-white hover:text-blue">Submit Enquiry</a><a href="tel:8291071621" className="rounded-[3px] border border-white px-8 py-4 font-inter text-[15px] font-medium hover:bg-white hover:text-blue">Call Now</a></div></section>
        </main>
    );
};

export default ContactUs;
