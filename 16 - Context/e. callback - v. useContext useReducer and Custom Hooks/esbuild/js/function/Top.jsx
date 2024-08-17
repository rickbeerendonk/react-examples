/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { StateProvider } from './StateContext.js';
import Middle from './Middle.jsx';

function reducer(state, action) {
  switch (action.type) {
    case 'SWITCH':
      return { ...state, color: state.color === 'red' ? 'blue' : 'red' };
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
