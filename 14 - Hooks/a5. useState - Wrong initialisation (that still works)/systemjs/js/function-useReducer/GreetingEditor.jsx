/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

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
  const [state = { name: 'World' }, dispatch] = React.useReducer(reducer);

  function handleChange(e) {
    dispatch({
      type: CHANGE_NAME,
      payload: e.target.value
    });
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={state.name} />
      <h1>Hello {state.name}!</h1>
    </React.Fragment>
  );
}

export default GreetingEditor;
