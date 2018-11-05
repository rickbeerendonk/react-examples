/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';
import ReactDOM from 'react-dom';

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Bind all non-react methods to this.
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    // Force sync:
    ReactDOM.flushSync(() => {
      this.setState({ count: this.state.count + 1 });
    });

    if (this.props.onClick) {
      this.props.onClick();
    }
  }
  render() {
    /* eslint no-console:"off" */
    // Render will be called on every parent render!
    console.log('Child rendered: ' + Date());

    return (
      <a onClick={this.onClick}>
        <div>{`Parent count: ${this.props.count}`}</div>
        <div>{`Child count: ${this.state.count}`}</div>
      </a>
    );
  }
}
