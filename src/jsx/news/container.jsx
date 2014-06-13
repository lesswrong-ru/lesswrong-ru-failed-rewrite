var React = require('react');

var Layout = require('../layout/column-with-sidebar');

var NewsSidebar = require('./sidebar');
var NewsFeed = require('./feed');

module.exports = React.createClass({
    render: function () {
        var sidebar = <NewsSidebar />;
        return (
            <Layout sidebar={sidebar}>
                <NewsFeed />
            </Layout>
        );
    }
});
