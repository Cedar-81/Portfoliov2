import React, { useEffect, useState } from 'react'
import Blogcard from './blogcard'
import { client } from '../client'
import { blog_query } from '../utils/data'

const Recentblog = () => {
  const [blogs, setBlogs] = useState(null)
  const [loadamt, setLoadamt] = useState(3)

  useEffect(() => {
    const query = blog_query()
    client.fetch(query)
      .then(data => {
        if(data.length > 0) {
          let arr = []
          let count = 0
          data?.forEach(val => {
            arr.push(val)
            count++
            if(count === loadamt || count == data.length) return setBlogs(arr)
          });
        }
      })
      .catch(err => console.error(err))
    }, [loadamt])

    console.log(blogs)

  return (
    <div className='px-[5%] pb-8 md:px-[8%] md:mt-[6rem]'>
        <h1 className='text-xl mt-8 font-medium'>Recent blog posts</h1>
        <div className='flex flex-col gap-4 md:flex-row md:mt-[2rem] md:flex-wrap md:gap-10 md:justify-between'>
          {
            blogs?.map(blog => <Blogcard data={blog} />)
          } 
        </div>
        {blogs && (
          <div className='w-full flex justify-center mt-9'>
              <button onClick={() => setLoadamt(prev => prev + 3)} className='px-5 py-3 rounded-full md:px-10 bg-black text-white'>Load more</button>
          </div>)
        }
    </div>
  )
}

export default Recentblog