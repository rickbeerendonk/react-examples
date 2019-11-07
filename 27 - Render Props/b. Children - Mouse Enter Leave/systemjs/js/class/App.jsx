/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import Greeting from './Greeting';
import MouseOver from './MouseOver';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MouseOver>
          {mouseIsOver => <Greeting name="First" highlight={mouseIsOver} />}
        </MouseOver>
        <Greeting name="Second" />
        <MouseOver>
          {mouseIsOver => (
            <h2>
              Subtitle
              {mouseIsOver && ' (with mouse)'}
            </h2>
          )}
        </MouseOver>
      </React.Fragment>
    );
  }
}

export default App;
