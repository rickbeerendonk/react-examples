/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

import StateContext from './StateContext';
import Two from './Two';

function reducer(state, action) {
  switch (action.type) {
    case 'SWITCH':
      return { ...state, color: state.color === 'red' ? 'green' : 'red' };
    default:
      return state;
  }
}

function One(props) {
  const [state, dispatch] = React.useReducer(reducer, {
    color: props.color
  });

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Two />
    </StateContext.Provider>
  );
}

export default One;
