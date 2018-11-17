/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

const EditBox = ({ onChange, value }) => (
  <input onChange={e => onChange(e.target.value)} value={value} />
);

export default EditBox;
