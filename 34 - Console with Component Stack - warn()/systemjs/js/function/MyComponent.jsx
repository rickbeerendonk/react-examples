/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function MyComponent(props) {
  if (props.foo) {
    React.warn('This is a custom warning: foo is deprecated.');
  }
  return 'Check the console to see a warning plus a component call stack.';
}

export default MyComponent;
