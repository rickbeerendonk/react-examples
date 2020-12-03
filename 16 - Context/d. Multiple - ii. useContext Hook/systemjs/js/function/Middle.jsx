/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import BackgroundContext from './BackgroundContext';
import Bottom from './Bottom';

function Middle() {
  return (
    <BackgroundContext.Provider value={{ color: 'lightgray' }}>
      <Bottom />
    </BackgroundContext.Provider>
  );
}

export default Middle;
