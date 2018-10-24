/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

class Greeting extends React.Component {
  render() {
    return React.createElement('h1', null, 'Hello ', this.props.name, '!');
  }
}

export default Greeting;
