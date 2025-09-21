/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

import ColorContext from './ColorContext.js';
import Middle from './Middle.jsx';

function Top(props) {
  const [color, setColor] = useState(props.color);

  function handleSwitch() {
    setColor(c => (c === 'red' ? 'blue' : 'red'));
  }

  return (
    <ColorContext.Provider value={{ color, handleSwitch }}>
      <Middle />
    </ColorContext.Provider>
  );
}

export default Top;
