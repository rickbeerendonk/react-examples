/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import Three from './Three';

class Two extends React.Component {
  shouldComponentUpdate() {
    // Prevents context changes from reaching child components.
    return false;
  }
  render() {
    return <Three />;
  }
}

export default Two;
