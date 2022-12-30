import React from 'react'

const About = () => {
  return (
    <div className='md:flex md:px-[8%] md:gap-8 md:mt-12 md:py-[4rem]' id='about'>
        <div className='about_con px-[5%] md:flex-2 md:h-[26rem] py-9 bg-no-repeat bg-cover md:py-6 md:px-10 md:rounded-3xl'>
            <h2 className='text-xl font-medium mt-10 w-[80%] md:text-2xl md:w-[30%]'>Feel free to call me <span className='text-blue'>Cedar,</span></h2>
            <p className='text-base leading-snug mt-5 md:w-[80%]'>
                I care a lot about using the web as a means to solve as much real world problems as I can. 
                I enjoy creating problem focused projects with user centric, delightful human experiences.
            </p>
            <div className='flex w-[65%] justify-between mt-[4rem] mb-8 md:w-[40%] md:mt-[6rem]'>
                <button className='px-7 py-3 rounded-full text-white bg-black md:px-9'>Contact</button>
                <button className='w-11 flex justify-center items-center h-11 bg-white rounded-full'><img src='/assets/twitter.svg' alt='' className='w-5' /></button>
                <button className='w-11 flex justify-center items-center h-11 bg-white rounded-full'><img src='/assets/linkedin.svg' alt='' className='w-5' /></button>
            </div>
        </div>

        <img className='w-screen md:w-auto md:h-full md:rounded-3xl md:flex-1' src='/assets/aboutimg-mobile.png' alt='' />
    </div>
  )
}

export default About