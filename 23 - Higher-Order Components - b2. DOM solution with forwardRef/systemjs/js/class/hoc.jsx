/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

// Helper function
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// Higher-Order Component
export function withExtras(WrappedComponent) {
  class WithExtras extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
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
