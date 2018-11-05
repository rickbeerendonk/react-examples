/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

function Greeting(props) {
  return React.createElement('h1', null, 'Hello ', props.name, '!');
}

ReactDOM.render(
  React.createElement(Greeting, { name: 'World' }),
  document.getElementById('app')
);
