/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import React from 'react';

function EditBox({ onChange, value }) {
  return <input onChange={e => onChange(e.target.value)} value={value} />;
}

export default EditBox;
