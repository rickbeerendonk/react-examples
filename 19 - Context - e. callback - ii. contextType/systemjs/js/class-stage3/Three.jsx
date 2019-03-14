/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './color-context';

class Three extends React.Component {
  static contextType = ColorContext; // Alternative to using Consumer
  render() {
    return <h1 style={{ color: this.context.color }}>Three</h1>;
  }
}

export default Three;
