/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import React from 'react';

import { StyledInput } from './styled';

const EditBox = ({ onChange, name }) => (
  <StyledInput onChange={e => onChange(e.target.value)} value={name} />
);

export default EditBox;
