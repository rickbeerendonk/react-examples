/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* eslint react/display-name:"off" */

import React from 'react';
import GreetingEditor from './GreetingEditor';
import useMousePosition from './mouse-position-hook';

export default function() {
  const mousePosition = useMousePosition();

  return (
    <React.Fragment>
      <GreetingEditor name="World" />
      <hr />
      <h1>Mouse Position</h1>
      <p>
        X: {mousePosition.X} <br />
        Y: {mousePosition.Y}
      </p>
    </React.Fragment>
  );
}
