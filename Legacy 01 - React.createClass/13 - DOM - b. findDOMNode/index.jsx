/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global createReactClass, React, ReactDOM */
/* eslint react/no-find-dom-node:"off" */

var HelloWorld = createReactClass({
  componentDidMount: function() {
    ReactDOM.findDOMNode(this).innerHTML = 'Hello <u>React</u>!!!';
  },
  render: function() {
    return <h1>Hello World!</h1>;
  }
});

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
