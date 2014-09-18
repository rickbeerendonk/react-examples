/** @jsx React.DOM */

var HelloReact = React.createClass({
    render: function () {
        return (
            <h1>Hello React!</h1>
        );
    }
});

React.renderComponent(
    <HelloReact />,
    document.getElementById('app')
);