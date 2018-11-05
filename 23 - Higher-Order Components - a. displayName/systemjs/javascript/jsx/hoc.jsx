/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

// Helper function
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// HOC
export function withExtras(WrappedComponent) {
  class WithExtras extends React.Component {
    render() {
      // Filter out extra props that are specific to this HOC and shouldn't be
      // passed through
      const { extraColor, ...passThroughProps } = this.props;

      return (
        <div style={{ color: extraColor }}>
          <WrappedComponent {...passThroughProps} />
        </div>
      );
    }
  }
  WithExtras.displayName = `WithExtras(${getDisplayName(WrappedComponent)})`;

  return WithExtras;
}
