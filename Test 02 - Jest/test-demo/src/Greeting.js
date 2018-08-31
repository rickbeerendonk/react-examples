import React from 'react';

/* eslint react/prop-types: "off" */

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    if (!props.name) {
      throw new Error('No name provided');
    }
  }
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

export default Greeting;
