/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React, { Children } from 'react';

interface ListProps {
  children: React.ReactNode;
}

function List(props: ListProps) {
  return <h1>Number of children: {Children.count(props.children)}</h1>;
}

export default List;
