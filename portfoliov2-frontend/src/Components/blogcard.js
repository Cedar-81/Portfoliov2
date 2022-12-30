import React from 'react'

const Blogcard = () => {
  return (
    <div className='px-[5%] mt-6'>
        <div className='blog_img bg-no-repeat bg-cover bg-center w-full h-[15em] rounded-2xl'></div>
        <div className='mt-7'>
            <h3 className='text-lg font-medium'>
                How collaborations make better designers
            </h3>
            <p className='text-base mt-2'>
                Collaborations can make our teams stronger and
                our designs better.
            </p>
            <div className='flex font-medium items-center mt-4'>
                <p className=''>Cedar</p>
                <span className='h-2 w-2 ml-1 mr-2 inline bg-black rounded-full'></span>
                <p className=''>6th Jan, 2023</p>
            </div>
        </div>
    </div>
  )
}

export default Blogcard