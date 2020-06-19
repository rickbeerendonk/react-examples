/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './ColorContext';
import Two from './Two';
import Three from './Three';

function One(props) {
  const [color, setColor] = React.useState(props.color);

  function handleSwitch() {
    setColor(c => (c === 'red' ? 'green' : 'red'));
  }

  return (
    <React.Fragment>
      <ColorContext.Provider value={{ color: 'blue' }}>
        <ColorContext.Provider value={{ color }}>
          <Two />
          <button onClick={handleSwitch}>Switch color</button>
        </ColorContext.Provider>

        <Three />
      </ColorContext.Provider>

      <Three />
    </React.Fragment>
  );
}

export default One;
