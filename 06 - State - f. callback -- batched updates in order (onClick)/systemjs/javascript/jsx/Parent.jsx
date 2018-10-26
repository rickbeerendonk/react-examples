/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint no-console:"off" */
/* eslint react/prop-types:"off" */

import React from 'react';

import Child from './Child';

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Bind all non-react methods to this.
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    // Batched:
    this.setState(
      state => ({ count: state.count + 1 }),
      () => console.log('parent')
    );
  }
  render() {
    return <Child count={this.state.count} onClick={this.onClick} />;
  }
}
