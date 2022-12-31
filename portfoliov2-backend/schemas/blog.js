export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Slug'
    },
    {
      name: 'datetime',
      type: 'string',
      title: 'Date'
    },
    {
      name: 'readtime',
      type: 'string',
      title: 'Readtime'
    },
    {
        name: 'content',
        type: 'text', 
        title: 'Content', 
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Summary'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Project Image'
    },
    {
      name: 'imagealt',
      type: 'string',
      title: 'Image alt'
    },
  ]
}