import React from 'react'
import { Helmet } from 'react-helmet';

const SEO = ({name, description, title, imgurl, imgalt, url}) => {
  return (
    <Helmet>
        { /* Standard metadata tags */ }
        <title>{title}</title>
        <meta name='description' content={description} />
        { /* End standard metadata tags */ }

        { /* Facebook tags */ }
        <meta property="og:type" content={"article"} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imgurl} />
        <meta property="og:url" content={url} />
        { /* End Facebook tags */ }

        { /* Twitter tags */ }
        <meta name="twitter:creator" content={`@${name}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content={`@${name}`} />
        <meta name="twitter:image" content={imgurl} />
        <meta name="twitter:image:alt" content={imgalt} />
        { /* End Twitter tags */ }
    </Helmet>
  )
}

export default SEO