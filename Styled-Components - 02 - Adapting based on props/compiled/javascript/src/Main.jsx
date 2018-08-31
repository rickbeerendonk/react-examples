/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import { StyledButton } from './styled';

/* eslint react/prop-types:"off" */

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StyledButton>Enabled</StyledButton>
        <StyledButton disabled={true}>Disabled</StyledButton>
      </React.Fragment>
    );
  }
}

export default Main;
