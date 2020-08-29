/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function List({ names }) {
  return (
    <React.Fragment>
      <h1>List</h1>
      <ul>
        {
          // Prefer map (instead of for-loops):
          Array.from(names, name => (
            <li key={name}>{name}</li>
          ))
        }
      </ul>
    </React.Fragment>
  );
}

export default List;
