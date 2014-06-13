var React = require('react');

module.exports = React.createClass({
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
