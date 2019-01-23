/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface IClickMeProps {}

interface IClickMeState {
  count: number;
}

class ClickMe extends React.Component<IClickMeProps, IClickMeState> {
  state: IClickMeState = { count: 0 };
  handleClick = () => {
    // Updates are batched for performance reasons.
    // Therefore a callback should be used:
    this.setState(state => ({ count: state.count + 0.4 }));
    this.setState(state => ({ count: state.count + 0.6 }));
  };
  render() {
    return (
      <a onClick={this.handleClick}>
        This link has been clicked {this.state.count} times
      </a>
    );
  }
}

export default ClickMe;
