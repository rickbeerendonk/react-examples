/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

// HOC
export function withExtras(WrappedComponent) {
  const WithExtras = ({ extraColor, ...passThroughProps }) => (
    <div style={{ color: extraColor }}>
      <WrappedComponent {...passThroughProps} />
    </div>
  );

  return WithExtras;
}
