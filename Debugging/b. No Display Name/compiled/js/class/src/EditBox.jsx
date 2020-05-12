/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* eslint react/display-name:"off" */

import React from 'react';

export default function({ onChange, value }) {
  return <input onChange={e => onChange(e.target.value)} value={value} />;
}
