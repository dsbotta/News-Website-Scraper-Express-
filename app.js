var express = require('./server/config/express.config');

var app = express().listen(8080, function() {
	console.log('Listening at http://localhost:8080');
});