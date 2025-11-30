
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import DashboardAnalytics from './components/DashboardAnalytics'
import DashboardHome from './components/DashboardHome'
import User from './pages/User'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './components/Profile'

function App() {

  // localStorage.setItem('auth', true)

  return (
    <>
      <nav>
        <Link to={'/'}>Home</Link>|
        <Link to={'/about'}>About</Link>|
        <Link to={'/contact'}>Contact</Link>|
        <Link to={'/dashboard'}>Dashboard</Link>|
        <Link to={'/dashboard/analytics'}>Dashboard Analytics</Link>|
        <Link to={'/profile'}>Profile</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path='analytics' element={<DashboardAnalytics />} />
        </Route>
        <Route path='/user/:id' element={<User />} />
        <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
