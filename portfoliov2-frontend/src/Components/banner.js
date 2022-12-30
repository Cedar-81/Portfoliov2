import React from 'react'

const Banner = () => {
  return (
    <div>
        <div className='w-screen flex justify-center items-center flex-col px-[5%] pt-11 pb-9'>
            <h1 className='text-2xl font-semibold mx-auto leading-tight'>
                Hi! I am <span className='text-sm w-max rounded-full py-1 my-auto mx-auto px-3 bg-blue text-white'>Web developer</span><br/> Divinewisdom.
            </h1>
            <p className='text-base w-[90%] font-normal text-center leading-snug mt-3'>
                Digital Designer and  Web developer working as a developer for 4 years now. 
                Specialize in Web design and development.
            </p>
            <div className='flex mt-7 w-[75%] justify-between'>
                <button className='rounded-full w-max px-7 py-2 text-base flex justify-center items-center text-white bg-orange font-medium'>Hire Me</button>
                <button className='rounded-full w-max px-7 py-2 text-base flex justify-center items-center border-2 font-medium'>Projects</button>
            </div>            
        </div>

        <div className='px-[5%]'>
            <div className='mt-9'>
                <h3 className='text-lg font-medium'>Hobbies</h3>
                <p className=''>Writing, Singing</p>
            </div>
            <div className='mt-9'>
                <div className='text-right'>
                    <h3 className='text-lg font-medium'>Contact</h3>
                    <p className=''>cedarwudnovels@gmail.com</p>
                </div>
                <div className='flex flex-row-reverse pt-[3.5rem] pb-6'>
                    <img src='/assets/atom.svg' alt='' className='' />
                    <p className='text-right mr-2'>
                        UI/UX designer, Graphic Designer and Web developer.
                        Specialized in Web Development.
                    </p>
                </div>
            </div>
        </div>

        <img src='/assets/bannerimg-mobile.png' alt='' className='mt-9 w-screen' />
    </div>
  )
}

export default Banner