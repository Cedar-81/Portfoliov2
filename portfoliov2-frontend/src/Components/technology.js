import React from 'react'

const Technology = () => {
  return (
    <div className=' bg-blue px-4 md:px-[8%] flex flex-col items-center'>
        {/* <h4 className='mx-auto text-white text-center pt-3'>TECH STACK</h4> */}
        <div className='flex pt-4 pb-1 gap-10 items-center overflow-x-auto md:overflow-hidden md:flex-wrap md:py-8 md:justify-evenly'>
            <img className='h-10 md:h-[4.5rem]' src='/assets/csharp.svg' alt='csharp logo' />
            <img className='h-9 md:h-[4.5rem]' src='/assets/react.svg' alt='react logo' />
            <img className='h-8 md:h-[4.2rem]' src='/assets/javascript.svg' alt='javascript logo' />
            <img className='h-9 md:h-[4.5rem]' src='/assets/adobexd.svg' alt='adobexd logo' />
            <img className='h-10 md:h-[5rem]' src='/assets/css3.svg' alt='css3 logo' />        
            <img className='h-10 md:h-[5rem]' src='/assets/html.svg' alt='htm logo' />
            <img className='h-9 md:h-[5rem]' src='/assets/photoshop.svg' alt='photoshop logo' />
            <img className='h-8 md:h-[5rem]' src='/assets/adobeill.svg' alt='adobe illustrator logo' />
            <img className='h-9 md:h-[4.2rem]' src='/assets/figma.svg' alt='figma logo' />
        </div>
        <div className='flex md:hidden items-center pb-2 text-gray'>
            <img src='assets/arr.svg' alt='arrow left svg' className='h-4' />
            <p className='mx-2 text-sm'>scroll</p>
            <img src='assets/arr.svg' alt='arrow right svg' className='h-4 rotate-180' />
        </div>
    </div>
  )
}

export default Technology