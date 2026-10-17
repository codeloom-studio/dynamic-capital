const fs = require('fs');
const path = require('path');

const buildDirectory = path.resolve(__dirname, '..', 'build');
const templatePath = path.join(buildDirectory, 'index.html');
const siteUrl = 'https://www.dynamiccapital.in';

const pages = {
    '/': {
        title: 'Personal, Home & Business Loans | Dynamic Capital',
        description: 'Explore personal, home, car, business and education loans and loan against property with Dynamic Capital. Check eligibility and talk to our team.'
    },
    '/about': {
        title: 'About Dynamic Capital | Loan & Financial Services',
        description: 'Learn about Dynamic Capital and how our team helps individuals and businesses explore personal, home, business and other loan options.'
    },
    '/contact-us': {
        title: 'Contact Dynamic Capital | Loan Enquiries',
        description: 'Contact Dynamic Capital for loan enquiries and eligibility questions. Call, email or send us a message and our team will get back to you.'
    },
    '/emi-calculator': {
        title: 'EMI Calculator – Calculate Your Loan EMI | Dynamic Capital',
        description: 'Use the Dynamic Capital EMI calculator to estimate your monthly instalment. Enter the loan amount, interest rate and tenure to plan your repayments.'
    },
    '/loan-eligibility': {
        title: 'Loan Eligibility Check | Dynamic Capital',
        description: 'Check your loan eligibility with Dynamic Capital. See what you may qualify for across personal, home, car, business and education loans.'
    },
    '/loan/personal-loan': {
        title: 'Personal Loan Options & Eligibility | Dynamic Capital',
        description: 'Explore personal loan options from Dynamic Capital for weddings, travel, medical or other needs. See eligibility, documents and how to apply.'
    },
    '/loan/home-loan': {
        title: 'Home Loan Options & Eligibility | Dynamic Capital',
        description: 'Explore home loan options from Dynamic Capital to buy, build or renovate a home. See eligibility, documents required and how to apply.'
    },
    '/loan/car-loan': {
        title: 'Car Loan Options & Eligibility | Dynamic Capital',
        description: 'Explore car loan options from Dynamic Capital for a new or used car. See eligibility, documents required and how to apply.'
    },
    '/loan/business-loan': {
        title: 'Business Loan Options & Eligibility | Dynamic Capital',
        description: 'Explore business loan options from Dynamic Capital for working capital or expansion. See eligibility, documents required and how to apply.'
    },
    '/loan/education-loan': {
        title: 'Education Loan Options & Eligibility | Dynamic Capital',
        description: 'Explore education loan options from Dynamic Capital to fund higher studies. See eligibility, documents required and how to apply.'
    },
    '/loan/loan-against-property': {
        title: 'Loan Against Property: Eligibility | Dynamic Capital',
        description: 'Explore loan against property options from Dynamic Capital. Understand eligibility, documents required and how to apply. Talk to our team.'
    }
};

const escapeAttribute = (value) => value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const replaceTag = (html, pattern, tag) => html.replace(pattern, tag);

if (!fs.existsSync(templatePath)) {
    throw new Error(`Build output not found at ${templatePath}. Run the React build first.`);
}

const template = fs.readFileSync(templatePath, 'utf8');

Object.entries(pages).forEach(([route, metadata]) => {
    const canonicalUrl = `${siteUrl}${route === '/' ? '/' : route}`;
    let html = template;
    const title = escapeAttribute(metadata.title);
    const description = escapeAttribute(metadata.description);

    html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`);
    html = replaceTag(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${description}" />`);
    html = html.replace(/\s*<meta name="keywords"[^>]*>/, '');
    html = replaceTag(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${title}" />`);
    html = replaceTag(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${description}" />`);
    html = replaceTag(html, /<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${siteUrl}/share-image.png" />`);
    html = replaceTag(html, /<meta property="og:image:width"[^>]*>/, '<meta property="og:image:width" content="1200" />');
    html = replaceTag(html, /<meta property="og:image:height"[^>]*>/, '<meta property="og:image:height" content="630" />');
    html = replaceTag(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonicalUrl}" />`);
    html = replaceTag(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${title}" />`);
    html = replaceTag(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${description}" />`);
    html = replaceTag(html, /<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${siteUrl}/share-image.png" />`);
    html = html.replace('</head>', `    <link rel="canonical" href="${canonicalUrl}" />\n</head>`);

    const outputDirectory = route === '/' ? buildDirectory : path.join(buildDirectory, route.slice(1));
    fs.mkdirSync(outputDirectory, { recursive: true });
    fs.writeFileSync(path.join(outputDirectory, 'index.html'), html);
});

console.log(`Generated SEO entry HTML for ${Object.keys(pages).length} routes.`);
