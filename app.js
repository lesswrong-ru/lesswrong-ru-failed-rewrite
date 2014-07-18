var express = require('express');
var React = require('react');
var ReactAsync = require('react-async');
var HtmlPage = require('./js/html_page');

var api = require('./api/server');

var app = express();

var handler = function(req, res) {
    var page = HtmlPage({
        tab: req.url.substring(1)
    });
    ReactAsync.renderComponentToStringWithAsyncState(
        page,
        function (err, markup, data) {
            console.log(err);
            res.send(markup, data, ['build/frontend.js']);
        }
    );
};
['', 'news', 'content', 'community'].forEach(function (page) {
    app.get('/' + page, handler);
});

app.get('/api/news', function(req, res) {
    api.news(function(data) {
        res.send(data);
    });
});

['css', 'build'].forEach(function (dir) {
    app.use('/' + dir, express.static(__dirname + '/' + dir));
});

var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});
