/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", no-console:"off" */

import { Component } from 'react';

class Child extends Component {
  render() {
    return <h2>Child: {this.props.obj.name}</h2>;
  }
}

export default Child;
