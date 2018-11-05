/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class Visible extends React.Component {
  render() {
    return React.createElement(
      'h3',
      null,
      'I am a visible portal, shown outside the react root by an invisible component!'
    );
  }
}
