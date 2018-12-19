/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import ColorContext from './color-context';
import Two from './Two';

function One(props) {
  const [color, setColor] = React.useState(props.color);

  function handleSwitch() {
    setColor(c => (c === 'red' ? 'green' : 'red'));
  }

  return (
    <ColorContext.Provider value={{ color }}>
      <Two />
      <button onClick={handleSwitch}>Switch color</button>
    </ColorContext.Provider>
  );
}

export default One;
