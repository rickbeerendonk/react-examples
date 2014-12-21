var HelloReact = React.createClass({
    render: function () {
        return (
            <h1>Hello React!</h1>
        );
    }
});

React.render(
    <HelloReact />,
    document.getElementById('app')
);