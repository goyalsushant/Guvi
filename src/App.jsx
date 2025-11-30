import { useEffect, useReducer, useRef, useState } from 'react'
import './App.css'
import Stats from './components/Stats'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import { initialState, studentReducer } from './hooks/useStudentReducer'

/**
 * 1. Student Form
 * 2. Listing students
 * 3. Items
 * 4. Stats 
 */

function App() {

  // const [studentList, setStudentList] = useState([])
  const [loading, setLoading] = useState(true)

  const inputRef = useRef(null)
  const [state, dispatch] = useReducer(studentReducer, initialState)

  useEffect(() => {
    async function callApi() {

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        // setStudentList(data.slice(0, 5))
        dispatch({type: 'SET_API_DATA', payload: data.slice(0,5)})
        console.log(data)
      }
      catch (err) {
        console.log(err)
      }
      finally {
        setLoading(false)
      }

    }

    callApi()
    console.log(inputRef)
    inputRef.current.focus()
  }, [])

  const handleAddStudent = (student) => {
    dispatch({type: 'ADD_STUDENT', payload: student})
    // setStudentList([
    //   ...studentList,
    //   student
    // ])
  }

  const handleDelete = (id) => {
    console.log(id)
    dispatch({type: 'DELETE_STUDENT', payload: id})

    // setStudentList(
    //   studentList.filter((student) => student.id !== id)
    // )
  }

  return (
    <>
      <h1>Student Management Application</h1>
      <Stats count={state.students.length} />
      <StudentForm onAddHandler={handleAddStudent} inputRef={inputRef} />
      <StudentList studentList={state.students} deleteHandler={handleDelete} />
    </>
  )
}

export default App
