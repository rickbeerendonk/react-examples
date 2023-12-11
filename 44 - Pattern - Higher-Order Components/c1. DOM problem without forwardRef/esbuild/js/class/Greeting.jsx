/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1 ref={this.props.ref}>Hello {this.props.name}!</h1>;
  }
}

export default Greeting;
