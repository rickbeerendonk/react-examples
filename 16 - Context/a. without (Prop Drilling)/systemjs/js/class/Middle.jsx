/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import Bottom from './Bottom';

class Middle extends React.Component {
  render() {
    return <Bottom color={this.props.color} />;
  }
}

export default Middle;
