/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import ColorContext from './ColorContext';

class Switch extends React.Component {
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
