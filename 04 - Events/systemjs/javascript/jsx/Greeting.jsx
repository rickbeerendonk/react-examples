/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class Greeting extends React.Component {
  onChange(e) {
    alert(`Event handled.
Target: ${e.target}
Value: ${e.target.value}`);
  }
  render() {
    return <input onChange={this.onChange} value="Hello World!" />;
  }
}
