/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import Greeting from './Greeting';
import MouseOver from './MouseOver';

const App = () => (
  <React.Fragment>
    <MouseOver
      render={mouseIsOver => <Greeting name="First" highlight={mouseIsOver} />}
    />
    <Greeting name="Second" />
    <MouseOver
      render={mouseIsOver => <h2>Subtitle{mouseIsOver && ' (with mouse)'}</h2>}
    />
  </React.Fragment>
);

export default App;
