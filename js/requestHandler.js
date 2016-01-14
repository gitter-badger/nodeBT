var debug = require('debug')('http');

exports.onRequest = function (request, response) {

    // only if defined
    if (request.headers.referer) {
		var endpoint = request.headers.referer.slice(request.headers.referer.lastIndexOf("/"), request.headers.referer.lenght);
	    debug("http request: " + endpoint);
    };

    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/html
    response.writeHead(200, {'Content-Type': 'text/html'});
   
    // Send the response body as "Hello World"
    response.end('Hello World\n');
};