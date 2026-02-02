import { addUser, findAllUsers, getUserById, removeUser, updateUserDetails } from "../services/user.service.js"

export const getAllUsers = async (req, res) => {
    const users = await findAllUsers()
    console.log(users)

    res.json(users)
    res.status(200)
}

export const getUserByDetail = async (req, res) => {
    const user = await getUserById(req.params.id)
    if (!user) {
        res.status(404)
        res.json({ message: 'User Not Found' })
    }
    res.json(user)
    res.status(200)
}

export const createUser = async (req, res) => {
    const user = await addUser(req.body)
    res.status(201)
    res.json(user)
}

export const deleteUser = async (req, res) => {
    await removeUser(req.params.id)
    res.status(204)
    res.send('User Deleted')
}

export const updateUser = async (req, res) => {
    const user = await updateUserDetails(req.params.id, req.body)
    res.json(user)
}