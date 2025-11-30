import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import ErrorPage from "./pages/ErrorPage";
import DashboardHome from "./pages/DashboradHome";
import Posts from "./pages/Posts";
import NewPost from "./pages/NewPost";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Home/>
    },
    {
        path: '/login',
        element:<Login/>
    },
    {
        path: '/dashboard',
        element: (
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <DashboardHome />
            },
            {
                // index: true,
                path: "posts",
                element: <Posts />
            },
            {
                // index: true,
                path: "posts/new",
                element: <NewPost/>
            }
        ]
    }
])