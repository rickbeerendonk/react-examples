/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

const EditBox = ({onChange, name}) => (
  <input onChange={e => onChange(e.target.value)} value={name} />
);

export default EditBox;
