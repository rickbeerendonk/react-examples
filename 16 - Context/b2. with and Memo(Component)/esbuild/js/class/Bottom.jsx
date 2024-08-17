/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { PureComponent } from 'react';

import ColorContext from './ColorContext.js';

class Bottom extends PureComponent {
  render() {
    return (
      <ColorContext.Consumer>
        {context => <h1 style={{ color: context.color }}>Bottom</h1>}
      </ColorContext.Consumer>
    );
  }
}

export default Bottom;
