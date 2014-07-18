var React = require('react');

var TopHeader = require('./top/header');
var TopMenu = require('./top/menu');
var NewsContainer = require('./news/container');
var ContentContainer = require('./content/container');

var TODO = React.createClass({
    render: function () {
        return <p>TODO</p>;
    }
});

var Page = React.createClass({
    propTypes: {
        tab: React.PropTypes.string.isRequired
    },
    render: function () {
        var content;
        console.log(this.props.tab);
        if (this.props.tab == "news") {
            content = <NewsContainer />;
        }
        else if (this.props.tab == "content") {
            content = <ContentContainer />;
        }
        else if (this.props.tab == "community") {
            content = <TODO />;
        }
        else {
            content = <div>404.</div>; // should never happen
        }

        return (
            <div>
                <TopHeader />
                <TopMenu selected={this.props.tab}/>
                {content}
            </div>
        );
    }
});

module.exports = Page;
