import { useEffect, useState } from "react"

const Users = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function callApi() {

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                setUsers(data)
                console.log(data)
            }
            catch (err) {
                console.log(err)
            }
            finally {
                setLoading(false)
            }

        }

        callApi()
    }, [])

    if(loading) return <p>Loading...</p>

    return (
        <>
            <ul>
                {users.map((user, index) => {
                    return (
                        <li key={user.id}>{user.name}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default Users