import React from 'react'
import Blogbanner from '../Components/blogbanner'
import Recentblog from '../Components/recentblog'

const Blog = () => {
  return (
    <div className='bg-bck_color pb-[5rem]'>
        <Blogbanner />
        <Recentblog />
    </div>
  )
}

export default Blog