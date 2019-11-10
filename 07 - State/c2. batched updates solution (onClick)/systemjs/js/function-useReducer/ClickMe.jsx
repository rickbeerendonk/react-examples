/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

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
  const [state, dispatch] = React.useReducer(reducer, {
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
    <a onClick={handleClick}>This link has been clicked {state.count} times</a>
  );
}

export default ClickMe;
