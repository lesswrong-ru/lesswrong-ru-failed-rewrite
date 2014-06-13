var React = require('react');

module.exports = React.createClass({
    propTypes: {
        sidebar: React.PropTypes.component.isRequired
    },
    render: function () {
        return (
            <div className="column-with-sidebar">
                <aside className="column-with-sidebar__sidebar">
                    {this.props.sidebar}
                </aside>
                <div className="column-with-sidebar__main">
                    {this.props.children}
                </div>
            </div>
        );
    }
});
