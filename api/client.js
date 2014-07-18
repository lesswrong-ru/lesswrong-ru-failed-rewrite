var superagent = require('superagent');

module.exports.news = function(cb) {
    console.log('api.client.news');
    superagent
        .get('/data/news.json')
        .end(function (res) {
            console.log('fetched, res.error: ' + JSON.stringify(res.error));
            cb(res.body);
        });
};
