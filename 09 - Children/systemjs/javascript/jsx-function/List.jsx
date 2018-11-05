/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

const List = props => (
  <ul>
    {React.Children.map(props.children, (child, i) => (
      <li key={i}>{child}</li>
    ))}
  </ul>
);

export default List;
