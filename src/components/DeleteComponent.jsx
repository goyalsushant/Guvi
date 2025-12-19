import axios from "axios"
import { useEffect, useState } from "react"

const DeleteComponent = () => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts/1', {
        //     method: 'DELETE',
        // })
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));

        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
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

export default DeleteComponent