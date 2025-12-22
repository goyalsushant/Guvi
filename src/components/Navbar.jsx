import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useAuth } from "../hooks/useAuth"
import { Profile } from "./DashboardProfile"

export const Navbar = (props) => {

    const { user, login, logout } = useAuth()

    return (
        <>
            {user ? 'User is Logged in' : <button onClick={login}>Login</button>}
            <br />
            <Profile />
        </>
    )
}