import React from "react";
import Button from "../components/Button";

const CareerPage = () => {
    const jobs = [
        {
            id: 1,
            title: "Frontend Developer",
            location: "Pune, India",
            type: "Full-time",
            description:
                "Work on modern web applications using React, Tailwind, and Next.js.",
        },
        {
            id: 2,
            title: "UI/UX Designer",
            location: "Remote",
            type: "Contract",
            description:
                "Design clean and modern interfaces while collaborating with developers.",
        },
        {
            id: 3,
            title: "Backend Developer",
            location: "Bangalore, India",
            type: "Full-time",
            description:
                "Build scalable APIs and database systems using Node.js and MongoDB.",
        },
    ];

    return (
        <div className="w-full bg-dullBlue min-h-screen py-16 px-6">
            {/* Hero Section */}
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h1 className="text-[32px] md:text-[40px] font-onest font-bold text-blue mb-3">
                    Join Our Team
                </h1>
                <p className="text-gray-700 text-lg">
                    Be a part of our journey. Explore exciting opportunities and grow your
                    career with us.
                </p>
            </div>

            {/* Job Listings */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {jobs.length > 0 ? (
                    jobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white shadow-md rounded-lg p-6 flex flex-col"
                        >
                            <h2 className="text-xl font-semibold text-blue mb-2">
                                {job.title}
                            </h2>
                            <p className="text-gray-600 text-sm mb-2">
                                📍 {job.location} | {job.type}
                            </p>
                            <p className="text-gray-700 text-sm flex-1 mb-4">
                                {job.description}
                            </p>
                            <Button
                                label="Apply Now"
                                bgColor="lightBlue"
                                onClick={() => alert(`Apply for ${job.title}`)}
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600 col-span-2">
                        Currently, there are no open positions. Please check back later.
                    </p>
                )}
            </div>
        </div>
    );
};

export default CareerPage;
