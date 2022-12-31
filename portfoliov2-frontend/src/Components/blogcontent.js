import React, { useEffect, useState } from 'react'
import Blogdetbanner from './blogdetbanner'
import ReactMarkdown from 'react-markdown'
import { client } from '../client'
import { blog_content_query } from '../utils/data'
import { useParams } from 'react-router-dom'
import gfm from 'remark-gfm'

const Blogcontent = () => {
  const [blogcontent, setBlogcontent] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    const query = blog_content_query(id)
    client.fetch(query)
      .then((data) => {setBlogcontent(data[0])})
      .catch(err => console.error(err))
    }, [])
    
    return (
    <div className='mb-[6rem]'>
      <Blogdetbanner data={blogcontent} image={blogcontent?.image} />
      <div className='mt-[3rem] px-[5%] lg:mt-[8rem] lg:px-[20%]'>
        <ReactMarkdown className='markdown' remarkPlugins={[gfm]} children={blogcontent?.content} />
      </div>
    </div>
  )
}

export default Blogcontent