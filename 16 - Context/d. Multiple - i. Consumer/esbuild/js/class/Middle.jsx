/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from 'react';

import BackgroundContext from './BackgroundContext.js';
import Bottom from './Bottom.jsx';

class Middle extends Component {
  shouldComponentUpdate() {
    // Prevents legacy context changes from reaching child components.
    // New context API fixes this.
    return false;
  }
  render() {
    return (
      // React 19+: <ColorContext> is enough, no Provider needed.
      <BackgroundContext.Provider value={{ color: 'lightgray' }}>
        <Bottom />
      </BackgroundContext.Provider>
    );
  }
}

export default Middle;
