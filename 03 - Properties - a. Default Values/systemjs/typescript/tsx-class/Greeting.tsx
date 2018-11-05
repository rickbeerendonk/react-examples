/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

interface IGreetingProps {
  name: string;
}

class Greeting extends React.Component<IGreetingProps> {
  static defaultProps: IGreetingProps = {
    name: 'World'
  };
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

export default Greeting;
