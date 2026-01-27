import express from 'express'

const app = express()

app.get('/', (request, response) => {
    console.log(request.method)
    console.log(request.params)
    console.log(request.query)
    response.status(200)
    response.send('Hello World')
})

// /test/:id?filterType=desc&filterCriteria=price

app.get('/test/:id', (request, response) => {
    console.log(request.method)
    console.log(request.params.id)
    console.log(request.query)
    console.log(request.headers)

    // response.status(204)
    // response.send('Hello World')
    // if(data available in cache) res.status(304) res.send()/ res.json()
    response.json({
        data: 'Some value',
        key1: 'Data 1'
    })
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000')
})