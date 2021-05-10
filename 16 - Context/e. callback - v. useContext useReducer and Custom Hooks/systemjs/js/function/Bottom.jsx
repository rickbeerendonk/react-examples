/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

import { useState } from './StateContext';

function Bottom() {
  const { color } = useState();

  return <h1 style={{ color }}>Bottom</h1>;
}

export default Bottom;
