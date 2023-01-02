import React, { useEffect, useState } from 'react'
import Blogdetbanner from './blogdetbanner'
import ReactMarkdown from 'react-markdown'
import { client } from '../client'
import { blog_content_query } from '../utils/data'
import { useParams } from 'react-router-dom'
import gfm from 'remark-gfm'
import { ImSpinner } from 'react-icons/im'

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
      <>
        {!blogcontent && 
            <div className='h-screen flex justify-center items-center w-full'>
                <div className='flex  gap-4 '>
                    <ImSpinner className='text-xl animate-spin text-orange' />
                    <p className='text-lg'>Loading...</p>
                </div>
            </div>
        }
      
        {blogcontent && 
          <div className='mb-[6rem]'>
            <Blogdetbanner data={blogcontent} image={blogcontent?.image} />
            <div className='mt-[3rem] px-[5%] lg:mt-[8rem] lg:px-[20%]'>
              <ReactMarkdown className='markdown' remarkPlugins={[gfm]} children={blogcontent?.content} />
            </div>
          </div>
        }
      </>
  )
}

export default Blogcontent