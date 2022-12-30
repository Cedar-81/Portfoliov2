import React from 'react'
import { Link } from 'react-router-dom'

const Topnavmobile = () => {
  return (
    <div className='w-screen relative md:h-[4rem] bg-bck_color'>
      <div className='md:fixed md:w-full bg-bck_color md:z-20'>
        <div className='w-screen md:w-full flex justify-between items-center py-3 z-20 relative px-[5%]'>
            <p className='text-xl font-bold'>Cedar<span className='text-orange'>.</span></p>
            <div className='md:flex hidden justify-between w-[30%]'>
              <Link to={'/'} className='text-base'>Home</Link>
              <a href={'/#about'} className='text-base'>About</a>
              <a href={'/#work'} className='text-base'>Works</a>
              <Link to={'/blog'} className='text-base'>Blog</Link>
            </div>
            <button className='rounded-full px-5 py-2 bg-none border-2 font-medium text-white bg-orange'>Let's chat</button>
        </div>
        <ul className='border-b-2 md:block hidden border-b-orange ml-[5%]' />
      </div>
    </div>
  )
}

export default Topnavmobile