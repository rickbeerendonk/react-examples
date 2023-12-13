/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { memo } from 'react';

function Child({ name, onClick }) {
  console.log(name, ' is rendered.');

  return <button onClick={() => onClick()}>Child: {name}</button>;
}

export default memo(Child);
