/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function List(props) {
  return (
    <React.Fragment>
      <h1>List</h1>
      <ul>
        {
          // Prefer map (instead of for-loops):
          Array.from(props.names, name => (
            <li key={name}>{name}</li>
          ))
        }
      </ul>
    </React.Fragment>
  );
}

export default List;
