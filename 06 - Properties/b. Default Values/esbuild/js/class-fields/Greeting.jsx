/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

class Greeting extends Component {
  // Proposal: https://github.com/tc39/proposal-static-class-features
  // Support: http://kangax.github.io/compat-table/esnext/#test-static_class_fields
  static defaultProps = {
    name: 'World'
  };
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

export default Greeting;
