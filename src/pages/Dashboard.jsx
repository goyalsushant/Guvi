import { Outlet } from "react-router-dom"

const Dashboard = () => {
    return(
        <div>
            Dashboard Layout
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Dashboard