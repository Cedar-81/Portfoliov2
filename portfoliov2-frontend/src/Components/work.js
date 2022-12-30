import React from 'react'
import Workcard from './workcard'

const Work = () => {
  return (
    <div id='work' className='px-[5%] flex flex-col gap-8 pt-12 pb-8'>
        <h3 className='text-xl font-medium'>Works</h3>
        <Workcard />
        <Workcard />
        <Workcard />
        <Workcard />
        <div className='w-full flex justify-center mt-3'>
            <button className='px-5 py-3 rounded-full border-2 border-orange text-orange'>Load more</button>
        </div>
    </div>
  )
}

export default Work