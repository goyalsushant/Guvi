import { useState } from 'react'
import './App.css'

// function Greeting(props) {
//   // props.age = 33
//   return (
//     <h1>Hello, {props.name}. Age is {props.age}</h1>
//   )
// }

function ChildComponent(props) {
  return <GrandChildComponent callback={props.onMessageHandler  } name={props.name}/>
}


function GrandChildComponent(props) {
  return <button onClick={() => props.callback(`Hello from ${props.name}`)}>Click Me!</button>
}

function App() {

  const handleMessages = (message) => {
    alert(message)
  }

  return (
    <>
      <ChildComponent onMessageHandler={handleMessages} age={25} name={'ALice'} />
      {/* <div>Hello World</div> */}
      {/* <Greeting age={25} />
      <Greeting age={27} />
      <Greeting name={'Jack'} age={35} />
      <Greeting name={'Drago'} age={29} /> */}
    </>
  )
}

export default App
