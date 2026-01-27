import express from 'express'

const app = express()

// include middlewares
app.use(express.json())

let users = []
let id = 1

// Get request to fetch all the users
app.get('/users', (req, res) => {
    console.log(req.query)
    res.status(200)
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id))

    if(!user) {
        res.status(404)
        res.json({message: "User not found"})
        return
    }

    res.json(user)
})

// Post request to add a user
app.post('/users', (req,res) => {
    const user = {
        id: id++,
        name: req.body.name,
        email: req.body.email
    }

    users.push(user)
    res.status(201)
    res.json(user)
})

// update the user object with new object
app.put("/users/:id", (req,res) => {
    console.log(typeof req.params.id)
    const user = users.find(u => u.id === parseInt(req.params.id)) 

    if(!user) {
        res.status(404)
        res.json({message: 'User Not Found'})
        return
    }

    user.name = req.body.name ?? user.name
    user.email = req.body.email ?? user.email

    res.json(user)
})

app.delete('/users/:id', (req,res) => {
    users.filter(u => u.id !== parseInt(req.params.id))
    res.status(204)
    res.send('User Deleted Successfully')
})

// Products Routes
/**
 * create
 * update
 * delete
 * read - pagination
 * read one product
 */

// Order Routes
/**
 * create
 * update
 * cancel
 * read an order
 * read all the orders
 */

// Admin Routes
/**
 * manage users
 * manage orders
 * manage products
 */

// Seller Routes
/**
 * create
 * update
 * delete
 * list all sellers
 * list specific seller
 */

app.listen(8000, ()=>{
    console.log('Server is listening on port 8000')
})