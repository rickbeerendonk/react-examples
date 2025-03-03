/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/no-string-refs: off */

import { Component } from 'react';

class HelloWorld extends Component {
  componentDidMount() {
    this.refs.myH1.innerHTML = 'Hello <u>React</u>!!!';
  }
  render() {
    return <h1 ref="myH1">Hello World!</h1>;
  }
}

export default HelloWorld;
