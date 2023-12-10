/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { cloneElement, Component, Children } from 'react';

class List extends Component {
  render() {
    return (
      <ul>
        {Children.map(this.props.children, (child, i) => (
          <li key={i}>
            {child.props.greet
              ? child
              : // child is readonly.
                // To changes props/children on the child, use cloneElement.
                // New props (2nd argument) will overwrite existing props.
                cloneElement(child, { greet: this.props.greet })}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
