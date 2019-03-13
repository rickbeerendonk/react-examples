/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import ColorContext from './color-context';
import React from 'react';

class Three extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {context => <h1 style={{ color: context.color }}>Three</h1>}
      </ColorContext.Consumer>
    );
  }
}

export default Three;
