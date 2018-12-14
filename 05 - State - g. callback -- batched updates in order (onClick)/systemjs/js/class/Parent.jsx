/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint no-console:"off" */

import React from 'react';

import Child from './Child';

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Bind all non-react methods to this.
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Batched:
    this.setState(
      state => ({ count: state.count + 1 }),
      () => console.log('parent')
    );
  }
  render() {
    return <Child count={this.state.count} onClick={this.handleClick} />;
  }
}
