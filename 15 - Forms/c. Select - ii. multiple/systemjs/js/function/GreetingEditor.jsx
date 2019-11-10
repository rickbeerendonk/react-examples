/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function GreetingEditor() {
  const [selected, setSelected] = React.useState(['bike', 'train']);

  function handleChange(e) {
    setSelected(
      [...e.target.options].filter(o => o.selected).map(o => o.value)
    );
  }

  return (
    <select multiple onChange={handleChange} value={selected}>
      <option value="bike">Bike</option>
      <option value="car">Car</option>
      <option value="train">Train</option>
    </select>
  );
}

export default GreetingEditor;
