/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

var Greeting = React.createClass({
  displayName: 'Greeting',
  getDefaultProps: function () {
    return { name: 'World' };
  },
  render: function () {
    return React.createElement('h1', null, 'Hello ', this.props.name, '!');
  }
});

ReactDOM.render(
  React.createElement(Greeting),
  document.getElementById('app')
);