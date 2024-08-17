/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

import ColorContext from './ColorContext.ts';
import Middle from './Middle.tsx';

interface TopProps {
  color: string;
}

class Top extends Component<TopProps> {
  render() {
    return (
      <ColorContext.Provider value={{ color: this.props.color }}>
        <Middle />
      </ColorContext.Provider>
    );
  }
}

export default Top;
