/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import React from 'react';

class HelloMessage extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

export default HelloMessage;
