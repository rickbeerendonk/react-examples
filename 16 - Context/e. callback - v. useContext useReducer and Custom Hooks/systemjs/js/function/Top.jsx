/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

import { StateProvider } from './StateContext';
import Middle from './Middle';

function reducer(state, action) {
  switch (action.type) {
    case 'SWITCH':
      return { ...state, color: state.color === 'red' ? 'green' : 'red' };
  }
}

function Top({ color }) {
  return (
    <StateProvider reducer={reducer} initialState={{ color }}>
      <Middle />
    </StateProvider>
  );
}

export default Top;
