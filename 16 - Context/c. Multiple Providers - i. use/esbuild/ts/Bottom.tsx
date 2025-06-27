/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { use } from 'react';

import ColorContext from './ColorContext.ts';

function Bottom() {
  // React 19+: "use" is enough, no Provider needed.
  const { color } = use(ColorContext);

  return <h1 style={{ color }}>Bottom</h1>;
}

export default Bottom;
