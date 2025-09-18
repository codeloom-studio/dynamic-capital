import React from "react";
import Button from "../components/Button"; // reuse your styled button
import BlogSection from "../components/BlogSection";

const BlogPage = () => {
    const blogs = [
        {
            id: 1,
            title: "How to Choose the Right Loan for You",
            excerpt:
                "Personal vs Home loans – which one fits your needs? Learn about eligibility, benefits, and repayment strategies...",
            image: "/assets/blog/blog1.jpg",
            date: "Sep 10, 2025",
        },
        {
            id: 2,
            title: "5 Tips to Improve Your Credit Score",
            excerpt:
                "A good credit score means better loan deals. Follow these proven steps to improve your financial health...",
            image: "/assets/blog/blog2.jpg",
            date: "Sep 12, 2025",
        },
        {
            id: 3,
            title: "Hidden Costs in Home Loans You Must Know",
            excerpt:
                "Processing fees, insurance, foreclosure charges – let’s uncover the hidden costs that affect your EMI planning...",
            image: "/assets/blog/blog3.jpg",
            date: "Sep 15, 2025",
        },
    ];

    return (
        <div className="w-full bg-dullBlue min-h-screen">
            <BlogSection />
        </div>
    );
};

export default BlogPage;
