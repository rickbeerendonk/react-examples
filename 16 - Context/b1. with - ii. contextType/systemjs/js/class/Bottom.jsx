/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './ColorContext';

class Bottom extends React.Component {
  render() {
    return <h1 style={{ color: this.context.color }}>Bottom</h1>;
  }
}
Bottom.contextType = ColorContext; // Alternative to using Consumer

export default Bottom;
