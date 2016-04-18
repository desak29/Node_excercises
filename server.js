var http = require('http');
console.log(http);
var server= http.createServer(function(request, response){

    response.writeHead(200,{'content-type':'text/plain'});
    response.write('hello, world');
    response.end();
//    method createServer, takes two parameters a single call back
});
server.listen(8000);
console.log("our server is listening on port 8000")