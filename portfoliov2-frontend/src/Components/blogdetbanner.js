import React from 'react'

const Blogdetbanner = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row lg:items-center'>
        <div className='px-[5%] mt-8'>
            <p className='text-sm font-medium'>20 Jan 2022. <span className=''>10 min read</span></p>
            <h1 className='text-xl font-medium leading-snug mt-1 md:text-3xl'>
                How collaborations make better designers
            </h1>
            <p className='text-[18px] mt-3 lg:w-[70%]'>
                Collaborations can make our teams stronger and
                our designs better.
            </p>
            <div className='flex mt-7 items-center'>
                <img src='/assets/aboutimg-mobile.png' alt='' className='h-10 w-10 rounded-full' />
                <div className='ml-3'>
                    <p className='font-medium'>Cedar</p>
                    <p className='text-sm font-light'>Graphic Designer and Web developer</p>
                </div>
            </div>
        </div>

        <div className='lg:hidden'>
            <img src='/assets/blgbnr.jpg' alt='' className='' />
        </div>

        <div className='blog_det w-[50%] h-screen hidden lg:block bg-no-repeat bg-cover bg-center'></div>
    </div>
  )
}

export default Blogdetbanner