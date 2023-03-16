/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './ColorContext';

function Bottom() {
  const { color } = React.useContext(ColorContext);

  return <h1 style={{ color }}>Bottom</h1>;
}

export default Bottom;
