/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

const List = props =>
  React.createElement(
    'ul',
    null,
    React.Children.map(props.children, function(child, i) {
      return React.createElement('li', { key: i }, child);
    })
  );

export default List;
