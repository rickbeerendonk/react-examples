/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface GreetingProps {
  name: string;
}

class Greeting extends React.Component<GreetingProps> {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

export default Greeting;
