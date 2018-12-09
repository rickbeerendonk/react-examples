/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import React from 'react';

import { StyledH1 } from './styled';

function Greeting({ name }) {
  return <StyledH1>Hello {name}!</StyledH1>;
}

export default Greeting;
