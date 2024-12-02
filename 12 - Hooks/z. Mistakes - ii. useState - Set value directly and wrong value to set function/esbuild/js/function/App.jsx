/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk, Oblicum !*/

import { useState } from 'react';

/* eslint no-console: off */
/* eslint react-compiler/react-compiler: off */

function App() {
  let [value, setValue] = useState(false);

  function handleClick() {
    console.log('value (before): ', value);

    // Only leads to re-render if value has changed since previous render.
    // - value is updated here (wrong)
    // - setValue is called with the result of an assignment
    setValue((value = !value));

    console.log('value (after): ', value);
  }

  return <button onClick={handleClick}>Value: {String(value)}</button>;
}

export default App;
