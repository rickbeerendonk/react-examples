/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import Middle from './Middle';

class Top extends React.Component {
  render() {
    return <Middle color={this.props.color} />;
  }
}

export default Top;
