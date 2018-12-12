/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global React, ReactDOM */

class ClickMe extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { count: 0 };
  handleClick = () => {
    // Updates are batched for performance reasons.
    // Therefore a callback should be used:
    this.setState(state => ({ count: state.count + 0.4 }));
    this.setState(state => ({ count: state.count + 0.6 }));
  };

  render() {
    return (
      <a onClick={this.handleClick}>
        {`This link has been clicked ${this.state.count} times`}
      </a>
    );
  }
}

ReactDOM.render(<ClickMe />, document.getElementById('app'));
