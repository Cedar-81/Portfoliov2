import React from 'react'
import Banner from '../Components/banner'
import About from '../Components/about'
import Work from '../Components/work'
import Technology from '../Components/technology'
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className='bg-bck_color pb-[5rem]'>
        <Helmet>
          <title>Cedar - Web Developer and Graphic Designer</title>
          <meta name="description" 
            content="Hi, nice to meet you. 
              I am a Freelance Web Developer and Graphic Designer.
              Let's Chat." 
          />
          <meta name="keywords" content="backend web development, frontend web development, javascript
            c#, react, nextjs, sanity, remote web developer, web application development, web developers near me,
            ecommerce web developer, web designer, ui/ux designer,
          " 
          />

        </Helmet>
        <Banner />
        <Technology />
        <About />
        <Work />
    </div>
  )
}

export default Home