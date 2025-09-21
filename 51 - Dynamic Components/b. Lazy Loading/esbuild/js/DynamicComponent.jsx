/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { forwardRef } from 'react';
import { jsx } from 'react/jsx-runtime';

// Key is not available in props
const DynamicComponent = forwardRef(({ as, ...otherProps }, ref) => {
  return jsx(as, { ref, ...otherProps });
});

export default DynamicComponent;
