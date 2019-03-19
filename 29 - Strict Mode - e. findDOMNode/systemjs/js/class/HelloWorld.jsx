/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* eslint react/no-find-dom-node:"off" */

import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this).innerHTML = 'Hello <i>React</i>!!!';
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default HelloWorld;
