/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

/* eslint no-console:"off" */

export default class Greeting extends React.Component {
  componentWillUnmount() {
    console.log('-- unmount --');
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}
