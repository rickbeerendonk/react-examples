/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './ColorContext';
import Middle from './Middle';
import Bottom from './Bottom';

function Top(props) {
  const [color, setColor] = React.useState(props.color);

  function handleSwitch() {
    setColor(c => (c === 'red' ? 'green' : 'red'));
  }

  return (
    <React.Fragment>
      <ColorContext.Provider value={{ color: 'blue' }}>
        <ColorContext.Provider value={{ color }}>
          <Middle />
          <button onClick={handleSwitch}>Switch color</button>
        </ColorContext.Provider>

        <Bottom />
      </ColorContext.Provider>

      <Bottom />
    </React.Fragment>
  );
}

export default Top;
