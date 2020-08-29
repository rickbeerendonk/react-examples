/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

function Greetings({ names }) {
  return (
    <React.Fragment>
      <h1>Greetings</h1>
      <ul>
        {
          // Prefer map (instead of for-loops):
          names.map(name => (
            <li key={name}>Hello {name}</li>
          ))
        }
      </ul>
    </React.Fragment>
  );
}

export default Greetings;
