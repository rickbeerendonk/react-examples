/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { use } from 'react';

import ColorContext from './ColorContext.js';

function Switch() {
  const { handleSwitch } = use(ColorContext);

  function handleClick() {
    // Do not pass the event object
    handleSwitch();
  }

  return <button onClick={handleClick}>Switch color</button>;
}

export default Switch;
