class NameInput extends React.Component {
    render() {
        return (
            <input onChange={this.props.onChange.bind(this)} value={this.props.name} />
            );
    }
};

class Hello extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.name}!</h1>
            );
    }
};


class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'React'};
    }
    onChange(e) {
        this.setState({name: e.target.value});
    }
    render() {
        return (
            <div>
                <NameInput onChange={this.onChange.bind(this)} name={this.state.name} />
                <Hello name={this.state.name} />                
            </div>
        );
    }
};

React.render(
    <HelloMessage />,
    document.getElementById('app')
);
