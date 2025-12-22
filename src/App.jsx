import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Profile } from './components/DashboardProfile'
import { Settings } from './components/Settings'
import { AuthProvider } from './store/AuthProvider'

function App() {

  const [theme, setTheme] = useState('light')

  return (
    <>
      <Navbar theme={theme} />
      <br />
      <Sidebar />
      <Settings theme={theme} setTheme={setTheme} />
    </>
  )
}

export default App
