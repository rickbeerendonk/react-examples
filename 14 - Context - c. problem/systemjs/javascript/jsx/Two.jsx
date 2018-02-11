/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import Three from './Three';

export default class Two extends React.Component {
  shouldComponentUpdate() {
    // Prevents context changes from reaching child components.
    return false;
  }
  render() {
    return <Three />;
  }
}
