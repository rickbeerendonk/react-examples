/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* eslint react/display-name:"off" */

import React from 'react';

export default ({ onChange, name }) => (
  <input onChange={onChange} value={name} />
);
