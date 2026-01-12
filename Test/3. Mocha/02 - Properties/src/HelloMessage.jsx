/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import { Component } from 'react';

class HelloMessage extends Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

export default HelloMessage;
