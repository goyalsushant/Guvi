import { useState } from "react"

const FormsExample = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        role: 'user',
        agree: false
    })

    const [error, setError] = useState({})

    const validate = (field, value) => {
        const errors = { ...error }
        if (field === 'name') {
            if (value.trim().length < 3) {
                errors.name = 'Name must be at least 3 characters'
            }
            else {
                delete errors.name
            }
        }

        setError(errors)
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        const newValue = type === 'checkbox' ? checked : value

        setFormState({
            ...formState,
            [name]: newValue,
        })

        validate(name, newValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.keys(error).length > 0) {
            alert('There are errors in the form details')
            return
        }

        alert('Form Submitted successfully')
        console.log(formState)
    }

    const isDisabled = Object.keys(error).length > 0 || !formState.name || !formState.email || !formState.password || !formState.agree

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registration Form</h2>
            <input type="text" name="name" id="name" placeholder="Name" onChange={handleChange} value={formState.name} />
            <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} value={formState.email} />
            <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} value={formState.password} />
            <input type="number" name="age" id="age" placeholder="Age" onChange={handleChange} value={formState.age} />
            <select name="role" id="role" value={formState.role} onChange={handleChange}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>

            <label><input type="checkbox" name="agree" id="agree" checked={formState.agree} onChange={handleChange} />
                I accept the terms
            </label>

            <button type="submit" disabled={isDisabled}>Submit</button>

        </form>
    )

}

export default FormsExample