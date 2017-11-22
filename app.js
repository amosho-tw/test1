var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {
		'Context-Type' : 'text/plain'
	}); 
	
	
	res.end('test123');
	console.info('receive request for ' + req.url);
});

server.listen(3000);

console.info('server running at localhost:3000');