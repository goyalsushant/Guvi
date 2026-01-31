import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/user.routes.js'
import dashboardRoutes from './routes/dashboard.route.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/users', userRoutes)
app.use('/dashboard', dashboardRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`)
})