/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

// Helper function
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// Higher-Order Component
export function withExtras(WrappedComponent) {
  function WithExtras(props) {
    return <WrappedComponent {...props} />;
  }
  WithExtras.displayName = `WithExtras(${getDisplayName(WrappedComponent)})`;

  const WithExtrasForwardRef = React.forwardRef((props, ref) => (
    <WithExtras {...props} forwardedRef={ref} />
  ));
  WithExtrasForwardRef.displayName = `WithExtrasForwardRef(${getDisplayName(
    WrappedComponent
  )})`;

  return WithExtrasForwardRef;
}
