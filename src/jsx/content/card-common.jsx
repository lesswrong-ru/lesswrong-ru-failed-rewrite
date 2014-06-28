var React = require('react');

module.exports = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (
            <article className="content-card-common">
                <header className="content-card-common__header">
                    {this.props.title}
                </header>
                <div className="content-card-common__body">
                    {this.props.children}
                </div>
                <footer className="content-card-common__footer">
                    <a href={"/content/" + this.props.id}>
                        еще
                    </a>
                </footer>
            </article>
        );
    }
});
