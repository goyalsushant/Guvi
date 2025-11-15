import { useState } from 'react'
import './App.css'
import ArrayComponent from './Array'
import Reduce from './Reduce'
import PushPop from './PushPop'
import SpliceSLice from './SpliceSlice'

// function Greeting(props) {
//   // props.age = 33
//   return (
//     <h1>Hello, {props.name}. Age is {props.age}</h1>
//   )
// }

function ChildComponent(props) {
  return <GrandChildComponent callback={props.onMessageHandler} name={props.name} age={props.age} />
}


function GrandChildComponent(props) {
  return <button onClick={() => props.callback(`Hello from ${props.name}. My age is ${props.age}`)}>Click Me!</button>
}

function App() {

  const handleMessages = (message) => {
    alert(message)
  }

  return (
    <>
      {/* <ChildComponent onMessageHandler={handleMessages} age={28} name={'ALice'} /> */}
      {/* <div>Hello World</div> */}
      {/* <Greeting age={25} />
      <Greeting age={27} />
      <Greeting name={'Jack'} age={35} />
      <Greeting name={'Drago'} age={29} /> */}
      <ArrayComponent id={1}/>
      {/* <Reduce /> */}
      {/* <PushPop /> */}
      {/* <SpliceSLice /> */}
    </>
  )
}

export default App
