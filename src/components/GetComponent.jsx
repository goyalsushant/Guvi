import axios from "axios"
import { useEffect, useState } from "react"

const GetComponent = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function callApi() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const userData = await response.json()
            console.log('fetch',userData)
        }

        callApi()
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setData(response.data))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    }, [])

    if(loading) return(<>Data is Loading...</>)

    return (
        <>
            <h4>Users List</h4>
            <ul>
                {data.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

export default GetComponent