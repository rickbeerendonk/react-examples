/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

export default class Greeting extends React.Component {
  render() {
    return (
      <h1 style={this.props.highlight ? {color: 'red'} : null}>Hello {this.props.name}!</h1>
    );
  }
}
