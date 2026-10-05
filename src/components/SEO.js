import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.dynamiccapital.in';

const SEO = ({
    title = 'Dynamic Capital - Your Trusted Financial Partner',
    description = 'Dynamic Capital offers comprehensive financial solutions including personal loans, home loans, car loans, business loans, and education loans with quick approvals and competitive rates.',
    keywords = 'loans, personal loan, home loan, car loan, business loan, education loan, financial services, dynamic capital, loan approval, competitive rates',
    image = `${SITE_URL}/assets/logo.svg`,
    url = window.location.href,
    type = 'website',
    schemaData = null,
    breadcrumbName = null
}) => {
    const currentUrl = new URL(url, SITE_URL);
    const canonicalUrl = `${SITE_URL}${currentUrl.pathname === '/' ? '/' : currentUrl.pathname.replace(/\/$/, '')}`;
    const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;
    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "@id": `${canonicalUrl}#organization`,
        "name": "Dynamic Capital",
        "description": description,
        "url": canonicalUrl,
        "logo": `${SITE_URL}/assets/logo.svg`,
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
            "https://www.facebook.com/share/18eALyWcfE/",
            "https://www.instagram.com/dynamiccapital.in",
            "https://www.linkedin.com/company/dynamic-capital-advisor-pvt-ltd/"
        ],
        "areaServed": "IN",
        "serviceType": [
            "Personal Loans",
            "Home Loans",
            "Car Loans",
            "Business Loans",
            "Education Loans",
            "Loan Against Property"
        ]
    };
    const breadcrumbSegments = currentUrl.pathname.split('/').filter(Boolean);
    const breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
            ...breadcrumbSegments.map((segment, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": index === breadcrumbSegments.length - 1 && breadcrumbName
                    ? breadcrumbName
                    : segment.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                "item": `${SITE_URL}/${breadcrumbSegments.slice(0, index + 1).join('/')}`
            }))
        ]
    };
    const structuredData = schemaData
        ? { ...schemaData, "@graph": [...(schemaData["@graph"] || [schemaData]), breadcrumbSchema] }
        : { "@context": "https://schema.org", "@graph": [businessSchema, breadcrumbSchema] };

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Dynamic Capital" />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph Meta Tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:alt" content="Dynamic Capital financial services" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="Dynamic Capital" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

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