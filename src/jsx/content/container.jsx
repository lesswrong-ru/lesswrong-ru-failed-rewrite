var React = require('react');

var Layout = require('../layout/two-column-grid');
var Card = require('./card');

module.exports = React.createClass({
    render: function () {
        return (
            <Layout>
                <Card>hello1</Card>
                <Card>hello2</Card>
                <Card>hello3</Card>
                <Card>hello4</Card>
                <Card>hello5</Card>
            </Layout>
        );
    }
});
