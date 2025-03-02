/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, ChangeEvent } from 'react';

export default class App extends Component {
  handleChange(e: ChangeEvent<HTMLInputElement>) {
    alert(`Event handled.
Target: ${e.target}
Value: ${e.target.value}
Data: ${e.nativeEvent.data}`);
  }
  render() {
    return <input onChange={this.handleChange} value="Hello React!" />;
  }
}
