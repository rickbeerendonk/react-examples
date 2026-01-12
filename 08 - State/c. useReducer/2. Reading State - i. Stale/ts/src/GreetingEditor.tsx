/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useReducer } from 'react';
import type { ChangeEvent } from 'react';

const CHANGE_NAME = 'CHANGE_NAME';

interface ReducerState {
  name: string;
}

interface ReducerAction {
  type: typeof CHANGE_NAME;
  payload: string;
}

function reducer(state: ReducerState, action: ReducerAction): ReducerState {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
}

function GreetingEditor() {
  const [state, dispatch] = useReducer(reducer, {
    name: 'World'
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: CHANGE_NAME,
      payload: e.target.value
    });
  }

  function handleClick() {
    setTimeout(() => alert(state.name), 3000);
  }

  return (
    <>
      <input onChange={handleChange} value={state.name} />
      <h1>Hello {state.name}!</h1>
      <button onClick={handleClick}>Show name</button>
    </>
  );
}

export default GreetingEditor;
