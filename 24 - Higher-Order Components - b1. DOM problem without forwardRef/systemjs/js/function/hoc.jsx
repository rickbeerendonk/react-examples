/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

// HOC
export function withExtras(WrappedComponent) {
  const WithExtras = props => <WrappedComponent {...props} />;
  return WithExtras;
}
