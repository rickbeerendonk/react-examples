/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import Greeting from './Greeting';
import MouseOver from './MouseOver';

function App() {
  return (
    <React.Fragment>
      <MouseOver
        render={mouseIsOver => (
          <Greeting name="First" highlight={mouseIsOver} />
        )}
      />
      <Greeting name="Second" />
      <MouseOver
        render={mouseIsOver => (
          <h2>
            Subtitle
            {mouseIsOver && ' (with mouse)'}
          </h2>
        )}
      />
    </React.Fragment>
  );
}

export default App;
