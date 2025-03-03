/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, createElement } from 'react';

// HOC
export function withExtras(WrappedComponent) {
  return class WithExtras extends Component {
    render() {
      return createElement(WrappedComponent, this.props);
    }
  };
}
