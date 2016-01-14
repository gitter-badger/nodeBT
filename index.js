var http = require("http");
var debug = require('debug')('debug');

function onRequest (request, response) {

    // DEBUG
    debug("http request");

    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/html
    response.writeHead(200, {'Content-Type': 'text/html'});
   
    // Send the response body as "Hello World"
    response.end('Hello World\n');
}

var server = http.createServer(onRequest);

// Console will print the message
console.log('This in NodeBT.');
debug("this is debug mode");
console.log('Starting server...');
server.listen(8081, function() {
	console.log('Server running at http://127.0.0.1:8081/');
});