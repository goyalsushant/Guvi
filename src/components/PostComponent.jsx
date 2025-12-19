import axios from "axios"
import { useEffect, useState } from "react"

const PostComponent = () => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         title: 'foo',
        //         body: 'bar',
        //         userId: 1,
        //     }),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));

        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }, {
            'Content-Type': 'application/json'
        })
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])

    return (
        <>
            {loading ? 'Creating the post': 'Post Created'}
        </>
    )
}

export default PostComponent