import React from 'react'

const BlogCard = () => {
    return (
        <div className='flex flex-col justify-center rounded-lg items-center gap-3 bg-white max-w-[360px]'>
            <img src="./assets/blog1.svg" alt="Blog 1" className='max-w-sm w-full' />
            <div className='max-w-sm w-full flex flex-col gap-4 p-3'>
                <h2 className='text-2xl font-taviraj font-normal text-blue leading-9'>How to become financially independent in your 20s. Top tips from experts</h2>
                <p className='text-blue leading-6 font-onest'>We coordinate your retirement accounts for
                    maximum tax efficiency, helping you save on taxes and grow your potential returns.</p>
                <a href="#" className='text-lightBlue italic font-onest font-medium'>Read More &rarr;</a>
            </div>
        </div>
    )
}

export default BlogCard