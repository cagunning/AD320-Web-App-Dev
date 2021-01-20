const http = require('http');

const server =  http.createServer(function(req, res){
    if(req.url== "/users" && req.method === "GET"){
        res.writeHead(200);
        res.end('<html><body>joe, jim, sally</body></html>');

    }else if(req.method === "POST"){
        let body = "";
        req.on('data', function(data){
            
            body += data;
        })

        req.on('end', function() {
            console.log('Body: ' + body)
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(`<html><body>${body}</body></html>`)
          })

    }else if(req.url == '/data'){// this is to show the json response
        res.writeHead(200, {'Contetn-Type': 'application/json'});
        res.write(JSON.stringify({ message: "Hello, this is your json response!!"}));
        res.end();

    }else{
        //setting content type as json
    //saying requests are allowed to com to us from any browser
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.writeHead(200); // status code http 200 / Ok
    
    let dataObj = {"id":123, "name":"Christian", "email":"coolguy100@school.net"};

    let data = JSON.stringify(dataObj);
    //this is what we are going to send to the client
    res.end(data);

    }
   
});


server.listen(1234, function(){
    console.log('Hello here we go');
})