/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from 'react';

import ColorContext from './ColorContext.jsx';

class Switch extends Component {
  render() {
    return <button onClick={this.context.handleSwitch}>Switch color</button>;
  }
}
Switch.contextType = ColorContext; // Alternative to using Consumer

export default Switch;
