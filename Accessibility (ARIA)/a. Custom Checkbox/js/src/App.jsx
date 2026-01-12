/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { useState } from 'react';

import CheckBox from './CheckBox.jsx';

export default function App() {
  const [checked, setChecked] = useState(false);

  function handleCheck(value) {
    setChecked(value);
  }

  return (
    <>
      <CheckBox onChange={handleCheck} checked={checked} />
    </>
  );
}
