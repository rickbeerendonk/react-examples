/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import GreetingWithExtras from './GreetingWithExtras';

export default class App extends React.Component {
  render() {
    return React.createElement(GreetingWithExtras, { extraColor: 'red', name: 'World' });
  }
}
