/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import { Component } from 'react';

import Child from './Child.jsx';

export default class Parent extends Component {
  componentWillUnmount() {
    console.log('-- unmount Parent --');
  }
  render() {
    return (
      <>
        <h1>Parent</h1>
        <Child />
      </>
    );
  }
}
