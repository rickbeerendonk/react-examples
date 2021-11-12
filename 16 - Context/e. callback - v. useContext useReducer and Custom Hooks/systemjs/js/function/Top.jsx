/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

import { StateProvider } from './StateContext';
import Middle from './Middle';

function Top({ color }) {
  return (
    <StateProvider state={{ color }}>
      <Middle />
    </StateProvider>
  );
}

export default Top;
