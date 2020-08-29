/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

interface IListProps {
  names: Set<string>;
}

const List: React.FC<IListProps> = props => (
  <React.Fragment>
    <h1>List</h1>
    <ul>
      {Array.from(props.names, name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  </React.Fragment>
);

export default List;
