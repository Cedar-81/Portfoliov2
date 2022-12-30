import React from 'react'
import Banner from '../Components/banner'
import About from '../Components/about'
import Work from '../Components/work'
import Technology from '../Components/technology'

const Home = () => {
  return (
    <div className='bg-bck_color pb-[5rem]'>
        <Banner />
        <Technology />
        <About />
        <Work />
    </div>
  )
}

export default Home