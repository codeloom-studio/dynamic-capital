import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = 'Dynamic Capital - Your Trusted Financial Partner',
    description = 'Dynamic Capital offers comprehensive financial solutions including personal loans, home loans, car loans, business loans, and education loans with quick approvals and competitive rates.',
    keywords = 'loans, personal loan, home loan, car loan, business loan, education loan, financial services, dynamic capital, loan approval, competitive rates',
    image = `${window.location.origin}/assets/logo.svg`,
    url = window.location.href,
    type = 'website',
    schemaData = null
}) => {
    const structuredData = schemaData || {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "name": "Dynamic Capital",
        "description": description,
        "url": url,
        "logo": `${window.location.origin}/assets/logo.svg`,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office no. H206, 2nd Floor, BRSCCL Tower no. 3, CBD Belapur Station",
            "addressLocality": "Navi Mumbai",
            "postalCode": "400614",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-82910-71621",
            "contactType": "customer service",
            "email": "dynamiccapitaladv@gmail.com"
        },
        "sameAs": [
            "https://www.facebook.com/dynamiccapital",
            "https://www.linkedin.com/company/dynamiccapital",
            "https://twitter.com/dynamiccapital"
        ],
        "serviceType": [
            "Personal Loans",
            "Home Loans",
            "Car Loans",
            "Business Loans",
            "Education Loans",
            "Loan Against Property"
        ]
    };

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Dynamic Capital" />
            <link rel="canonical" href={url} />

            {/* Open Graph Meta Tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Dynamic Capital" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:site" content="@dynamiccapital" />

            {/* Additional Meta Tags for Local Business */}
            <meta name="geo.region" content="IN-MH" />
            <meta name="geo.placename" content="Navi Mumbai" />
            <meta name="geo.position" content="19.0760;73.0777" />
            <meta name="ICBM" content="19.0760, 73.0777" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;