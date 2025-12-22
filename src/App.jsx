// import './App.css'
import Products from './components/Products'
import Header from './components/Header'
import Cart from './components/Cart'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>

        <nav>
          <Link to={'/'}>Products</Link> {" "}
          <Link to={'/cart'}>Cart</Link>
        </nav>

        <Header />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
