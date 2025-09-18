import React from "react";

const ReviewCard = ({ date, title, content }) => {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-white rounded-2xl shadow-sm p-8 min-h-[414px] min-w-[390px]">
                {/* Stars + Date */}
                <div className="flex justify-between items-center">
                    {/* Stars */}
                    <div className="flex space-x-1">
                        <img src="./assets/reviews.svg" alt="Star" className="w-15 h-5" />
                    </div>
                    {/* Date */}
                    <p className="text-gray-400 text-sm">{date}</p>
                </div>

                {/* Divider */}
                <hr className="my-4 border-gray-200" />

                {/* Title */}
                <h2 className="text-2xl font-taviraj font-normal text-blue leading-[150%]">
                    {title}
                </h2>

                {/* Content */}
                <p className="text-blue mt-4 leading-relaxed">
                    {content}
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;
