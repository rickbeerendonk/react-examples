/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function Child({ name, onClick }) {
  /* eslint no-console:0 */
  console.log(name, ' is rendered.');

  return <div onClick={() => onClick()}>Child: {name}</div>;
}

export default React.memo(Child);
