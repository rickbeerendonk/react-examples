/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* eslint no-console: 0 */

import { useReducer } from 'react';

const CHANGE_NAME = 'CHANGE_NAME';

function reducer1(state, action) {
  console.log('reducer1');
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      console.error(`Unknown action type ${action.type}`);
      return state;
  }
}

function reducer2(state, action) {
  console.log('reducer2');
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      console.error(`Unknown action type ${action.type}`);
      return state;
  }
}

function GreetingEditor() {
  const [state1, dispatch1] = useReducer(reducer1, { name: 'World' });
  const [state2, dispatch2] = useReducer(reducer2, { name: 'Other' });

  function handleChange1(e) {
    dispatch1({
      type: CHANGE_NAME,
      payload: e.target.value
    });
  }

  function handleChange2(e) {
    dispatch2({
      type: CHANGE_NAME,
      payload: e.target.value
    });
  }

  return (
    <>
      <input onChange={handleChange1} value={state1.name} />
      <h1>Hello {state1.name}!</h1>
      <input onChange={handleChange2} value={state2.name} />
      <h1>Hello {state2.name}!</h1>
    </>
  );
}

export default GreetingEditor;
