var path = require('path');

module.exports = function(req, res) {

	res.render(path.resolve('public/index.ejs'));

};