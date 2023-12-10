/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Children, cloneElement, createElement } from 'react';

function List(props) {
  return createElement(
    'ul',
    null,
    Children.map(props.children, function (child, i) {
      return createElement(
        'li',
        { key: i },
        child.props.greeting
          ? child
          : // child is readonly.
            // To changes props/children on the child, use cloneElement.
            // New props (2nd argument) will overwrite existing props.
            cloneElement(child, { greeting: props.greeting })
      );
    })
  );
}

export default List;
