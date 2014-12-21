var ClickMe = React.createClass({
    getInitialState: function () {
        return {count: 0};
    },
    onClick: function (e) {
        this.setState({count: this.state.count + 1});
    },
    render: function () {
        return <a onClick={this.onClick}>
            {'This link has been clicked ' + this.state.count + ' times'}
            </a>;
    }
});