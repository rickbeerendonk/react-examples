/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from 'react';

import ColorContext from './ColorContext.js';

class Switch extends Component {
  static contextType = ColorContext; // Alternative to using Consumer
  render() {
    return <button onClick={this.context.handleSwitch}>Switch color</button>;
  }
}

export default Switch;
