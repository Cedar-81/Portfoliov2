export const project_query = () => {
    const query = `*[_type == "project"]`
    return query
}

export const blog_query = () => {
    const query = `*[_type == "blog"]`
    return query
}

export const blog_content_query = (id) => {
    const query = `*[_type == "blog" && _id == "${id}"]`
    return query
}