/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class ClickMe extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-instance_class_fields
  state = { count: 0 };
  handleClick = () => {
    // Updates are batched for performance reasons.
    // Therefore a callback should be used:
    this.setState(state => ({ count: state.count + 0.4 }));
    this.setState(state => ({ count: state.count + 0.6 }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        This link has been clicked {this.state.count} times
      </button>
    );
  }
}

export default ClickMe;
