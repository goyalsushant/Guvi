import { Link, useLoaderData } from "react-router-dom"

const Posts = () => {

    const posts = useLoaderData()

    return (
        <div>
            <h2>Posts</h2>
            <Link to="new">Create New Post</Link>

            <ul>
                {
                    posts?.map(post => (
                        <li key={post.id}>
                            <strong>{post.title}</strong>
                            <span>{post.body}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Posts