/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './ColorContext';
import Two from './Two';

function reducer(state, action) {
  switch (action.type) {
    case 'SWITCH':
      return state === 'red' ? 'green' : 'red';
    default:
      return state;
  }
}

function One(props) {
  const [color, dispatch] = React.useReducer(reducer, props.color);

  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      <Two />
    </ColorContext.Provider>
  );
}

export default One;
