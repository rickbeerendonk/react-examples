/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function List(props) {
  // toArray allows use of all Array methods.
  return (
    <ul>
      {React.Children.toArray(props.children)
        .reverse()
        .map((child, i) => (
          <li key={i}>{child}</li>
        ))}
    </ul>
  );
}

export default List;
