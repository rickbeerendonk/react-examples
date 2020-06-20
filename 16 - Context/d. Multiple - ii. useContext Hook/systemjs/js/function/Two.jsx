/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import BackgroundContext from './BackgroundContext';
import Three from './Three';

function Two() {
  return (
    <BackgroundContext.Provider value={{ color: 'lightgray' }}>
      <Three />
    </BackgroundContext.Provider>
  );
}

export default Two;
