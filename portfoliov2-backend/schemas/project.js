export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
        name: 'title',
        type: 'string',
        title: 'Title'
    },
    {
        name: 'subtitle',
        type: 'string',
        title: 'Subitle'
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Slug'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Project Image'
    },
  ]
}