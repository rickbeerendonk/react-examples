/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

interface IGreetingProps {
  name: string;
}

export default class Greeting extends React.Component<
  IGreetingProps,
  undefined
> {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}
