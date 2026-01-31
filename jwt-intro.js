import dotenv from 'dotenv'
import express from 'express'
import jsonwebtoken from 'jsonwebtoken'

dotenv.config()

const app = express()

function signature() {
    const token = jsonwebtoken.sign(
        { id: 1, name: 'John' },
        process.env.JWT_SECRET,
        {expiresIn: '1h'}
    )
    console.log(token)
    return token
}

const token = signature()

function verify(token) {
    // const secret = 'hello'
    const isValid = jsonwebtoken.verify(token, process.env.JWT_SECRET)
    console.log(isValid)
}

verify(token)
// app.listen(process.env.PORT || 8000, () => {
//     console.log(`Server is running at ${process.env.PORT || 8000}`)
// })

// console.log('PORT ', process.env.PORT)
// console.log('AWS', process.env.AWS_SECRET)