/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React, { Children, cloneElement } from 'react';

import { GreetingProps } from './Greeting';

interface ListProps {
  children:
    | React.ReactElement<GreetingProps>
    | React.ReactElement<GreetingProps>[];
  greet?: string;
}

function List(props: ListProps) {
  return (
    <ul>
      {Children.map(props.children, (child, i) => (
        <li key={i}>
          {child.props.greet
            ? child
            : // child is readonly.
              // To changes props/children on the child, use cloneElement.
              // New props (2nd argument) will overwrite existing props.
              cloneElement(child, { greet: props.greet })}
        </li>
      ))}
    </ul>
  );
}

export default List;
