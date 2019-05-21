/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { Spring } from 'react-spring/renderprops';

function Greeting() {
  return (
    <Spring from={{ number: 0 }} to={{ number: 1 }}>
      {props => <h1>Hello {props.number}!</h1>}
    </Spring>
  );
}

export default Greeting;
