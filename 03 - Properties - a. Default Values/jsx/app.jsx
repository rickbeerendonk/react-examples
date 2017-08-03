/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global createReactClass, React, ReactDOM */
/* eslint react/prop-types:"off" */

var Greeting = createReactClass({
  getDefaultProps: function () {
    return { name: 'World' };
  },
  render: function () {
    return (
      <h1>Hello {this.props.name}!</h1>
    );
  }
});

ReactDOM.render(
  <Greeting />,
  document.getElementById('app')
);