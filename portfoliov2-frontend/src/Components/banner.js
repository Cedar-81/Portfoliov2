import React from 'react'

const Banner = () => {
  return (
    <div className='md:flex md:max-w-screen md:justify-between md:h-screen'>
        <div className="xl:mt-12 md:!basis-1/2 md:max-w-full">
            <div className='w-screen flex justify-center items-center flex-col px-[5%] md:pl-[8%] pt-11 pb-9 md:w-[100%] md:block'>
                <h1 className='text-2xl font-semibold mx-auto leading-tight md:mx-0 md:text-[3.3rem]'>
                    Hi! I am <span className='text-sm w-max rounded-full py-1 md:py-2 md:px-4 my-auto mx-auto px-3 bg-blue text-white'>Web developer</span><br/> Divinewisdom.
                </h1>
                <p className='text-base w-[90%] font-normal text-center leading-snug mt-3 md:text-left'>
                    Digital Designer and  Web developer working as a developer for 4 years now. 
                    Specialize in Web design and development.
                </p>
                <div className='flex mt-7 w-[75%] justify-between md:w-max'>
                    <button className='rounded-full w-max px-7 py-2 text-base flex justify-center items-center text-white bg-orange font-medium'>Hire Me</button>
                    <button className='rounded-full md:ml-10 w-max px-7 py-2 text-base flex justify-center items-center border-2 font-medium'>Projects</button>
                </div>            
            </div>

            <div className='px-[5%] md:pl-[8%]'>
                <div className='mt-9'>
                    <h3 className='text-lg font-medium'>Hobbies</h3>
                    <p className=''>Writing, Singing</p>
                </div>
                <div className='mt-9 md:flex md:items-center'>
                    <div className='text-right md:text-left'>
                        <h3 className='text-lg font-medium'>Contact</h3>
                        <p className=''>cedarwudnovels@gmail.com</p>
                    </div>
                    <div className='flex flex-row-reverse pt-[3.5rem] pb-6 ml-8 md:flex-row md:pt-0 md:pb-0 md:items-start'>
                        <img src='/assets/atom.svg' alt='' className='' />
                        <p className='text-right mr-2 md:text-left md:mr-0 md:ml-2 md:w-[80%]'>
                            UI/UX designer, Graphic Designer and Web developer.
                            Specialized in Web Development.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <img src='/assets/bannerimg-mobile.png' alt='' className='mt-9 w-screen md:hidden' />
        <div className='hidden h-full !basis-1/2 w-full md:flex justify-end'>
             <img src='/assets/bannerimg-desktop.png' alt='' className='h-full' />
        </div>
    </div>
  )
}

export default Banner