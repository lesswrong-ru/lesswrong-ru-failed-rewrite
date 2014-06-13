var React = require('react');

module.exports = React.createClass({
    render: function () {
        var rows = [];
        var addRow = function (l, r) {
            rows.push(
                <div className="two-column-grid__row">
                    {l}
                    {r}
                </div>
            );
        }

        var i = 0;
        var left;
        this.props.children.forEach(function (child) {
            i++;
            var cs = "two-column-grid__item";
            if (i % 2) {
                cs += " two-column-grid__item--left";
                left = (
                    <div className={cs}>
                        {child}
                    </div>
                );
            }
            else {
                cs += " two-column-grid__item--right";
                var right = (
                    <div className={cs}>
                        {child}
                    </div>
                );
                addRow(left, right);
                left = undefined;
            }
        });
        if (left) {
            addRow(left, undefined);
        }
        console.log(rows);
        return (
            <div className="two-column-grid">
                {rows}
            </div>
        );
    }
});
