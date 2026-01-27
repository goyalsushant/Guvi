import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())  // Parsing of the JSON object in the request
app.use(express.urlencoded())  // parses the form data in the request
app.use(express.static('public'))
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET"
}))

// middleware 1
app.use((req, res, next) => {
    console.log('hello from middleware 1')
    next()
})

// route
app.get('/', (req, res) => {
    res.send('Hello from Express')
})

// middleware 2
app.use((req, res, next) => {
    console.log('hello from middleware 2')
    if(true) {
        res.status(401)
        res.send('Unauthorized')
    }
    next()
})

// route
app.get('/1', (req, res) => {
    res.send('Hello from Route after middleware')
})

app.listen(8000, () => {
    console.log('Server started')
})