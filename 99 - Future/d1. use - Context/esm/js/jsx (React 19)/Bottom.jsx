/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { use } from 'react';

import ColorContext from './ColorContext.js';

function Bottom() {
  // React 19+: use API

  const { color } = use(ColorContext);

  return <h1 style={{ color }}>Bottom</h1>;
}

export default Bottom;
