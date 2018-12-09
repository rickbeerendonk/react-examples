/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

function List(props) {
  return React.createElement(
    'ul',
    null,
    React.Children.map(props.children, function(child, i) {
      return React.createElement(
        'li',
        { key: i },
        child.props.greeting
          ? child
          : // child is readonly.
            // To changes props/children on the child, use React.cloneElement.
            // New props (2nd argument) will overwrite existing props.
            React.cloneElement(child, { greeting: props.greeting })
      );
    })
  );
}

export default List;
