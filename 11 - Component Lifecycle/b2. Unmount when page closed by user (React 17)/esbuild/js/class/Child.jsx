/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

/* eslint no-console:"off" */

export default class Child extends Component {
  componentWillUnmount() {
    console.log('-- unmount Child --');
  }
  render() {
    return <h1>Child</h1>;
  }
}
