import React from 'react'
import BlogCard from './BlogCard'

const BlogSection = () => {
    return (
        <div className='w-full py-10'>
            <h1 className='font-taviraj text-blue font-semibold text-3xl text-center mb-6'><span className='italic text-lightBlue'>Our Blog</span> your Guide to Smarter Finance</h1>
            <p className='text-[15px] text-blue leading-[130%] font-onest font-normal text-center max-2xl:px-10 px-20 mb-20'>Stay updated with the latest tips, trends, and insights on loans, interest rates, and financial planning.</p>

            <div className='flex flex-wrap justify-center items-center gap-10 px-6 md:px-36 mb-20'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export default BlogSection