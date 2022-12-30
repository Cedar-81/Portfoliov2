import React from 'react'
import Blogcard from './blogcard'

const Recentblog = () => {
  return (
    <div className='px-[5%] pb-8 md:px-[8%] md:mt-[6rem]'>
        <h1 className='text-xl mt-8 font-medium'>Recent blog posts</h1>
        <div className='flex flex-col gap-4 md:flex-row md:mt-[2rem] md:flex-wrap md:gap-10 md:justify-between'>
            <Blogcard />
            <Blogcard />
            <Blogcard />
        </div>
        <div className='w-full flex justify-center mt-9'>
            <button className='px-5 py-3 rounded-full md:px-10 bg-black text-white'>Load more</button>
        </div>
    </div>
  )
}

export default Recentblog