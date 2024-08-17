/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useContext } from 'react';

import StateContext from './StateContext.js';

function Bottom() {
  const ctx = useContext(StateContext);

  return <h1 style={{ color: ctx.state.color }}>Bottom</h1>;
}

export default Bottom;
