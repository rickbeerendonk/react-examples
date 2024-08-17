/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useState } from 'react';

import ColorContext from './ColorContext.ts';
import Middle from './Middle.tsx';

function Top(props) {
  const [color, setColor] = useState(props.color);

  function handleSwitch() {
    setColor(c => (c === 'red' ? 'blue' : 'red'));
  }

  return (
    <ColorContext.Provider value={{ color }}>
      <Middle />
      <button onClick={handleSwitch}>Switch color</button>
    </ColorContext.Provider>
  );
}

export default Top;
