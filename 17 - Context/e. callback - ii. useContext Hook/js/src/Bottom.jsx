/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useContext } from 'react';

import ColorContext from './ColorContext.js';

function Bottom() {
  const { color } = useContext(ColorContext);

  return <h1 style={{ color }}>Bottom</h1>;
}

export default Bottom;
