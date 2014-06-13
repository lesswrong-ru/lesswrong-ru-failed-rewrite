var React = require('react');
var NewsFeedItem = require('./item');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="news-feed">
                <NewsFeedItem body="Когда-нибудь тут будет лента новостей." author="berekuk" />
                <NewsFeedItem body="А может быть и нет." author="berekuk" />
            </div>
        );
    }
});
