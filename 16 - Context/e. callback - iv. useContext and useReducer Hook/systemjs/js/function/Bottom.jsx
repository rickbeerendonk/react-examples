/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import StateContext from './StateContext';

function Bottom() {
  const {
    state: { color }
  } = React.useContext(StateContext);

  return <h1 style={{ color }}>Bottom</h1>;
}

export default Bottom;
