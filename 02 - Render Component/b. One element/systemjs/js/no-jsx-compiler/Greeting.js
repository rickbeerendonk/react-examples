/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

// Added by the compiler (user doesn't need to add this):
import jsx from 'react/jsx-runtime';
// >>> No React import needed anymore <<<

function Greeting() {
  // User uses JSX, compiler generates something like this:
  return jsx.jsxDEV('h1', { children: 'Hello World!' });
}

export default Greeting;
