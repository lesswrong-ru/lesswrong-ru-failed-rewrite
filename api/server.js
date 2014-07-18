var fs = require('fs');
var file = __dirname + '/../data/news.json';

module.exports.news = function(cb) {
    console.log('api.server.news');
    fs.readFile(file, 'utf8', function(err, data) {
        cb(JSON.parse(data));
    });
};
