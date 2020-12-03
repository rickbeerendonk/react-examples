/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

import StateContext from './StateContext';

function Switch() {
  const { dispatch } = React.useContext(StateContext);

  function handleSwitch() {
    dispatch({ type: 'SWITCH' });
  }

  return <button onClick={handleSwitch}>Switch color</button>;
}

export default Switch;
