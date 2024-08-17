/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from 'react';

import ColorContext from './ColorContext.js';
import Middle from './Middle.jsx';

class Top extends Component {
  render() {
    return (
      // React 19+: <ColorContext> is enough, no Provider needed.
      <ColorContext.Provider value={{ color: this.props.color }}>
        <Middle />
      </ColorContext.Provider>
    );
  }
}

export default Top;
