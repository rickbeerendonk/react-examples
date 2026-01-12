/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import React from 'react';
import { hot } from 'react-hot-loader/root';

import Greeting from './Greeting';
import { StyledGreeting } from './StyledGreeting';

function App() {
  return (
    <>
      <Greeting name={'Standard'} />
      <StyledGreeting name={'Styled'} />
    </>
  );
}

export default hot(App);
