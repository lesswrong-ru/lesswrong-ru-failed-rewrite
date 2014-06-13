var Page = require('./page');
var React = require('react');

module.exports = React.createClass({
    propTypes: {
        tab: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <title>LessWrong.ru - сообщество рационального мышления</title>
                    <link rel="stylesheet" href="css/main.css" />
                </head>
                <body>
                    <main>
                        <Page tab={this.props.tab} />
                    </main>
                    <script src="build/frontend.js"></script>
                </body>
            </html>
        );
    }
});
