var http = require('http');
var fs = require('fs');


function renderHomePage(request,response){
    var homePageHtml = fs.readFileSync('homePage.html');
    response.writeHead(200,{'content-type':'text/html'});
        response.write(homePageHtml);
    response.end();
    }

function renderNoPage(request,response){
response.writeHead(404);
    response.end('404,page not found');
}



var server= http.createServer(function(request, response){
    if(request.url =='/'){
        renderHomePage(request, response);
    }else {
        renderNoPage(request, response);
    }
    console.log('this is a line to show that some came to the server.');
    response.end();
//    method createServer, takes two parameters a single call back
});
server.listen(8000);
console.log("our server is listening on port 8000.");