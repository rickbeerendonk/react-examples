/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import Invisible from './Invisible';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        This is the React App.
        <Invisible />
      </React.Fragment>
    );
  }
}
