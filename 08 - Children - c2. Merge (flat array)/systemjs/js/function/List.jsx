/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

/* eslint no-console:"off" */

function List(props) {
  console.log(props.children);

  return (
    <ul>
      {React.Children.map(props.children, (child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ul>
  );
}

export default List;
