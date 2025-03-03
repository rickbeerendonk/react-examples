/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';
import { flushSync } from 'react-dom';

interface ClickMeProps {}

interface ClickMeState {
  count: number;
}

class ClickMe extends Component<ClickMeProps, ClickMeState> {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Bind all non-react methods to this.
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Updates are batched for performance reasons.
    // Use ReactDOM.flushSync():
    flushSync(() => {
      this.setState({ count: this.state.count + 0.4 });
    });
    flushSync(() => {
      this.setState({ count: this.state.count + 0.6 });
    });
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        This link has been clicked {this.state.count} times
      </button>
    );
  }
}

export default ClickMe;
