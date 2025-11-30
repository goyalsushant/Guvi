
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import { Route, Routes } from 'react-router-dom'
import DashboardHome from './pages/DashboradHome'
import DashboardLayout from './layouts/DashboardLayout'
import Posts from './pages/Posts'
import NewPost from './pages/NewPost'
import { postsLoader } from './helpers/postsLoader'
import { createPost } from './helpers/createPost'
import ErrorPage from './pages/ErrorPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route index element={<DashboardHome />} />
          <Route path='posts' element={<Posts />} loader={postsLoader}/>
          <Route path='posts/new' element={<NewPost />} action={createPost}/>
          <Route errorElement={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
