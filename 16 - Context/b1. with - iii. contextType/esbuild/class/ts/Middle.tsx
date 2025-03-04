/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React, { Component } from 'react';

import Bottom from './Bottom.tsx';

class Middle extends Component {
  shouldComponentUpdate() {
    // Prevents legacy context changes from reaching child components.
    // New context API fixes this.
    return false;
  }
  render() {
    return <Bottom />;
  }
}

export default Middle;
