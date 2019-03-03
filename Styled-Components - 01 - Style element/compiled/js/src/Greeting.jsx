/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import React from 'react';
import { hot } from 'react-hot-loader/root';

import { StyledH1 } from './styled';

function Greeting({ name }) {
  return <StyledH1>Hello {name}!</StyledH1>;
}

export default hot(Greeting);
