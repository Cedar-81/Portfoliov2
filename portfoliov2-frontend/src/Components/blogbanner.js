import React, { useEffect, useState } from 'react'
import useFetchBlog from '../hooks/useFetchBlog'
import { urlFor } from '../client'
import { Link } from 'react-router-dom'

const Blogbanner = () => {
  const [blog, loadmore] = useFetchBlog(true)
  const [blogimg, setBlogimg] = useState({backgroundImage: ""})

   useEffect(() => {
    if(blog?.image){
      setBlogimg({
          backgroundImage: `url(${urlFor(blog?.image).url()})`
      }) 
    }

  }, [blog])


  return (
    <Link to={`/blog/${blog?._id}/${blog?.slug}`}>
      <div style={blogimg}  className='w-screen cursor-pointer h-screen relative flex items-end blog_banner text-white bg-no-repeat bg-cover bg-center'>
          <div className='relative z-10 px-[5%] md:px-[8%] mb-6 md:w-[70%] md:mb-[8rem]'>
              <p className='text-base font-light'>FEATURED</p>
              <h1 className='text-2xl leading-snug mt-1 font-medium md:text-3xl'>{blog?.title}</h1>
              <h2 className='text-base leading-snug mt-4 text-gray font-medium'>{blog?.summary}</h2>
          </div>
      </div>
    </Link>
  )
}

export default Blogbanner