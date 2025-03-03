/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { createElement } from 'react';

function DynamicComponent({ type, children, ...otherProps }) {
  return createElement(type, otherProps, children);
}

export default DynamicComponent;
