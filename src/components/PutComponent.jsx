import axios from "axios"
import { useEffect, useState } from "react"

const PutComponent = () => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts/1', {
        //     method: 'PUT',
        //     body: JSON.stringify({
        //         title: 'foo',
        //         userId: 1,
        //     }),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));

        axios.put('https://jsonplaceholder.typicode.com/posts/101', {
            // body: 'bar',
            // userId: 1,
        })
        .then(response => console.log(response.data))
        // .catch(err => console.log(err))
        // .finally(()=> setLoading(false))
    }, [])

    return (
        <>
            {loading ? 'Updating the post' : 'Post Updated'}
        </>
    )
}

export default PutComponent