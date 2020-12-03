/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import BackgroundContext from './BackgroundContext';
import Bottom from './Bottom';

class Middle extends React.Component {
  shouldComponentUpdate() {
    // Prevents legacy context changes from reaching child components.
    // New context API fixes this.
    return false;
  }
  render() {
    return (
      <BackgroundContext.Provider value={{ color: 'lightgray' }}>
        <Bottom />
      </BackgroundContext.Provider>
    );
  }
}

export default Middle;
