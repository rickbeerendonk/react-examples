/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class Greeting extends React.Component {
  render() {
    return <i>Hello {this.props.name}</i>;
  }
}

export default Greeting;
