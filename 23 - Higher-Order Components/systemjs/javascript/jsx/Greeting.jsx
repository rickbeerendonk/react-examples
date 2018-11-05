/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class Greeting extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}
