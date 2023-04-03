export const project_query = () => {
    const query = `*[_type == "project" && !(_id in path("drafts.**"))] | order(_createdAt desc)]`
    return query
}

export const blog_query = () => {
    const query = `*[_type == "blog" && !(_id in path("drafts.**"))] | order(_createdAt desc)]`
    return query
}

export const blog_content_query = (id) => {
    const query = `*[_type == "blog" && _id == "${id}"]`
    return query
}
