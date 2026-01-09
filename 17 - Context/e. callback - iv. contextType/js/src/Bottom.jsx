/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from 'react';

import ColorContext from './ColorContext.js';

class Bottom extends Component {
  static contextType = ColorContext; // Alternative to using Consumer
  render() {
    return <h1 style={{ color: this.context.color }}>Bottom</h1>;
  }
}

export default Bottom;
