import http from 'http'

const server = http.createServer((req,res) => {
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end('Hello from HTTP module')

    if(req.method == 'GET' && req.url=='/') {
        // Perform something
    }

    if(req.method == 'POST' && req.url=='/profile') {
        // Perform something
    }
})

server.listen(8000, () => {
    console.log('Server is running at port 8000')
})
