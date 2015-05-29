class ClickMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    onClick(e) {
        this.setState({count: this.state.count + 1});
    }
    render() {
        return (
            <a onClick={this.onClick.bind(this)}>
                {'This link has been clicked ' + this.state.count + ' times'}
            </a>
        );
    }
};

React.render(
    <ClickMe />,
    document.getElementById('app')
);
