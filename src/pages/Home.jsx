import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    return (
        <>
            <p>Home Page</p>
            <p>Login in order to access the profile</p>
            <button onClick={() => localStorage.setItem('auth', true)}>Login</button>
            <button onClick={() => navigate('/about')}>Go to About Page</button>
        </>
    )
}

export default Home