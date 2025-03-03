/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/no-string-refs: off */

import { Component, createElement } from 'react';

class HelloWorld extends Component {
  componentDidMount() {
    this.refs.myH1.innerHTML = 'Hello <u>React</u>!!!';
  }
  render() {
    return createElement('h1', { ref: 'myH1' }, 'Hello World!');
  }
}

export default HelloWorld;
