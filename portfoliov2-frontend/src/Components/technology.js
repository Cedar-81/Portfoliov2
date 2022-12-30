import React from 'react'

const Technology = () => {
  return (
    <div className=' bg-blue px-4 flex flex-col items-center'>
        {/* <h4 className='mx-auto text-white text-center pt-3'>TECH STACK</h4> */}
        <div className='flex pt-4 pb-1 gap-8 items-center overflow-x-auto'>
            <img className='h-10 ' src='/assets/csharp.svg' alt='' />
            <img className='h-9 ' src='/assets/react.svg' alt='' />
            <img className='h-8 ' src='/assets/javascript.svg' alt='' />
            <img className='h-9 ' src='/assets/adobexd.svg' alt='' />
            <img className='h-10 ' src='/assets/css3.svg' alt='' />
            <img className='h-10 ' src='/assets/csharp.svg' alt='' />
            <img className='h-9 ' src='/assets/react.svg' alt='' />
            <img className='h-8 ' src='/assets/javascript.svg' alt='' />
            <img className='h-9 ' src='/assets/adobexd.svg' alt='' />
            <img className='h-10 ' src='/assets/css3.svg' alt='' />            
        </div>
        <div className='flex items-center pb-2 text-gray'>
            <img src='assets/arr.svg' alt='' className='h-4' />
            <p className='mx-2 text-sm'>scroll</p>
            <img src='assets/arr.svg' alt='' className='h-4 rotate-180' />
        </div>
    </div>
  )
}

export default Technology