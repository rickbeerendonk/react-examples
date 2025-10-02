/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useReducer } from 'react';

const CHANGE_COUNT = 'CHANGE_COUNT';

function reducer(state, action) {
  switch (action.type) {
    case CHANGE_COUNT:
      return { ...state, count: state.count + action.payload };
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
}

function ClickMe() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0
  });

  function handleClick() {
    dispatch({
      type: CHANGE_COUNT,
      payload: 0.4
    });
    dispatch({
      type: CHANGE_COUNT,
      payload: 0.6
    });
  }

  return (
    <button onClick={handleClick}>
      This button has been clicked {state.count} times
    </button>
  );
}

export default ClickMe;
