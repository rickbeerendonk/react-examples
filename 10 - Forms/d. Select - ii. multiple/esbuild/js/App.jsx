/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

export default function App() {
  const [selected, setSelected] = useState(['bike', 'train']);

  function handleChange(e) {
    setSelected(
      Array.from(
        e.target.selectedOptions,
        selectedOption => selectedOption.value
      )
    );
  }

  return (
    <>
      <select multiple onChange={handleChange} value={selected}>
        <option value="bike">Bike</option>
        <option value="car">Car</option>
        <option value="train">Train</option>
      </select>
      <p>{JSON.stringify(selected)}</p>
    </>
  );
}
