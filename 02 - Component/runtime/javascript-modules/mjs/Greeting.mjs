/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

import React from './react.development.mjs';

class Greeting extends React.Component {
  render() {
    return React.createElement('h1', null, 'Hello World!');
  }
}

export default Greeting;
