/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class Greeting extends React.Component {
  handleChange(e: React.SyntheticEvent<HTMLInputElement>) {
    alert(`Event handled.
Target: ${e.currentTarget}
Value: ${e.currentTarget.value}`);
  }
  render() {
    return <input onChange={this.handleChange} value="Hello World!" />;
  }
}

export default Greeting;
