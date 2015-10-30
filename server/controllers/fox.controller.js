var request = require('request'),
	cheerio = require('cheerio'),
	path = require('path');

exports.render = function(req, res) {

	var search = req.params.search;	

	var respond = res;

	request('http://www.foxnews.com/', function(err, res, body) {

			var cheerioLoad = function(body) {
				return cheerio.load(body);
			};

			if(!err && res.statusCode === 200) {

				var stories = [];

				var $ = cheerioLoad(body);

				var featuredTitle = $('h1');
				var mainTitle = $('a');

				var returnStories = function(tag) {

					 return tag.html().toString().toLowerCase().indexOf(search) > -1;

				};

				mainTitle.each(function(i, elm) {

					if(returnStories($(this))) {
						var duplicate = false;

						for (var x = 0; x < stories.length; x++) {
							if ( $(this).text().toLowerCase() === stories[x].title.toLowerCase() ) {
								duplicate = true;
							}
						}
						if (!duplicate && $(this).attr('href').indexOf('http') > -1) {
							stories.push({
								"title": $(this).text(),
								"articleLink": $(this).attr('href')
							});
						}
					}

				});
				
			}

			respond.render(path.resolve('public/search.ejs'), {
				news: stories
			});
	});

};