/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import React from 'react';

import { StyledInput } from './styled';

/* eslint react/prop-types:"off" */
/* eslint react/display-name:"off" */

export default ({ onChange, name }) => (
  <StyledInput onChange={e => onChange(e.target.value)} value={name} />
);
