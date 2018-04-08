/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

// HOC
export function withExtras(WrappedComponent) {
  class WithExtras extends React.Component {
    render() {
      // Filter out extra props that are specific to this HOC and shouldn't be
      // passed through
      const { extraColor, ...passThroughProps } = this.props;

      return (
        React.createElement('div', { style: { color: extraColor } },
          React.createElement(WrappedComponent, { ...passThroughProps })
        )
      );
    }
  }

  return WithExtras;
}