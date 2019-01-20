/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import React from 'react';

import { StyledInput } from './styled';

function EditBox({ onChange, name }) {
  return <StyledInput onChange={e => onChange(e.target.value)} value={name} />;
}

export default EditBox;
