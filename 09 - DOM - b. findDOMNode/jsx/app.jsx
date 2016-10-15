/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/no-find-dom-node:"off" */

var HelloWorld = React.createClass({
  componentDidMount: function () {
    ReactDOM.findDOMNode(this).innerHTML = 'Hello <i>React</i>!!!';
  },
  render: function () {
    return (
      <h1>Hello World!</h1>
    );
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);