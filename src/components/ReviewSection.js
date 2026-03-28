import React from 'react'
import ReviewCard from './ReviewCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const reviews = [
    {
        date: "13 Dec, 2024",
        title: "Very easy to get set up and running",
        content: "Interface seems intuitive and easy to use. Customer services have been proactive. The open banking seems to work well, with transactions pulling into accounting software. Happy to recommend Allica Bank based on my experience to date."
    },
    {
        date: "25 Nov, 2024",
        title: "Seamless experience from start to finish",
        content: "From the initial application to the final approval, the process was smooth and hassle-free. The team was responsive and provided clear guidance throughout. Highly recommend their services!"
    },
    {
        date: "05 Oct, 2024",
        title: "Professional and efficient service",
        content: "The staff were knowledgeable and professional, making the entire experience efficient and pleasant. They addressed all my concerns promptly and ensured I was well-informed at every step."
    },
    {
        date: "20 Sep, 2024",
        title: "Great support team!",
        content: "The customer support team went above and beyond to ensure I was comfortable with the process. I truly appreciate their patience and assistance."
    }
]

const ReviewSection = () => {
    return (
        <div className='w-full bg-dullBlue px-6 md:px-36 py-16 flex flex-col items-center justify-center'>
            <h1 className='font-onest text-blue font-semibold text-3xl text-center mb-10'>
                What our <span className='text-lightBlue italic'>Happy Borrowers</span> say
            </h1>
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                className="w-full"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <ReviewCard {...review} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ReviewSection
