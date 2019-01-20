/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import Three from './Three';

class Two extends React.Component {
  shouldComponentUpdate() {
    // Prevents legacy context changes from reaching child components.
    // New context API fixes this.
    return false;
  }
  render() {
    return (
      <React.Fragment>
        <Three />
        <Three />
      </React.Fragment>
    );
  }
}

export default Two;
