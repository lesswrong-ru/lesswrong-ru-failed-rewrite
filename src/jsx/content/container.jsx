var React = require('react');

var Layout = require('../layout/two-column-grid');
var Card = require('./card');
var CardCommon = require('./card-common');

module.exports = React.createClass({
    render: function () {
        return (
            <Layout>
                <Card>
                    <CardCommon title="Цепочки" id="sequences">
                        привет
                    </CardCommon>
                </Card>
                <Card>
                    <CardCommon title="Наши тексты" id="local">
                        единороги, василиски, extended mind
                    </CardCommon>
                </Card>
                <Card>
                    <CardCommon title="Видео со встреч" id="meetup-video">
                        embed-ы с youtube
                    </CardCommon>
                </Card>
            </Layout>
        );
    }
});
