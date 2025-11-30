import { useState } from "react"

const StudentForm = ({onAddHandler, inputRef}) => {
    // const [name, setName] = useState('')
    const [form, setForm] = useState({
        name: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        //Add the student into the list
        onAddHandler({
            id: Date.now(),
            name: form.name,
            email: `${form.name.toLowerCase()}@example.com`
        })
        setForm({
            name: ''
        })
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" placeholder="Enter Student Name" onChange={handleChange} value={form.name} ref={inputRef} />
            <input type="text" name="name" id="name" placeholder="Enter Student Name" onChange={handleChange} value={form.name} />
            <button>Add Student</button>
        </form>
    )
}

export default StudentForm