/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <input type="date" value={new Date().toISOString().substring(0, 10)} />
    );
  }
}

export default App;
