import React from 'react'

const Workcard = () => {
  return (
    <div className='work_card relative w-full h-[24rem] rounded-2xl text-white bg-no-repeat bg-cover bg-center'>
        <div className='flex w-full justify-between items-center relative p-4 pt-6 z-10'>
            <div className='flex flex-col'>
                <h3 className='text-lg font-medium'>Xplore</h3>
                <p className='text-base text-gray'>
                    School management software app
                </p>
            </div>
            <button className='rounded-full p-2 bg-white'><img className='h-6' src='/assets/arrow.svg' alt='' /></button>
        </div>
    </div>
  )
}

export default Workcard