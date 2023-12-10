/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createContext, useContext, useReducer } from 'react';

const StateContext = createContext({
  state: {},
  dispatch: () => {}
});
StateContext.displayName = 'StateContext'; // For DevTools

export function StateProvider(props) {
  const [state, dispatch] = useReducer(props.reducer, props.initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StateContext.Provider>
  );
}

export function useState() {
  const { state } = useContext(StateContext);
  return state;
}

export function useDispatch() {
  const { dispatch } = useContext(StateContext);
  return dispatch;
}

export default { StateProvider, useState, useDispatch };
