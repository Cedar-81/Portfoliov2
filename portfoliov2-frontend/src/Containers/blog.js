import React from 'react'
import Blogbanner from '../Components/blogbanner'
import Recentblog from '../Components/recentblog'
import SEO from '../Components/seo';

const Blog = () => {
  return (
    <div className='bg-bck_color pb-[5rem] max-w-screen overflow-x-hidden '>
      <SEO 
          name={"C_edar_"} 
          title={`Cedar- Blogs`} 
          description={'I am a Freelance Web Developer and Graphic Designer. Love to read, here are some of my most curated thoughts. Hop on in'} 
          imgurl={process.env.PUBLIC_URL + '/assets/blogsimg.jpg'}
          imgalt={'A quirky image of a lit lightbulb wearing a hat that is in turn wearing some googles;)'}
          url={'https://cedar.readate.org'}
          />
        <Blogbanner />
        <Recentblog />
    </div>
  )
}

export default Blog