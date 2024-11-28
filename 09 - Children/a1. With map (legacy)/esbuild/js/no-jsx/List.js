/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement, Children } from 'react';

const List = props =>
  createElement(
    'ul',
    null,
    Children.map(props.children, function (child, i) {
      return createElement('li', { key: i }, child);
    })
  );

export default List;
