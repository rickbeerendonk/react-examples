/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint no-console:"off" */

import React from 'react';

import Child from './Child';

class Parent extends React.Component {
  state = { count: 0 };
  handleClick = () => {
    // Batched:
    this.setState(
      state => ({ count: state.count + 1 }),
      () => console.log('parent')
    );
  };

  render() {
    return <Child count={this.state.count} onClick={this.handleClick} />;
  }
}

export default Parent;
