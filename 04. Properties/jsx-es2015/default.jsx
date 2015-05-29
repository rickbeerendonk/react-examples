class HelloMessage extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.name}!</h1>
        );
    }
};

React.render(
    <HelloMessage name="React" />,
    document.getElementById('app')
);
