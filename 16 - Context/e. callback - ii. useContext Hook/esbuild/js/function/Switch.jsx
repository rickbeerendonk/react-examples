/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useContext } from 'react';

import ColorContext from './ColorContext.jsx';

function Switch() {
  const { handleSwitch } = useContext(ColorContext);

  return <button onClick={handleSwitch}>Switch color</button>;
}

export default Switch;
