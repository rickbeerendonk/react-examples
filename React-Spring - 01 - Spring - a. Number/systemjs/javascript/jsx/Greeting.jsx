/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';
import { Spring } from 'react-spring';

function Greeting() {
  return (
    <Spring from={{ number: 0 }} to={{ number: 1 }}>
      {props => <h1>Hello {props.number}!</h1>}
    </Spring>
  );
}

export default Greeting;
