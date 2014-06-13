var React = require('react');
var Layout = require('../layout/column-with-sidebar');
var Timestamp = require('../components/timestamp');

NewsSidebar = React.createClass({
    proposeNews: function () {
        window.alert("not implemented");
    },
    render: function () {
        return (
            <div className="news-sidebar">
                <a href="#" onClick={this.proposeNews}>
                    Добавить новость
                </a>
            </div>
        );
    }
});

NewsFeedItem = React.createClass({
    propTypes: {
        body: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        ts: React.PropTypes.number.isRequired
    },
    render: function () {
        return (
            <article className="news-item">
                <div className="news-item__body">
                    {this.props.body}
                </div>
                <footer className="news-item__footer">
                    <a href={"/user/" + this.props.author}>
                        {this.props.author}
                    </a>
                    {', '}
                    <Timestamp ts={this.props.ts} />
                </footer>
            </article>
        );
    }
});

NewsFeed = React.createClass({
    render: function () {
        return (
            <div className="news-feed">
                <NewsFeedItem body="Когда-нибудь тут будет лента новостей." author="berekuk" />
                <NewsFeedItem body="А может быть и нет." author="berekuk" />
            </div>
        );
    }
});

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
