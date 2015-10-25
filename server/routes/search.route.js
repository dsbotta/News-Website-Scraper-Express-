module.exports = function(app) {

	var foxNews = require('../controllers/fox.controller');

	app.get('/:search', foxNews.render);

};