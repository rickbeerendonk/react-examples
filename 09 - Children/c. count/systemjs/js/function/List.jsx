/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

function List(props) {
  return <h1>Number of children: {React.Children.count(props.children)}</h1>;
}

export default List;
