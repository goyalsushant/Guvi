import { useAuth } from "../hooks/useAuth"

export const Sidebar = (props) => {
    console.log(props)
    // const {user} = useAuth()
    return (
        <>
        {
            'Hello World'
            // user ? <div>User is present in sidebar component</div> : <div>User not found</div>
        }</>
    )
}