/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* eslint react/display-name:"off" */
/* eslint react/prop-types:"off" */

'use strict';

import React from 'react';

const NameInput = ({onChange, name}) => (
  <input onChange={onChange} value={name} />
);

export default NameInput;