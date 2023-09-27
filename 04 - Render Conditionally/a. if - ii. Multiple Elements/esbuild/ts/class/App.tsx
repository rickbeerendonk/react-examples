/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React, { Component } from 'react';

class App extends Component {
  render() {
    const show = true;

    return (
      <>
        <h3>Conditional:</h3>
        {show && (
          <>
            <div>Visible</div>
            <div>Also Visible</div>
          </>
        )}
      </>
    );
  }
}

export default App;
