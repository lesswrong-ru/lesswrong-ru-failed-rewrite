var express = require('express');
var React = require('react');
var HtmlPage = require('./js/html_page');
var fs = require('fs');

var html_header = fs.readFileSync('./index.html', {encoding: 'utf8'});

var app = express();

var handler = function(req, res) {
    res.send(
        React.renderComponentToString(
            HtmlPage({
                tab: req.url.substring(1)
            })
        )
    );
};
['', 'news', 'content', 'community'].forEach(function (page) {
    app.get('/' + page, handler);
});

['css', 'build'].forEach(function (dir) {
    app.use('/' + dir, express.static(__dirname + '/' + dir));
});

var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});
