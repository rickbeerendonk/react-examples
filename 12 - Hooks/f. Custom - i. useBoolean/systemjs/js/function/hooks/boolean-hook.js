/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function useBoolean(initialValue) {
  const [value, setValue] = React.useState(initialValue);

  const toggle = React.useCallback(() => {
    setValue(v => !v);
  }, []);

  // DevTools state
  React.useDebugValue(value);

  // Return current state & toggle function
  return [value, toggle];
}

export default useBoolean;
