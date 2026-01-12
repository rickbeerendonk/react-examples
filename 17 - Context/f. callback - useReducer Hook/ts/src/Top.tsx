/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { useReducer } from 'react';

import StateContext from './StateContext.js';
import Middle from './Middle.jsx';

interface ReducerState {
  color: string;
}

interface ReducerAction {
  type: string;
}

function reducer(state: ReducerState, action: ReducerAction) {
  switch (action.type) {
    case 'SWITCH':
      return { ...state, color: state.color === 'red' ? 'blue' : 'red' };
    default:
      return state;
  }
}

function Top(props: { color: string }) {
  const [state, dispatch] = useReducer(reducer, {
    color: props.color
  });

  return (
    <StateContext value={{ state, dispatch }}>
      <Middle />
    </StateContext>
  );
}

export default Top;
