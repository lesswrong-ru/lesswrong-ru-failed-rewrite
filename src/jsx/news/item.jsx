var React = require('react');
var Timestamp = require('../components/timestamp');

module.exports = React.createClass({
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
