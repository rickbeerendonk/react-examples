/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const Greeting = props => {
  props = Object.assign({ name: 'World' }, props);
  return <h1>Hello {props.name}!</h1>;
};

ReactDOM.render(<Greeting />, document.getElementById('app'));
