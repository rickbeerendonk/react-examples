/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import StateContext from './StateContext';

function Three() {
  const {
    state: { color }
  } = React.useContext(StateContext);

  return <h1 style={{ color }}>Three</h1>;
}

export default Three;
