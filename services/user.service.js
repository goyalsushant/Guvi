// import User from "../models/user.model.js"

import User from "../models/User.js"

let users = []
let id = 1

console.log(users)

export const findAllUsers = async () => {
    const users = await User.find({})
    return users
}

export const addUser = async (data) => {
    // const user = new User(data.name, data.email, id++)
    // users.push(user)
    const user = await User.create(data)
    return user
}

export const getUserById = async (id) => {
    // const user = users.find(u => u.id === parseInt(id))
    // const user = await User.find({_id: id})
    const user = await User.findById(id)
    return user
}

export const removeUser = async (id) => {
    // users = users.filter(u => u.id !== parseInt(id))
    const user = await User.findByIdAndDelete(id)
    return
}

export const updateUserDetails = async (id, data) => {
    // const user = users.find(u => u.id === parseInt(id))
    const user = await User.findByIdAndUpdate(id, data, {new: true})

    if (!user) {
        res.status(404)
        res.json({ message: 'User Not Found' })
        return
    }

    // user.name = data.name ?? user.name
    // user.email = data.email ?? user.email

    return user
}