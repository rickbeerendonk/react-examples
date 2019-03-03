/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import React from 'react';
import { hot } from 'react-hot-loader/root';

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

export default hot(App);
