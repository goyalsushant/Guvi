import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import GetComponent from './components/GetComponent'
import PostComponent from './components/PostComponent'
import PutComponent from './components/PutComponent'
import PatchComponent from './components/PatchComponent'
import DeleteComponent from './components/DeleteComponent'

function App() {

  return (
    <>
      <h1>Axios Tutorial</h1>
      <GetComponent />
      <PostComponent />
      <PutComponent />
      <PatchComponent />
      <DeleteComponent />
    </>
  )
}

export default App
