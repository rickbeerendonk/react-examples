/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React, { Component } from 'react';

import ColorContext from './ColorContext.ts';

class Bottom extends Component {
  context!: React.ContextType<typeof ColorContext>;
  render() {
    return <h1 style={{ color: this.context.color }}>Bottom</h1>;
  }
}
Bottom.contextType = ColorContext; // Alternative to using Consumer

export default Bottom;
