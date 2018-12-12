/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

class ClickMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Bind all non-react methods to this.
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Updates are batched for performance reasons.
    // Therefore a callback should be used:
    this.setState(state => ({ count: state.count + 0.4 }));
    this.setState(state => ({ count: state.count + 0.6 }));
  }
  render() {
    return (
      <a onClick={this.handleClick}>
        {`This link has been clicked ${this.state.count} times`}
      </a>
    );
  }
}

export default ClickMe;
