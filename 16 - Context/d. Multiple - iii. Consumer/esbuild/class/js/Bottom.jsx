/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from 'react';

import BackgroundContext from './BackgroundContext.js';
import ColorContext from './ColorContext.js';

class Bottom extends Component {
  render() {
    return (
      <BackgroundContext.Consumer>
        {backgroundContext => (
          <ColorContext.Consumer>
            {colorContext => (
              <h1
                style={{
                  background: backgroundContext.color,
                  color: colorContext.color
                }}
              >
                Bottom
              </h1>
            )}
          </ColorContext.Consumer>
        )}
      </BackgroundContext.Consumer>
    );
  }
}

export default Bottom;
