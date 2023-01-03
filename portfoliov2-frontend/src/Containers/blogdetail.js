import React, { useEffect, useState } from 'react'
import Blogcontent from '../Components/blogcontent'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { blog_content_query } from '../utils/data';
import { client, urlFor } from '../client';

const Blogdetail = () => {

  const [blogcontent, setBlogcontent] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    const query = blog_content_query(id)
    client.fetch(query)
      .then((data) => {setBlogcontent(data[0])})
      .catch(err => console.error(err))
    }, [])


  return (
    <div>
      <Helmet>
          <title>{`Cedar- Blog: ${blogcontent?.title}`} </title>
          <meta name="description" 
            content={`${blogcontent?.summary}`}
          />
          <meta property="og:title" content={`${blogcontent?.title}`} />
          <meta property="og:description" content={`${blogcontent?.summary}`} />
          {blogcontent && <meta property="og:image" content={`url(${urlFor(blogcontent?.image).url()})`} />}
        </Helmet>
      <Blogcontent blogcontent={blogcontent} />
    </div>
  )
}

export default Blogdetail