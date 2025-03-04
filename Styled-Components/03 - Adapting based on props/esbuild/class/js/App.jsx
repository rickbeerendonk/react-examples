/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

import { StyledButton } from './styled.jsx';

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
