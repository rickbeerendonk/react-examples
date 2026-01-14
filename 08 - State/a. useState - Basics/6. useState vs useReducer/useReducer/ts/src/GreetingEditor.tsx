/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { useReducer } from 'react';

type State = {
  value1: number;
  value2: number;
  sum: number;
  subtract: boolean;
};

type Action =
  | { type: 'SET_VALUE1'; payload: number }
  | { type: 'SET_VALUE2'; payload: number }
  | { type: 'TOGGLE_SUBTRACT' };

function reducer1(state: State, action: Action) {
  switch (action.type) {
    case 'SET_VALUE1':
      return {
        ...state,
        value1: action.payload,
        sum: state.subtract
          ? action.payload - state.value2
          : action.payload + state.value2
      };
    case 'SET_VALUE2':
      return {
        ...state,
        value2: action.payload,
        sum: state.subtract
          ? state.value1 - action.payload
          : state.value1 + action.payload
      };
    case 'TOGGLE_SUBTRACT':
      return {
        ...state,
        subtract: !state.subtract,
        sum: !state.subtract
          ? state.value1 - state.value2
          : state.value1 + state.value2
      };
    default:
      return state;
  }
}

function GreetingEditor() {
  const [state, dispatch] = useReducer(reducer1, {
    value1: 1,
    value2: 2,
    sum: 3,
    subtract: false
  });
  function handleChange1(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'SET_VALUE1', payload: Number(e.target.value) });
  }

  function handleChange2(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'SET_VALUE2', payload: Number(e.target.value) });
  }

  function handleAddSubtract(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'TOGGLE_SUBTRACT' });
  }

  return (
    <>
      <input type="number" onChange={handleChange1} value={state.value1} />
      <input type="number" onChange={handleChange2} value={state.value2} />
      <input type="checkbox" onChange={handleAddSubtract} /> Subtract
      <h1>{state.sum}</h1>
    </>
  );
}

export default GreetingEditor;
