/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

export default class HelloWorld extends React.Component {
  componentDidMount() {
    this.myH1.innerHTML = 'Hello <i>React</i>!!!';
  }
  render() {
    return React.createElement('h1', { ref: ref => this.myH1 = ref }, 'Hello World!');
  }
}
