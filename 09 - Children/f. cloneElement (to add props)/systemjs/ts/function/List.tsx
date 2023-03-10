/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';

interface ListProps {
  children: JSX.Element[];
  greet?: string;
}

function List(props: ListProps) {
  return (
    <ul>
      {React.Children.map(props.children, (child, i) => (
        <li key={i}>
          {child.props.greet
            ? child
            : // child is readonly.
              // To changes props/children on the child, use React.cloneElement.
              // New props (2nd argument) will overwrite existing props.
              React.cloneElement(child, { greet: props.greet })}
        </li>
      ))}
    </ul>
  );
}

export default List;
