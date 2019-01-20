/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import ColorContext from './color-context';
import React from 'react';

function Three() {
  const { color } = React.useContext(ColorContext);

  return <h1 style={{ color }}>Three</h1>;
}

export default Three;
