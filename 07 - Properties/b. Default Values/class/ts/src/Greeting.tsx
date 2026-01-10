/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

interface GreetingProps {
  name?: string;
}

class Greeting extends Component<GreetingProps> {
  static defaultProps: GreetingProps = {
    name: 'World'
  };
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

export default Greeting;
