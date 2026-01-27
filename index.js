// This is the root file which will contain the meta of application
import express from 'express'
import userRoutes from './routes/user.routes.js'
import mongoose from 'mongoose'

const app = express()

await mongoose.connect('mongodb://127.0.0.1:27017/crud')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))

app.use(express.json())

app.use('/users', userRoutes)

app.listen(8000, () => {
    console.log('Server is listening on port 8000')
})