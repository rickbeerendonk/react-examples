/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/no-find-dom-node:"off" */

import { Component } from 'react';
import { findDOMNode } from 'react-dom';

class HelloWorld extends Component {
  componentDidMount() {
    findDOMNode(this).innerHTML = 'Hello <u>React</u>!!!';
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default HelloWorld;
