/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class Greeting extends React.Component {
  render() {
    return <span>Hello {this.props.name}!</span>;
  }
}

export default Greeting;
