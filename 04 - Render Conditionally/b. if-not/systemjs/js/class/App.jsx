/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class App extends React.Component {
  render() {
    const hide = true;

    return (
      <React.Fragment>
        <h3>Conditional:</h3>
        {
          // Only render when a name is truthy:
          !hide || <div>Visible</div>
        }
      </React.Fragment>
    );
  }
}

export default App;
