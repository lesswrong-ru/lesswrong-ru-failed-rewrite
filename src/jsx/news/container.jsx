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
                    Hello3
                </div>
                <footer className="news-item__footer">
                    <span className="news-item__timestamp">
                        <Timestamp ts={this.props.ts} />
                    </span>
                </footer>
            </article>
        );
    }
});

NewsFeed = React.createClass({
    render: function () {
        return (
            <div className="news-feed">
                <NewsFeedItem />
                <NewsFeedItem />
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
