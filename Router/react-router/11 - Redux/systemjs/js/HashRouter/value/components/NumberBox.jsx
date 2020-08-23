/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function NumberBox({ onChange, value }) {
  return (
    <input
      type="number"
      onChange={e => onChange(e.target.value)}
      value={value}
    />
  );
}

export default NumberBox;
