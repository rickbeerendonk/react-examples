/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import BackgroundContext from './BackgroundContext';
import ColorContext from './ColorContext';

function Bottom() {
  const { color: background } = React.useContext(BackgroundContext);
  const { color } = React.useContext(ColorContext);

  return <h1 style={{ background, color }}>Bottom</h1>;
}

export default Bottom;
