/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from 'react';

class Greeting extends Component {
  constructor() {
    // Pass alternative
    super({ name: '<wrong props>' });
  }
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

export default Greeting;
