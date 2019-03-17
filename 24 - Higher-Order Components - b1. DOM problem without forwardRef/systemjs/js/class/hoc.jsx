/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

// HOC
export function withExtras(WrappedComponent) {
  return class WithExtras extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
