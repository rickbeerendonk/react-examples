/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import { StyledButton } from './styled';

class App extends Component {
  render() {
    return (
      <>
        <StyledButton>Enabled</StyledButton>
        <StyledButton disabled={true}>Disabled</StyledButton>
      </>
    );
  }
}

export default hot(App);
