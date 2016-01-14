var http = require("http");
var requestHandler = require("./js/requestHandler");
var debug = require('debug')('core');

var server = http.createServer(requestHandler.onRequest);

// Console will print the message
console.log('This in NodeBT.');
debug("this is debug mode");
console.log('Starting server...');
server.listen(8081, function() {
	console.log('Server running at http://127.0.0.1:8081/');
});