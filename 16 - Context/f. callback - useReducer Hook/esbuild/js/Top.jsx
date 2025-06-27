/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useReducer } from 'react';

import StateContext from './StateContext.js';
import Middle from './Middle.jsx';

function reducer(state, action) {
  switch (action.type) {
    case 'SWITCH':
      return { ...state, color: state.color === 'red' ? 'blue' : 'red' };
  }
}

function Top(props) {
  const [state, dispatch] = useReducer(reducer, {
    color: props.color
  });

  return (
    // React 19+: <ColorContext> is enough, no Provider needed.
    <StateContext.Provider value={{ state, dispatch }}>
      <Middle />
    </StateContext.Provider>
  );
}

export default Top;
