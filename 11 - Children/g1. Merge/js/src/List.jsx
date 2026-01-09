/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Children } from 'react';

/* eslint no-console:"off" */

function List(props) {
  console.log(props.children);

  return (
    <ul>
      {Children.map(props.children, (child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ul>
  );
}

export default List;
