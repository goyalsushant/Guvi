import { useState } from "react"

const Forms = () => {

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Form Submitted')
        console.log(formState)
    }

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} method="POST">
                <input type="text" name="name" id="name" placeholder="Name" onChange={handleChange} value={formState.name} />
                <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} value={formState.email} />
                <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} value={formState.password} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Forms