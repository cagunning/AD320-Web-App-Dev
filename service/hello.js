const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

//Create HTTP SERVER
const server = http.createServer((req, res) =>{
    // set the response HTTP header with HTTP status and content
    res.writeHead(200, {'Content-Type': 'text/plain'});

    //send response body "Hello World"
    res.end('Hello World can i alter this\n');


})

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
})