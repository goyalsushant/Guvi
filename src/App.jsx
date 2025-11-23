import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Users from './Users'
import Forms from './Forms'
import FormsExample from './FormsExample'
import Callback from './Callback'
import MemoizeFunction from './MemoizeFunction'

function App() {
  const [count, setCount] = useState(0)

  // count=5

  const handleClick = () => {
    // console.log('clicked')
    // setCount((count) => count + 1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    setCount(count => count + 1)
    // setCount(count => count+1)
  }

  useEffect(() => {
    // setCount(count+1)
  }, [count])

  // const count = 0
  return (
    <>
      {/* <div> */}
      {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <Todo /> */}
      {/* <Users /> */}
      {/* <Forms /> */}
      {/* <FormsExample /> */}
      {/* <Callback /> */}
      <MemoizeFunction />
    </>
  )
}

export default App
