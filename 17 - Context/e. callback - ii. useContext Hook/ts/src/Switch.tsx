/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useContext } from 'react';

import ColorContext from './ColorContext.ts';

function Switch() {
  const context = useContext(ColorContext);

  return <button onClick={context.handleSwitch}>Switch color</button>;
}

export default Switch;
