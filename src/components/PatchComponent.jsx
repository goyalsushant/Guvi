import axios from "axios"
import { useEffect, useState } from "react"

const PatchComponent = () => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts/1', {
        //     method: 'PATCH',
        //     body: JSON.stringify({
        //         userId: 2,
        //     }),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));

        axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
            body: 'bar',
            // userId: 1,
        })
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])

    return (
        <>
            {loading ? 'Updating the post' : 'Post Updated'}
        </>
    )
}

export default PatchComponent