/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import Child from './Child';

/* eslint no-console:"off" */

export default class Parent extends React.Component {
  componentWillUnmount() {
    console.log('-- unmount Parent --');
  }
  render() {
    return (
      <React.Fragment>
        <h1>Parent</h1>
        <Child />
      </React.Fragment>
    );
  }
}
