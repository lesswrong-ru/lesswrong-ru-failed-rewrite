var React = require('react');
var HtmlPage = require('./html_page');

var pathname = window.location.pathname;

React.renderComponent(
    HtmlPage({ tab: pathname.substring(1) }),
    document
);
