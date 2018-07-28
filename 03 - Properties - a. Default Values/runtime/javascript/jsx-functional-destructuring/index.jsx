/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const Greeting = ({ name = 'World' }) => <h1>Hello {name}!</h1>;

ReactDOM.render(<Greeting />, document.getElementById('app'));
