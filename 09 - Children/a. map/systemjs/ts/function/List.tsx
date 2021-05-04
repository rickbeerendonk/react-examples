/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

const List: React.FC = props => (
  <ul>
    {React.Children.map(props.children, (child, i) => (
      <li key={i}>{child}</li>
    ))}
  </ul>
);

export default List;
