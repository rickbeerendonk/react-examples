/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './ColorContext';

function Switch() {
  const { handleSwitch } = React.useContext(ColorContext);

  return <button onClick={handleSwitch}>Switch color</button>;
}

export default Switch;
