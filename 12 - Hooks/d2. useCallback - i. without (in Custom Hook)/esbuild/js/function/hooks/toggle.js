/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useState } from 'react';

function useToggle(val = false) {
  const [value, setValue] = useState(val);

  const toggle = () => {
    setValue(b => !b);
  };

  return [value, toggle];
}

export default useToggle;
