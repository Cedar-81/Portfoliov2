import React from 'react'
import { Link } from 'react-router-dom'

const Navmobile = () => {
  return (
    <nav className='z-30 fixed bottom-0 w-screen border-t-2 border-t-orange bg-bck_color'>
      <div className='flex px-[5%] h-[4.2rem] justify-between items-center'>
          <Link to='/' className='flex flex-col items-center'>
            <img src='/assets/home.svg' alt='' className='mb-1 h-9' />
            <p className='text-xs'>Home</p>
          </Link>
          <a href='/#work' className='flex flex-col items-center'>
            <img src='/assets/work.svg' alt='' className='mb-1 h-9' />
            <p className='text-xs'>Work</p>
          </a>
          <a href='/#about' className='flex flex-col items-center'>
            <img src='/assets/contact.svg' alt='' className='mb-1 h-10' />
            <p className='text-xs'>About</p>              
          </a>
          <Link to='/blog' className='flex flex-col items-center'>
            <img src='/assets/blog.svg' alt='' className='mb-1 h-9' />
            <p className='text-xs'>Blog</p>
          </Link>
      </div>
    </nav>
  )
}

export default Navmobile