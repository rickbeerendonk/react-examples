/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useReducer } from 'react';

const CHANGE_NAME = 'CHANGE_NAME';

function reducer(state, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
}

function GreetingEditor() {
  const [state, dispatch] = useReducer(reducer, { name: 'World' });

  function handleChange(e) {
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
      <input autoFocus onChange={handleChange} value={state.name} />
      <h1>Hello {state.name}!</h1>
      <button onClick={handleClick}>Show name</button>
    </>
  );
}

export default GreetingEditor;
