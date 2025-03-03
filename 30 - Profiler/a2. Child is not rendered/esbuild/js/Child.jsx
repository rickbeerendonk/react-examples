/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { memo } from 'react';

function Child({ onClick }) {
  return <button onClick={() => onClick()}>Child</button>;
}

export default memo(Child);
