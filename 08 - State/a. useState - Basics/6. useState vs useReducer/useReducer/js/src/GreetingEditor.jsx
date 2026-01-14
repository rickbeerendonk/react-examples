/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useReducer, useState } from 'react';

function reducer1(state, action) {
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
  function handleChange1(e) {
    dispatch({ type: 'SET_VALUE1', payload: Number(e.target.value) });
  }

  function handleChange2(e) {
    dispatch({ type: 'SET_VALUE2', payload: Number(e.target.value) });
  }

  function handleAddSubtract(e) {
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
