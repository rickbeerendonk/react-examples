/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React, { useContext } from 'react';

import ColorContext from './ColorContext.tsx';

function Bottom() {
  const { color } = useContext(ColorContext);

  return <h1 style={{ color }}>Bottom</h1>;
}

export default Bottom;
