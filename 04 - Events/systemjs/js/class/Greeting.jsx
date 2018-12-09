/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

class Greeting extends React.Component {
  handleChange(e) {
    alert(`Event handled.
Target: ${e.target}
Value: ${e.target.value}`);
  }
  render() {
    return <input onChange={this.handleChange} value="Hello World!" />;
  }
}

export default Greeting;
