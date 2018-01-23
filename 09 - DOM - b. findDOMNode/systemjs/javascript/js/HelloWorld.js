/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/no-find-dom-node:"off" */

import React from 'react';
import ReactDOM from 'react-dom';

export default class HelloWorld extends React.Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this).innerHTML = 'Hello <i>React</i>!!!';
  }
  render() {
    return React.createElement('h1', null, 'Hello World!');
  }
}
