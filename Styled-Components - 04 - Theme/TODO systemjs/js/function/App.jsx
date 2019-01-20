/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import { StyledButton } from './styled';

function App() {
  return (
    <React.Fragment>
      <StyledButton>Enabled</StyledButton>
      <StyledButton disabled={true}>Disabled</StyledButton>
    </React.Fragment>
  );
}

export default App;
