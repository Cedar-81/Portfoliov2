import React from 'react'
import Blogbanner from '../Components/blogbanner'
import Recentblog from '../Components/recentblog'
import { Helmet } from 'react-helmet';

const Blog = () => {
  return (
    <div className='bg-bck_color pb-[5rem] max-w-screen overflow-x-hidden '>
        <Helmet>
          <title>Cedar- Blogs</title>
          <meta name="description" 
            content="Hi, nice to meet you. 
              I am a Freelance Web Developer and Graphic Designer.
              Love to read, here are some of my most curated thoughts. Hop on in." 
          />
        </Helmet>
        <Blogbanner />
        <Recentblog />
    </div>
  )
}

export default Blog