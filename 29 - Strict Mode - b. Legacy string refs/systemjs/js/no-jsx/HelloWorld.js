/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/no-string-refs: off */

import React from 'react';

class HelloWorld extends React.Component {
  componentDidMount() {
    this.refs.myH1.innerHTML = 'Hello <i>React</i>!!!';
  }
  render() {
    return React.createElement('h1', { ref: 'myH1' }, 'Hello World!');
  }
}

export default HelloWorld;
