/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class Greeting extends React.Component<undefined, undefined> {
  onChange(e: React.SyntheticEvent<HTMLInputElement>) {
    alert(`Event handled.
Target: ${e.currentTarget}
Value: ${e.currentTarget.value}`);
  }
  render() {
    return <input onChange={this.onChange} value="Hello World!" />;
  }
}
