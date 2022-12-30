import React from 'react'

const Topnavmobile = () => {
  return (
    <div className='w-screen flex justify-between items-center py-3 z-20 relative bg-bck_color px-[5%]'>
        <p className='text-xl font-bold'>Cedar<span className='text-orange'>.</span></p>
        <button className='rounded-full px-5 py-2 bg-none border-2 font-medium text-white bg-orange'>Let's chat</button>
    </div>
  )
}

export default Topnavmobile