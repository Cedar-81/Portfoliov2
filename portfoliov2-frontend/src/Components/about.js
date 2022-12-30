import React from 'react'

const About = () => {
  return (
    <div className='' id='about'>
        <div className='about_con px-[5%] py-9 bg-no-repeat bg-cover'>
            <h2 className='text-xl font-medium mt-10 w-[80%]'>Feel free to call me <span className='text-blue'>Cedar,</span></h2>
            <p className='text-basen leading-snug mt-5'>
                I care a lot  using the web to solve as much  real world problems as I can. 
                I enjoy creating problem focused projects with user centric, delightful human experiences.
            </p>
            <div className='flex w-[65%] justify-between mt-[4rem] mb-8'>
                <button className='px-7 py-3 rounded-full text-white bg-black'>Contact</button>
                <button className='w-11 flex justify-center items-center h-11 bg-white rounded-full'><img src='/assets/twitter.svg' alt='' className='w-5' /></button>
                <button className='w-11 flex justify-center items-center h-11 bg-white rounded-full'><img src='/assets/linkedin.svg' alt='' className='w-5' /></button>
            </div>
        </div>

        <img className='w-screen' src='/assets/aboutimg-mobile.png' alt='' />
    </div>
  )
}

export default About