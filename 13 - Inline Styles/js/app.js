/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

var Greeting = React.createClass({
  displayName: 'Greeting',
  render: function () {
    return React.createElement('h1', { style: styles.header }, 'Hello World!');
  }
});

var styles = {
  header: {
    background: '#444',
    color: 'orchid',
    fontStyle: 'italic',  // font-style in CSS
    marginTop: '75px',  //margin-top in CSS
  }
};

ReactDOM.render(
  React.createElement(Greeting),
  document.getElementById('app')
);
