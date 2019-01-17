/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2019 Rick Beerendonk   !*/

import React from 'react';
import { Spring, config } from 'react-spring';

function Greeting() {
  return (
    <Spring
      from={{ number: 0, opacity: 0 }}
      to={{ number: 1, opacity: 1 }}
      config={config.slow}
    >
      {props => (
        <h1 style={{ opacity: props.opacity }}>Hello {props.number}!</h1>
      )}
    </Spring>
  );
}

export default Greeting;
