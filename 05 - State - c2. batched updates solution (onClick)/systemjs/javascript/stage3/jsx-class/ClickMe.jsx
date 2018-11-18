/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class ClickMe extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { count: 0 };
  onClick = () => {
    // Updates are batched for performance reasons.
    // Therefore this should be used:
    this.setState(state => ({ count: state.count + 0.4 }));
    this.setState(state => ({ count: state.count + 0.6 }));
  };

  render() {
    return (
      <a onClick={this.onClick}>
        {`This link has been clicked ${this.state.count} times`}
      </a>
    );
  }
}
