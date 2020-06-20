/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './ColorContext';

function Switch() {
  const { dispatch } = React.useContext(ColorContext);

  function handleSwitch() {
    dispatch({ type: 'SWITCH' });
  }

  return <button onClick={handleSwitch}>Switch color</button>;
}

export default Switch;
