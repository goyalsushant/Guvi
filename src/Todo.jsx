import { useEffect, useState } from "react"

const Todo = () => {

    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const addTodos = () => {
        setTodos(prev => [...prev, text])
        setText('')
    }

    useEffect(() => { 
        console.log('mounted')

        return ()=>{
            // clearInterval(interval)
            console.log('unmounted 1')
        }
    }, [])

    useEffect(()=>{
        console.log('updated')
    }, [todos, text])

    useEffect(()=>{
        // const interval = setInterval(()=>{
        //     console.log('interval added')
        // }, 2000)

        return ()=>{
            // clearInterval(interval)
            console.log('unmounted 2')
        }
    }, [])

    // useEffect(()=>{
    //     console.log('useEffect triggered')
    // })

    return (
        <>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
            <button onClick={addTodos}>Add Button</button>
            <ul>
                {todos?.map(todo => <li>{todo}</li>)}
            </ul>
        </>
    )
}

export default Todo