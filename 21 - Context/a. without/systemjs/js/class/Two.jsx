/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import Three from './Three';

class Two extends React.Component {
  render() {
    return <Three color={this.props.color} />;
  }
}

export default Two;
