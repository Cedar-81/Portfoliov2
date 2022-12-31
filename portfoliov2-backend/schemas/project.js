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
      name: 'url',
      type: 'string',
      title: 'Project Url'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Project Image'
    },
  ]
}