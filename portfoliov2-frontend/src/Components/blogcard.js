import React from 'react'
import { Link } from 'react-router-dom'
import { urlFor } from '../client'

const Blogcard = ({data: {title, slug, image, datetime, summary, _id}}) => {
    const blogContainerStyle = {
        backgroundImage: `url(${urlFor(image).url()})`
    }
  return (
    <Link to={`/blog/${_id}/${slug}`}>
        <div className='px-[5%] md:px-0 max-w-[20rem] cursor-pointer mt-6'>
            <div style={blogContainerStyle} className='blog_img bg-no-repeat bg-cover bg-center w-full h-[15em] rounded-2xl'></div>
            <div className='mt-7'>
                <h3 className='text-lg font-medium'>
                    {title}
                </h3>
                <p className='text-base mt-2'>
                    {summary}
                </p>
                <div className='flex font-medium items-center mt-4'>
                    <p className=''>Cedar</p>
                    <span className='h-2 w-2 ml-1 mr-2 inline bg-black rounded-full'></span>
                    <p className=''>{datetime}</p>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Blogcard