/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import Greeting from './Greeting';
import MouseOver from './MouseOver';

const App = () => (
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

export default App;
