/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './ColorContext';

function Three() {
  const { color } = React.useContext(ColorContext);

  return <h1 style={{ color }}>Three</h1>;
}

export default Three;
