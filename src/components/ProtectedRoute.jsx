import { Navigate } from "react-router-dom"
import { isAuthenticated } from "../auth"

const ProtectedRoute = ({children}) => {
    console.log(localStorage.getItem('auth'))
    if(!isAuthenticated()) {
        return <Navigate to={'/login'} replace />
    }

    return children
}

export default ProtectedRoute