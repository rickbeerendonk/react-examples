/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';
import ReactDOM from 'react-dom';

export default class ClickMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Bind all non-react methods to this.
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    // Updates are batched for performance reasons.
    // Use ReactDOM.flushSync():
    ReactDOM.flushSync(() => {
      this.setState({ count: this.state.count + 0.5 });
    });
    ReactDOM.flushSync(() => {
      this.setState({ count: this.state.count + 0.5 });
    });
  }
  render() {
    return (
      <a onClick={this.onClick}>
        {`This link has been clicked ${this.state.count} times`}
      </a>
    );
  }
}
