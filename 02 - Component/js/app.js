/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

var Greeting = React.createClass({
  displayName: 'Greeting',
  render: function () {
    return React.createElement('h1', null, 'Hello World!');
  }
});

ReactDOM.render(
  React.createElement(Greeting),
  document.getElementById('app')
);