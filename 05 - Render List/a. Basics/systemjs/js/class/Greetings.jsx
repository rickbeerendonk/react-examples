/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

class Greetings extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Greetings</h1>
        <ul>
          {// Prefer map (instead of for-loops):
          this.props.names.map(name => (
            <li key={name}>Hello {name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Greetings;
