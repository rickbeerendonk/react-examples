/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import React from 'react';

import { StyledInput } from './styled';

function EditBox({ onChange, name }) {
  return <StyledInput onChange={e => onChange(e.target.value)} value={name} />;
}

export default EditBox;
