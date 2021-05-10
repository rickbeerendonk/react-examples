/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

const StateContext = React.createContext({
  state: { color: 'orange' },
  dispatch: () => {}
});
StateContext.displayName = 'StateContext'; // For DevTools

function stateReducer(state, action) {
  switch (action.type) {
    case 'SWITCH':
      return { ...state, color: state.color === 'red' ? 'green' : 'red' };
    default:
      return state;
  }
}

export function StateProvider({ children, color }) {
  const [state, dispatch] = React.useReducer(stateReducer, { color });
  const value = { state, dispatch };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}

export function useState() {
  const { state } = React.useContext(StateContext);
  return state;
}

export function useDispatch() {
  const { dispatch } = React.useContext(StateContext);
  return dispatch;
}

export default { StateProvider, useState, useDispatch };
