/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/no-find-dom-node:"off" */

class HelloWorld extends React.Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this).innerHTML = 'Hello <i>React</i>!!!';
  }
  render() {
    return React.createElement('h1', null, 'Hello World!');
  }
}

ReactDOM.render(
  React.createElement(HelloWorld),
  document.getElementById('app')
);