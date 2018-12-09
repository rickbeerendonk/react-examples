/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off", no-console:"off" */

import React from 'react';

class Child extends React.Component {
  render() {
    return <h2>Child: {this.props.obj.name}</h2>;
  }
}

export default Child;
