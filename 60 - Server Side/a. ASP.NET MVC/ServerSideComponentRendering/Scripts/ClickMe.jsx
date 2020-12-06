/*! MEuropean Union Public License version 1.2!*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React */
/* eslint no-unused-vars: "off" */

class ClickMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({ count: state.count + 1 }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {'This button has been clicked ' + this.state.count + ' times'}
      </button>
    );
  }
}
