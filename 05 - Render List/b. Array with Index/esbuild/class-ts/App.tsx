/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React, { Component } from 'react';

class App extends Component {
  render() {
    const names = ['Alexandra', 'Benjamin', 'Charlotte'];

    return (
      <>
        <h1>Greetings</h1>
        <ol>
          {
            // Prefer map (instead of for-loops):
            names.map((name, index) => (
              <li key={name} value={index}>
                Hello {name}
              </li>
            ))
          }
        </ol>
      </>
    );
  }
}

export default App;
