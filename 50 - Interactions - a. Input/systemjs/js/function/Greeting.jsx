/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import ReactInteractions from 'react-interactions';

// Workaround for not being able to do "import { useInput } from..."
const useInput = ReactInteractions.useInput;

function Greeting() {
  const inputListener = useInput({
    // checked
    // disabled
    // value,
    // onBeforeChange
    // onChange
    // onValueChange

    onValueChange: e =>
      alert(`onValueChange handled.
Value: ${e}`),
    onChange: e =>
      alert(`onChange handled.
Target: ${e.target}
Value: ${e.target.value}`)
  });

  return <input type="text" listeners={inputListener} value="Hello World!" />;
}

export default Greeting;
