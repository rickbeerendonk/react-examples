/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Children, createElement } from 'react';

/* eslint no-console:"off" */

function List(props) {
  console.log(props.children);

  return createElement(
    'ul',
    null,
    Children.map(props.children, function (child, i) {
      return createElement('li', { key: i }, child);
    })
  );
}

export default List;
