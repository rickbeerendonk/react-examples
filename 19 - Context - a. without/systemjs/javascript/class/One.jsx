/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import Two from './Two';

class One extends React.Component {
  render() {
    return <Two color={this.props.color} />;
  }
}

export default One;
