/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './ColorContext';

class Bottom extends React.Component {
  static contextType = ColorContext; // Alternative to using Consumer
  render() {
    return <h1 style={{ color: this.context.color }}>Bottom</h1>;
  }
}

export default Bottom;
