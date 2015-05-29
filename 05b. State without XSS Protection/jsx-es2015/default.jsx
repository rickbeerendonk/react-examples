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
                <input onChange={this.onChange.bind(this)} value={this.state.name} />
                <h1>Hello <span dangerouslySetInnerHTML={{__html: this.state.name}} />!</h1>
            </div>
        );
    }
};

React.render(
    <HelloMessage />,
    document.getElementById('app')
);
