import React, { useEffect, useState } from 'react'
import { urlFor } from '../client'


const Blogdetbanner = ({data, image}) => {

    return (
    <div className='flex flex-col-reverse lg:flex-row lg:items-center'>
        <div className='px-[5%] mt-8'>
            <p className='text-sm font-medium'>{data?.datetime}. <span className=''>{data?.readtime}</span></p>
            <h1 className='text-xl font-medium leading-snug mt-1 md:text-3xl'>
                {data?.title}
            </h1>
            <p className='text-[18px] mt-3 lg:w-[80%]'>
                {data?.summary}
            </p>
            <div className='flex mt-7 items-center'>
                <img src='/assets/profile.jpg' alt='' className='h-10 w-10 rounded-full' />
                <div className='ml-3'>
                    <p className='font-medium'>Cedar</p>
                    <p className='text-sm font-light'>Graphic Designer and Web developer</p>
                </div>
            </div>
        </div>

        {image && <div className='lg:hidden'>
            <img src={urlFor(image).url()} alt='' className='w-screen' />
        </div>}

        {image && <div style={{backgroundImage: `url(${urlFor(image).url()})`}} className='blog_det min-w-[45%] h-screen border-2 hidden lg:block bg-no-repeat bg-cover bg-center'></div>}
    </div>
  )
}

export default Blogdetbanner