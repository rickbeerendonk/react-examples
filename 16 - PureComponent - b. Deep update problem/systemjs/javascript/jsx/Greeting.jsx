/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off", no-console:"off" */

// Greeting is NOT a pure component:
const Greeting = ({ name }) => (name ? `Hello ${name}!` : null);

export default Greeting;
