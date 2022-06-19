/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

/* eslint no-console:"off" */

export default class Child extends React.Component {
  componentWillUnmount() {
    console.log('-- unmount Child --');
  }
  render() {
    return <h1>Child</h1>;
  }
}
