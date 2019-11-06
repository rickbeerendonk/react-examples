/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import Focus from 'react-interactions/focus';

/* eslint no-console:0 */

// Workaround for not being able to do "import { ... } from..."
const useState = React.useState;
const useFocus = Focus.useFocus;

function Greeting() {
  const [isFocusVisible, setFocusVisible] = useState(false);
  const focusListener = useFocus({
    onBlur: e => console.log('blur', e),
    onFocus: e => console.log('focus', e),
    onFocusVisibleChange: setFocusVisible
  });

  return (
    <React.Fragment>
      Change focus using tab key:
      <input defaultValue="Hej Denmark" />
      <input
        listeners={focusListener}
        style={{ color: isFocusVisible ? 'red' : undefined }}
        defaultValue="Hallo Norway"
      />
    </React.Fragment>
  );
}

export default Greeting;
