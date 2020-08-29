/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function Greetings(props) {
  return (
    <React.Fragment>
      <h1>Greetings</h1>
      <ol>
        {
          // Prefer map (instead of for-loops):
          props.names.map((name, index) => (
            <li key={name} value={index}>
              Hello {name}
            </li>
          ))
        }
      </ol>
    </React.Fragment>
  );
}

export default Greetings;
