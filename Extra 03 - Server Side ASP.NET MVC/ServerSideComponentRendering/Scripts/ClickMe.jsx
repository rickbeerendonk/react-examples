/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

class ClickMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    onClick() {
        this.setState(prevState => ({count: prevState.count + 1}));
    }
    render() {
        return (
            <a onClick={this.onClick.bind(this)}>
                {'This link has been clicked ' + this.state.count + ' times'}
            </a>
        );
    }
};