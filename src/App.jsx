import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MealDetails from './pages/MealDetails'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/meal/:id' element={<MealDetails />} />
      </Routes>
    </>
  )
}

export default App
