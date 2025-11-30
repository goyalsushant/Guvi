import { Link, Outlet } from "react-router-dom"
import { logout } from "../auth"

const DashboardLayout  = () => {
    return (
        <div>
            <nav>
                <Link to="home">Home</Link>
                <Link to="posts">Posts</Link>
                <button onClick={logout}>Logout</button>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardLayout