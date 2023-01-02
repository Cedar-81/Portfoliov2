import React, { useEffect, useState } from 'react'
import { blog_query } from '../utils/data'
import { client } from '../client'

const useFetchBlog = (featured = false) => {
    const [blogs, setBlogs] = useState(null)
    const [loadamt, setLoadamt] = useState(3)
    
    useEffect(() => {
        const query = blog_query()
        if(!featured) {
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
        }

        if(featured) {
          client.fetch(query)
            .then(data => {
              let latestdate = new Date('2022-10-30T01:14:25');
              let latestblog;
              data.forEach(val => {
                  let newdate = new Date(val._createdAt)
                  if (newdate > latestdate) latestblog = val
              })
              setBlogs(latestblog)
            } )
            .catch(err => console.err(err))
        }
        }, [loadamt])
        
  return [
    blogs,
    () => setLoadamt(prev => prev + 3)
  ]
}

export default useFetchBlog