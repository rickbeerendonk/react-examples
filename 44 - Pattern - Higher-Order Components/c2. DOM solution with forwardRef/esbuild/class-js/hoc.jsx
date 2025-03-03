/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, forwardRef } from 'react';

// Helper function
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// Higher-Order Component
export function withExtras(WrappedComponent) {
  class WithExtras extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  WithExtras.displayName = `WithExtras(${getDisplayName(WrappedComponent)})`;

  const WithExtrasForwardRef = forwardRef((props, ref) => (
    <WithExtras {...props} forwardedRef={ref} />
  ));
  WithExtrasForwardRef.displayName = `WithExtrasForwardRef(${getDisplayName(
    WrappedComponent
  )})`;

  return WithExtrasForwardRef;
}
