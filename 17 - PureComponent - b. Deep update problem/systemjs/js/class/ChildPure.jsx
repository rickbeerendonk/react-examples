/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off", no-console:"off" */

import React from 'react';

import Greeting from './Greeting';

export default class ChildPure extends React.PureComponent {
  render() {
    return (
      <h2>
        <span>Child (Pure): </span>
        <Greeting name={this.props.obj.name} />
      </h2>
    );
  }
}
