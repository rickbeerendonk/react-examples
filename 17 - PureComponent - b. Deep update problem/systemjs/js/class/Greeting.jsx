/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", no-console:"off" */

// Greeting is NOT a pure component:
const Greeting = ({ name }) => (name ? `Hello ${name}!` : null);

export default Greeting;
