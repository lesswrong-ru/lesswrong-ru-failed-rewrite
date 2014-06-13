var React = require('react');

var sitemap = {
    "news": {
        "title": "Новости",
    },
    "content": {
        "title": "Материалы",
    },
    "community": {
        "title": "Сообщество",
    }
};

var TopMenuItem = React.createClass({
    propTypes: {
        key: React.PropTypes.string.isRequired,
        selected: React.PropTypes.bool
    },
    render: function () {
        var cs = "top-menu__item";
        if (this.props.selected) {
            cs += " top-menu__item_selected";
        }
        var link = "/" + this.props.key;
        var title = sitemap[this.props.key].title;
        return (
            <li className={cs}>
                <a href={link}>
                    {title}
                </a>
            </li>
        );
    }
});

var TopMenu = React.createClass({
    propTypes: {
        selected: React.PropTypes.string
    },
    render: function () {
        var items = [];
        ["news", "content", "community"].forEach(function(key) {
            items.push(
                <TopMenuItem key={key} selected={key == this.props.selected} />
            );
        }.bind(this));
        return (
            <nav className="top-menu">
                <ul>
                    {items}
                </ul>
            </nav>
        );
    }
});

module.exports = TopMenu;
