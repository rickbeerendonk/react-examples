/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

class Greeting extends Component {
  render() {
    return <i>Hello {this.props.name}</i>;
  }
}

export default Greeting;
