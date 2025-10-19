/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", no-console:"off" */

import useFlashRef from './hooks/flash-ref.js';

function Child() {
  console.log('Render Child');
  return <h2 ref={useFlashRef()}>Child</h2>;
}

export default Child;
