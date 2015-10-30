var express = require('express'),
	fs = require('fs');

module.exports = function() {

	var app = express();

	app.set('view engine', 'ejs');
	app.set('views', '../public');
	//app.engine('html', require('ejs').renderFile);

	require('../routes/search.route')(app);
	require('../routes/index.route')(app);

	app.use(express.static('../public'));

	return app;

};