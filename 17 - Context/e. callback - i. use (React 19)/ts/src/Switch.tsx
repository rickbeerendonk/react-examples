/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useContext } from 'react';

import ColorContext from './ColorContext.ts';

function Switch() {
  const { handleSwitch } = useContext(ColorContext);

  function handleClick() {
    // Do not pass the event object
    handleSwitch();
  }

  return <button onClick={handleClick}>Switch color</button>;
}

export default Switch;
