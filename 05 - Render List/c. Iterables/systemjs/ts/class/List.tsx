/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

interface IListProps {
  names: Set<string>;
}

class List extends React.Component<IListProps> {
  render() {
    return (
      <>
        <h1>List</h1>
        <ul>
          {
            // Prefer map (instead of for-loops):
            Array.from(this.props.names, name => (
              <li key={name}>{name}</li>
            ))
          }
        </ul>
      </>
    );
  }
}

export default List;
