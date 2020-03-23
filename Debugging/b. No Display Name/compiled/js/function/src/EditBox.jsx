/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* eslint react/display-name:"off" */

import React from 'react';

export default function ({ onChange, value }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return <input onChange={handleChange} value={value} />;
}
