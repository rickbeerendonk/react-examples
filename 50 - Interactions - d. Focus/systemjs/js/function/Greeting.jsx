/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import Focus from 'react-interactions/focus';

// Workaround for not being able to do "import { ... } from..."
const useState = React.useState;
const useFocus = Focus.useFocus;

function Greeting() {
  const [ isFocusVisible, setFocusVisible ] = useState(false);
  const focusListener = useFocus({
    // onBlur
    // onFocus
    onFocusVisibleChange: setFocusVisible
  });

  return (
    <React.Fragment>
      Change focus using tab key:
      <input listeners={focusListener} style={{ color: isFocusVisible ? 'red' : undefined }} defaultValue="Hallo Norway" />
      <input defaultValue="Hej Denmark" />
    </React.Fragment>
  );
}

export default Greeting;
