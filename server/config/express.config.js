var express = require('express'),
	fs = require('fs');

module.exports = function() {

	var app = express();

	require('../routes/search.route')(app);

	return app;

};