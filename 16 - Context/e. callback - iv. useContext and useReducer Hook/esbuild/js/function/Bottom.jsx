/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useContext } from 'react';

import StateContext from './StateContext.js';

function Bottom() {
  const {
    state: { color }
  } = useContext(StateContext);

  return <h1 style={{ color }}>Bottom</h1>;
}

export default Bottom;
