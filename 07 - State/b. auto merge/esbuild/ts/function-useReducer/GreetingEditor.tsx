/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React, { ChangeEvent, useReducer } from 'react';

enum ReducerActionKind {
  CHANGE_NAME = 'CHANGE_NAME'
}

interface ReducerState {
  name: string;
  other: string;
}

// An interface for our actions
interface ReducerAction {
  type: ReducerActionKind;
  payload: string;
}

function reducer(state: ReducerState, action: ReducerAction) {
  switch (action.type) {
    case ReducerActionKind.CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
}

function GreetingEditor() {
  const [state, dispatch] = useReducer(reducer, {
    name: 'World',
    other: 'More state'
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: ReducerActionKind.CHANGE_NAME,
      payload: e.target.value
    });
  }

  return (
    <>
      <input autoFocus onChange={handleChange} value={state.name} />
      <h1>Hello {state.name}!</h1>
      <h2>{state.other}</h2>
    </>
  );
}

export default GreetingEditor;
