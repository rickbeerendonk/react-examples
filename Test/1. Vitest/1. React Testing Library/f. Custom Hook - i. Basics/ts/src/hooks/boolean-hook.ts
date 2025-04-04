/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useCallback, useDebugValue, useState } from 'react';

function useBoolean(initialValue: boolean) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  // DevTools state
  useDebugValue(value);

  // Return current state & toggle function
  return [value, toggle];
}

export default useBoolean;
