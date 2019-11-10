/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", no-console:"off" */

import React from 'react';

class ChildPure extends React.PureComponent {
  render() {
    return <h2>Child (Pure): {this.props.obj.name}</h2>;
  }
}

export default ChildPure;
