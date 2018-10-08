/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const Greeting = props => <h1>Hello {props.name}!</h1>;

ReactDOM.render(<Greeting name="World" />, document.getElementById('app'));
