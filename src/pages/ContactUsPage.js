import React from 'react'
import ContactUs from '../components/ContactUs'
import SEO from '../components/SEO'

const ContactUsPage = () => {
    return (
        <>
            <SEO
                title="Contact Dynamic Capital | Loan Enquiries"
                description="Contact Dynamic Capital for loan enquiries and eligibility questions. Call, email or send us a message and our team will get back to you."
                keywords="contact dynamic capital, financial services contact, loan inquiry, navi mumbai financial services"
                url={window.location.href}
                breadcrumbName="Contact Dynamic Capital"
            />
            <ContactUs />
        </>
    )
}

export default ContactUsPage