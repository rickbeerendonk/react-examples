/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global React, ReactDOM */

class ClickMe extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { count: 0 };
  onClick = () => {
    // Updates are batched for performance reasons.
    // Therefore this should be used:
    this.setState(prevState => ({ count: prevState.count + 0.5 }));
    this.setState(prevState => ({ count: prevState.count + 0.5 }));
  };

  render() {
    return (
      <a onClick={this.onClick}>
        {`This link has been clicked ${this.state.count} times`}
      </a>
    );
  }
}

ReactDOM.render(<ClickMe />, document.getElementById('app'));
