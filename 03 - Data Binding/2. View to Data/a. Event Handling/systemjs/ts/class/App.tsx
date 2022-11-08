/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class App extends React.Component {
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    alert(`Event handled.
Target: ${e.target}
Value: ${e.target.value}
Data: ${e.nativeEvent.data}`);
  }
  render() {
    return <input onChange={this.handleChange} value="Hello React!" />;
  }
}

export default App;
