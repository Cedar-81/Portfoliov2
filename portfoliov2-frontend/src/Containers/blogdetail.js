import React, { useEffect, useState } from 'react'
import Blogcontent from '../Components/blogcontent'
import { useParams } from 'react-router-dom';
import { blog_content_query } from '../utils/data';
import { client, urlFor } from '../client';
import SEO from '../Components/seo';

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
      {blogcontent && 
        <SEO 
            name={"C_edar_"} 
            title={`Cedar- Blog: ${blogcontent?.title}`} 
            description={`${blogcontent?.summary}`}
            type={`summary`}
            imgurl={`url(${urlFor(blogcontent?.image).url()})`} 
            imgalt={`${blogcontent?.imagealt}`}
            url={`https://cedar.readate.org/${id}/${blogcontent?.slug}`}
        />
      }
      <Blogcontent blogcontent={blogcontent} />
    </div>
  )
}

export default Blogdetail