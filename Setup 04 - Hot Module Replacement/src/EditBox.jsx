/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import React from 'react';

/* eslint react/prop-types:"off" */

const EditBox = ({ onChange, name }) => (
  <input onChange={e => onChange(e.target.value)} value={name} />
);

export default EditBox;
