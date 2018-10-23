/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import ColorContext from './color-context';
import React from 'react';

export default class Three extends React.PureComponent {
  render() {
    return (
      <ColorContext.Consumer>
        {context => <h1 style={{ color: context.color }}>Three</h1>}
      </ColorContext.Consumer>
    );
  }
}
