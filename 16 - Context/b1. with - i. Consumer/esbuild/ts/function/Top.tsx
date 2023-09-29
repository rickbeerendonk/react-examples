/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React, { useState } from 'react';

import ColorContext from './ColorContext.tsx';
import Middle from './Middle.tsx';

interface TopProps {
  color: string;
}

function Top(props: TopProps) {
  const [color, setColor] = useState(props.color);

  function handleSwitch() {
    setColor(c => (c === 'red' ? 'green' : 'red'));
  }

  return (
    <ColorContext.Provider value={{ color }}>
      <Middle />
      <button onClick={handleSwitch}>Switch color</button>
    </ColorContext.Provider>
  );
}

export default Top;
