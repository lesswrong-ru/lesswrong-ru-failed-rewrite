var React = require('react');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="content-card">
                {this.props.children}
            </div>
        );
    }
});
