/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

interface ListProps {
  children: React.ReactNode;
}

function List(props: ListProps) {
  return (
    <ul>
      {React.Children.map(props.children, (child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ul>
  );
}

export default List;
