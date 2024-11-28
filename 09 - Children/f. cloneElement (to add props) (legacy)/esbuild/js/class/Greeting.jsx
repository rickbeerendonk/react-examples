/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

class Greeting extends Component {
  render() {
    return (
      <i>
        {this.props.greet} {this.props.name}
      </i>
    );
  }
}

export default Greeting;
