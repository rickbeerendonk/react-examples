/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from 'react';

import Switch from './Switch.jsx';
import Bottom from './Bottom.jsx';

class Middle extends Component {
  shouldComponentUpdate() {
    // Prevents legacy context changes from reaching child components.
    // New context API fixes this.
    return false;
  }
  render() {
    return (
      <>
        <Bottom />
        <Switch />
      </>
    );
  }
}

export default Middle;
