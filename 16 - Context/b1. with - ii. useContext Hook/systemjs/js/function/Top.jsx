/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './ColorContext';
import Middle from './Middle';

function Top(props) {
  const [color, setColor] = React.useState(props.color);

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
