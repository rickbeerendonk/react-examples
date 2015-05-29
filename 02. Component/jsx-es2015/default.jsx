class HelloReact extends React.Component {
    render() {
        return (
            <h1>Hello React!</h1>
        );
    }
};

React.render(
    <HelloReact />,
    document.getElementById('app')
);
