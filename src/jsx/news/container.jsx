var React = require('react');
var ReactAsync = require('react-async');
var api = require(
    (typeof(window) === 'undefined')
    ? '../../api/server'
    : '../../api/client'
);

var Layout = require('../layout/column-with-sidebar');
var NewsSidebar = require('./sidebar');
var NewsFeed = require('./feed');


module.exports = React.createClass({
    mixins: [ReactAsync.Mixin],

    getInitialStateAsync: function (cb) {
        api.news(function (data) {
            cb(null, {
                'news': data
            });
        });
    },

    render: function () {
        var sidebar = <NewsSidebar />;
        return (
            <Layout sidebar={sidebar}>
                <NewsFeed news={this.state.news} />
            </Layout>
        );
    }
});
