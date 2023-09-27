/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from 'react';

class Greeting extends Component {
  constructor() {
    // Don't pass on the properties
    super();
  }
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

export default Greeting;
