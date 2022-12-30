import React from 'react'

const Blogbanner = () => {
  return (
    <div className='w-screen cursor-pointer h-screen relative flex items-end blog_banner text-white bg-no-repeat bg-cover bg-center'>
        <div className='relative z-10 px-[5%] md:px-[8%] mb-6 md:w-[70%] md:mb-[8rem]'>
            <p className='text-base font-light'>FEATURED</p>
            <h1 className='text-2xl leading-snug mt-1 font-medium md:text-3xl'>Coding Tips: How to avoid coding mistakes</h1>
            <h2 className='text-base leading-snug mt-4 text-gray font-medium'>
                When it comes to coding there a few mistakes that 
                seem inevitable no mater how we try to avoid it. 
                This blog is there to share some easy tips to make it more approachable
            </h2>
        </div>
    </div>
  )
}

export default Blogbanner