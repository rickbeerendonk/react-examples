/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

import Greeting from './Greeting';
import MouseOver from './MouseOver';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MouseOver>
          {mouseIsOver => <Greeting name="First" highlight={mouseIsOver} />}
        </MouseOver>
        <Greeting name="Second" />
        <MouseOver>
          {mouseIsOver => <h2>Subtitle{mouseIsOver && ' (with mouse)'}</h2>}
        </MouseOver>
      </React.Fragment>
    );
  }
}
