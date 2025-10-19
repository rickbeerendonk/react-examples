/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", no-console:"off" */

// Greeting is NOT a memo component:
function Greeting({ name }) {
  return name ? `Hello ${name}!` : null;
}

export default Greeting;
