var http = require('http'),
	url = require('url'),
	fs = require('fs');

http.createServer(function(req, res) {

	res.writeHead(200, { 'Content-Type': 'text-plain'});
	res.write('<h1>Lab2 - Simple Calculator</h1>');
	res.write('<h2>Daniel Masci - 200299037</h2>');

	var queryString = url.parse(req.url, true).query,
		method = queryString.method,
		x = parseFloat(queryString.x),
		y = parseFloat(queryString.y),
		result;

	if (method == 'add') {
		result = x + y;
		res.write(x + ' + ' + y + ' = ' + result);
	}
	else if (method == 'subtract') {
		result = x-y;
		res.write(x + ' - ' + y + ' = ' + result);
	}
	else if (method == 'multiply') {
		result = x*y;
		res.write(x + ' * ' + y + ' = ' + result);
	}
	else if (method == 'divide') {
		result = x/y;
		res.write(x + ' / ' + y + ' = ' + result);
	}
	else {
		res.write('This method does not exist. Please check your URL and try agian')
	}

	res.end();
}).listen(3000);