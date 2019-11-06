/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

/* eslint no-console:"off" */

function List(props) {
  console.log(props.children);

  return React.createElement(
    'ul',
    null,
    React.Children.map(props.children, function(child, i) {
      return React.createElement('li', { key: i }, child);
    })
  );
}

export default List;
