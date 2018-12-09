/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import React from 'react';

import Greeting from './Greeting';
import { StyledGreeting } from './StyledGreeting';

function App() {
  return (
    <React.Fragment>
      <Greeting name={'Standard'} />
      <StyledGreeting name={'Styled'} />
    </React.Fragment>
  );
}

export default App;
