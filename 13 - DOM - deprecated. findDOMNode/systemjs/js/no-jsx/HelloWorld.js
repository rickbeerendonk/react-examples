/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/no-find-dom-node:"off" */

import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this).innerHTML = 'Hello <u>React</u>!!!';
  }
  render() {
    return React.createElement('h1', null, 'Hello World!');
  }
}

export default HelloWorld;
