/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useState } from './StateContext.jsx';

function Bottom() {
  const { color } = useState();

  return <h1 style={{ color }}>Bottom</h1>;
}

export default Bottom;
