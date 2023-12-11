/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

// HOC
export function withExtras(WrappedComponent) {
  return class WithExtras extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
