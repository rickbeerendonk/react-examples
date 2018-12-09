/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import Invisible from './Invisible';

export default class App extends React.Component {
  render() {
    return React.createElement(
      React.Fragment,
      null,
      'This is the React App.',
      React.createElement(Invisible)
    );
  }
}
