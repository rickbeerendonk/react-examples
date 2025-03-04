/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint react/prop-types:"off", no-console:"off" */

import { Component } from 'react';

import Greeting from './Greeting.jsx';

class Child extends Component {
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
