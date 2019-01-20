/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", no-console:"off" */

import React from 'react';

import Greeting from './Greeting';

class ChildPure extends React.PureComponent {
  render() {
    return (
      <h2>
        <span>Child (Pure): </span>
        <Greeting name={this.props.obj.name} />
      </h2>
    );
  }
}

export default ChildPure;
