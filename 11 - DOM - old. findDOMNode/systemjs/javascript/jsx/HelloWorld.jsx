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
    return <h1>Hello World!</h1>;
  }
}
