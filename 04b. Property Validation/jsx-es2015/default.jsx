class HelloMessage extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.name}!</h1>
        );
    }
};
HelloMessage.propTypes = { name: React.PropTypes.string.isRequired };

React.render(
    <HelloMessage name="React" />,
    document.getElementById('app')
);
