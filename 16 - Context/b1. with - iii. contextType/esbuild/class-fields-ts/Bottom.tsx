/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, ContextType } from 'react';

import ColorContext from './ColorContext.ts';

class Bottom extends Component {
  static contextType = ColorContext; // Alternative to using Consumer
  declare context: ContextType<typeof ColorContext>;
  render() {
    return <h1 style={{ color: this.context.color }}>Bottom</h1>;
  }
}

export default Bottom;
