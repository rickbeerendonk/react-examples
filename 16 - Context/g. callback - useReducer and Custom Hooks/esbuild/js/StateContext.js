/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createContext, use, useReducer } from 'react';

const StateContext = createContext({
  state: {},
  dispatch: () => {}
});
StateContext.displayName = 'StateContext'; // For DevTools

export function StateProvider(props) {
  const [state, dispatch] = useReducer(props.reducer, props.initialState);
  return (
    <StateContext value={{ state, dispatch }}>{props.children}</StateContext>
  );
}

export function useState() {
  const { state } = use(StateContext);
  return state;
}

export function useDispatch() {
  const { dispatch } = use(StateContext);
  return dispatch;
}

export default { StateProvider, useState, useDispatch };
