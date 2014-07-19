var React = require('react');
var moment = require('moment');
moment.lang('ru');

module.exports = React.createClass({
    propTypes: {
        ts: React.PropTypes.number.isRequired
    },
    render: function () {
        return (
            <span>
                {moment.unix(this.props.ts).fromNow()}
            </span>
        );
    }
});
