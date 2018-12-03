/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import React from 'react';

function EditBox({ onChange, name }) {
  return <input onChange={e => onChange(e.target.value)} value={name} />;
}

export default EditBox;
