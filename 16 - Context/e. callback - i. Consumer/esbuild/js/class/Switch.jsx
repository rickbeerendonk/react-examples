/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from 'react';

import ColorContext from './ColorContext.js';

class Switch extends Component {
  render() {
    return (
      <ColorContext.Consumer>
        {context => (
          <button onClick={context.handleSwitch}>Switch color</button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Switch;
