/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface ClickMeProps {}

interface ClickMeState {
  count: number;
}

class ClickMe extends React.Component<ClickMeProps, ClickMeState> {
  state: ClickMeState = { count: 0 };
  handleClick = () => {
    // Updates are batched for performance reasons.
    // Therefore this won't work:
    this.setState({ count: this.state.count + 0.4 });
    this.setState({ count: this.state.count + 0.6 });
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
