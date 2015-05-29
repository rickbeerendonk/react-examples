class HelloReact extends React.Component {
    onChange(e) {
        alert('Event handled. Target: ' + e.target);
    }
    render() {
        return <input onChange={this.onChange} value='Hello React!' />;
    }
};

React.render(
    <HelloReact />,
    document.getElementById('app')
);
