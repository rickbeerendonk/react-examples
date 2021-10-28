/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

function DynamicComponent({ type, children, ...otherProps }) {
  return React.createElement(type, otherProps, children);
}

export default DynamicComponent;
