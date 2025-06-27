/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useContext } from 'react';

import StateContext from './StateContext.js';

function Switch() {
  const { dispatch } = use(StateContext);

  function handleSwitch() {
    dispatch({ type: 'SWITCH' });
  }

  return <button onClick={handleSwitch}>Switch color</button>;
}

export default Switch;
