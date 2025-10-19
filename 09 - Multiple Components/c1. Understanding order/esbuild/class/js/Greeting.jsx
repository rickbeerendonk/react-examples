/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint no-console:"off" */

function Greeting({ name }) {
  /***/ console.log('Greeting - render()');

  return <h1>Hello {name}!</h1>;
}

export default Greeting;
