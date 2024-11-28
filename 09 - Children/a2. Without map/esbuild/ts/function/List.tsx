/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { ReactNode } from 'react';

interface ListProps {
  children: ReactNode;
}

function List(props: ListProps) {
  return <ul>{props.children}</ul>;
}

export default List;
