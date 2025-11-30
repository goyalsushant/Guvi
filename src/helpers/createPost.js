import { redirect } from "react-router-dom"

export async function createPost({ request }) {
    const formData = await request.formData()
    const newPost = Object.entries(formData)

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    if(!response.ok) {
        console.log('Failed to create the post')
    }

    return redirect('/dashboard/posts')
}