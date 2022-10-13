/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

/* eslint-disable jsx-a11y/no-onchange */

function App() {
  const [selected, setSelected] = React.useState(['bike', 'train']);

  function handleChange(e) {
    setSelected([...e.target.selectedOptions].map(o => o.value));
  }

  return (
    <React.Fragment>
      <select multiple onChange={handleChange} value={selected}>
        <option value="bike">Bike</option>
        <option value="car">Car</option>
        <option value="train">Train</option>
      </select>
      <p>{JSON.stringify(selected)}</p>
    </React.Fragment>
  );
}

export default App;
