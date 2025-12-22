import { useAuth } from "../hooks/useAuth"

export const Profile = () => {
    const { user, login, logout } = useAuth()

    return (
        <>
            {user ? 'User Profile found' : 'User not logged in'}
        </>
    )
}