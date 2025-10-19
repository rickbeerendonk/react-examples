/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React, { Children } from 'react';

interface ListProps {
  children: React.ReactNode;
}

function List(props: ListProps) {
  // toArray allows use of all Array methods.
  return (
    <ul>
      {Children.toArray(props.children)
        .toReversed()
        .map((child, i) => (
          <li key={i}>{child}</li>
        ))}
    </ul>
  );
}

export default List;
