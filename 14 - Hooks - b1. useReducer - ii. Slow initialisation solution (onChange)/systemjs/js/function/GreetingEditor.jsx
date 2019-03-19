/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import { slowEcho } from './utils/index';

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
  // Use 3rd parameter to lazily initialise state:
  const [state, dispatch] = React.useReducer(reducer, undefined, () =>
    slowEcho({ name: 'World' })
  );

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
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={state.name} />
      <h1>Hello {state.name}!</h1>
      <button onClick={handleClick}>Show name</button>
    </React.Fragment>
  );
}

export default GreetingEditor;
