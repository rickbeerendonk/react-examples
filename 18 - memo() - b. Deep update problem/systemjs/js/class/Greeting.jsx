/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

// Greeting is NOT a memo component:
function Greeting({ name }) {
  return name ? `Hello ${name}!` : null;
}

export default Greeting;
