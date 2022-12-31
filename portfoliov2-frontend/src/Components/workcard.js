import React, { useEffect, useRef } from 'react'
import { urlFor } from '../client'

const Workcard = ({ data: {title, subtitle, image} }) => {
  const containerStyle = {
    backgroundImage: `url(${urlFor(image).url()})`
  }

  return (
    <div style={containerStyle} className='work_card cursor-pointer relative md:px-0 max-w-[20rem] h-[24rem] rounded-2xl text-white bg-no-repeat bg-cover bg-center'>
        <div className='flex w-full justify-between items-start relative p-4 pt-6 z-10'>
            <div className='flex flex-col'>
                <h3 className='text-lg font-medium'>{title}</h3>
                <p className='text-base text-gray w-[90%]'>{subtitle}</p>
            </div>
            <button className='rounded-full p-2 bg-white opacity-90'><img className='h-6' src='/assets/arrow.svg' alt='' /></button>
        </div>
    </div>
  )
}

export default Workcard