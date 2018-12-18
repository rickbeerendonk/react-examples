/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

// HOC
export function withExtras(WrappedComponent) {
  return class WithExtras extends React.Component {
    render() {
      return React.createElement(WrappedComponent, this.props);
    }
  };
}
