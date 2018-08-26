/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint no-console:"off" */
/* eslint react/prop-types:"off" */

import React from 'react';

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Bind all non-react methods to this.
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    // Batched:
    this.setState(
      prevState => ({ count: prevState.count + 0.5 }),
      () => console.log('child - first')
    );

    if (this.props.onClick) {
      this.props.onClick();
    }

    this.setState(
      prevState => ({ count: prevState.count + 0.5 }),
      () => console.log('child - second')
    );
  }
  render() {
    return (
      <a onClick={this.onClick}>
        <div>{`Parent count: ${this.props.count}`}</div>
        <div>{`Child count: ${this.state.count}`}</div>
      </a>
    );
  }
}
