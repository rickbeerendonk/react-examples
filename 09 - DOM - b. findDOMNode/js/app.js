/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/no-find-dom-node:"off" */

var HelloWorld = React.createClass({
  displayName: 'HelloWorld',
  componentDidMount: function () {
    ReactDOM.findDOMNode(this).innerHTML = 'Hello <i>React</i>!!!';
  },
  render: function () {
    return React.createElement('h1', null, 'Hello World!');
  }
});

ReactDOM.render(
  React.createElement(HelloWorld),
  document.getElementById('app')
);