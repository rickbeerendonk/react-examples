class HelloMessage extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.name}!</h1>
        );
    }
};
HelloMessage.defaultProps = { name: "React" };

React.render(
    <HelloMessage />,
    document.getElementById('app')
);
