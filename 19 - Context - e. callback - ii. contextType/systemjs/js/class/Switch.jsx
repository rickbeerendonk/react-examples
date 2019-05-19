/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './ColorContext';

class Switch extends React.Component {
  render() {
    return <button onClick={this.context.handleSwitch}>Switch color</button>;
  }
}
Switch.contextType = ColorContext; // Alternative to using Consumer

export default Switch;
