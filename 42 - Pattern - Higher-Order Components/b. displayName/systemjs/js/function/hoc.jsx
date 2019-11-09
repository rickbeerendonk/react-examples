/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

// Helper function
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// HOC
export function withExtras(WrappedComponent) {
  const WithExtras = ({ extraColor, ...passThroughProps }) => (
    <div style={{ color: extraColor }}>
      <WrappedComponent {...passThroughProps} />
    </div>
  );
  WithExtras.displayName = `WithExtras(${getDisplayName(WrappedComponent)})`;

  return WithExtras;
}
