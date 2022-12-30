import React from 'react'
import Workcard from './workcard'

const Work = () => {
  return (
    <div id='work' className='px-[5%] pt-12 pb-8 md:px-[8%]'>
        <h3 className='text-xl font-medium md:text-2xl'>Works</h3>
        <div className='flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-8 mt-10 md:justify-between md:mt-[4rem]'>
          <Workcard />
          <Workcard />
          <Workcard />
          <Workcard />          
        </div>

        <div className='w-full flex justify-center mt-3 md:mt-10'>
            <button className='px-5 py-3 rounded-full border-2 border-orange text-orange md:px-8'>Load more</button>
        </div>
    </div>
  )
}

export default Work