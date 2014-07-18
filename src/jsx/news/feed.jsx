var React = require('react');
var NewsFeedItem = require('./item');

module.exports = React.createClass({
    propTypes: {
        news: React.PropTypes.array.isRequired
    },
    render: function () {
        var i = 0;
        var items = this.props.news.map(function (item) {
            i++;
            return (
                <NewsFeedItem body={item.body} author={item.author} key={i} />
            );
        });
        return (
            <div className="news-feed">
                {items}
            </div>
        );
    }
});
