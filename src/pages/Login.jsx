import { useNavigate } from "react-router-dom"
import { login } from "../auth"

const Login = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        login()
        navigate('/dashboard')
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login