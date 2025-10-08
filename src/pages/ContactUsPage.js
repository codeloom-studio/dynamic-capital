import React from 'react'
import ContactUs from '../components/ContactUs'
import SEO from '../components/SEO'

const ContactUsPage = () => {
    return (
        <>
            <SEO
                title="Contact Us - Dynamic Capital | Get in Touch for Financial Solutions"
                description="Contact Dynamic Capital for all your loan and financial service needs. Located in Navi Mumbai. Call us at 82910-71621 or email dynamiccapitaladv@gmail.com"
                keywords="contact dynamic capital, financial services contact, loan inquiry, navi mumbai financial services"
                url={window.location.href}
            />
            <ContactUs />
        </>
    )
}

export default ContactUsPage