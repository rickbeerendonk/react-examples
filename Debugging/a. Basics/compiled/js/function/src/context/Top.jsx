/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './ColorContext';
import Bottom from './Bottom';

function Top() {
  return (
    <ColorContext.Provider value={{ color: 'blue' }}>
      <Bottom />
    </ColorContext.Provider>
  );
}

export default Top;
