/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", no-console:"off" */

import React from 'react';

import Greeting from './Greeting';

class Child extends React.Component {
  render() {
    return (
      <h2>
        <span>Child: </span>
        <Greeting name={this.props.obj.name} />
      </h2>
    );
  }
}

export default Child;
